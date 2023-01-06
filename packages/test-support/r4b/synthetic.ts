import {
  BundleNavigator,
  bundleNavigator,
  ExtractResource,
  ResourceType,
} from "@bonfhir/core/r4b/index.js";
import { rand } from "@ngneat/falso";
import fg from "fast-glob";
import { Bundle, FhirResource } from "fhir/r4";
import { evaluate } from "fhirpath";
import { readFile } from "fs/promises";

export type SyntheticFn = <TResourceType extends ResourceType>(
  resourceType: TResourceType,
  options?:
    | SyntheticFnOptions<ExtractResource<TResourceType>>
    | null
    | undefined
) => Promise<ExtractResource<TResourceType>>;

export interface SyntheticFnOptions<TResource extends FhirResource> {
  /**
   * Search for specific synthetic data types.
   * Will throw if nothing can be found in the synthetic data.
   */
  fhirPath?: string | null | undefined;

  /**
   * Override the synthetic data with specific values.
   */
  override?: Partial<Omit<TResource, "resourceType">> | null | undefined;
}

export function syntheticGenerator(dataFilesPath: string): SyntheticFn {
  let loadingPromise: Promise<BundleNavigator<FhirResource>> | null = null;

  return async (resourceType, options) => {
    if (!loadingPromise) {
      loadingPromise = loadSyntheticNavigator(dataFilesPath);
    }

    const navigator = await loadingPromise;

    let allResources = navigator.type(resourceType);
    if (options?.fhirPath) {
      allResources = allResources.filter((x) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const evaluationResult = evaluate(x, options!.fhirPath!);
        return !(evaluationResult.length === 0 || !evaluationResult[0]);
      });
    }

    if (allResources.length === 0) {
      throw new Error(
        `Unable to find a resource of type ${resourceType} in the synthetic data.`
      );
    }

    const pickOne = rand(allResources);

    return {
      ...pickOne,
      ...options?.override,
    };
  };
}

async function loadSyntheticNavigator(
  dataFilesPath: string
): Promise<BundleNavigator<FhirResource>> {
  const dataFiles = await fg(dataFilesPath);
  const bundles: Array<Bundle<FhirResource>> = [];
  for (const dataFile of dataFiles) {
    try {
      const bundle = JSON.parse(
        await readFile(dataFile, "utf-8")
      ) as Bundle<FhirResource>;
      if (bundle.resourceType !== "Bundle") {
        throw new Error("Synthetic resources can only be loaded as Bundles.");
      }
      bundles.push(bundle);
    } catch (error) {
      throw new Error(`Error while reading file ${dataFile}: ${error}.`);
    }
  }

  return bundleNavigator(bundles);
}
