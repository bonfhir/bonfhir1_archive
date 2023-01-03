import { CodeableConcept } from "fhir/r4";
import { narrative } from "./narratives";
import { ExtractResource, isDomainResource, ResourceType } from "./types";

/**
 * Build a specific FHIR resource.
 * If the narrative property is not provided, it is generated using a default narrative generator.
 */
export function build<TResource extends ResourceType>(
  resourceType: TResource,
  resource: Omit<ExtractResource<TResource>, "resourceType">
): ExtractResource<TResource> {
  const result = {
    ...resource,
    resourceType,
  } as ExtractResource<TResource>;

  if (isDomainResource(result)) {
    if (!result.text) {
      result.text = narrative(result);
    }
  }

  return result;
}

/**
 * Build a new `CodeableConcept`.
 * The `text` property default to the first coding `display` value if not provided.
 */
export function buildCodeableConcept(element: CodeableConcept): CodeableConcept;
export function buildCodeableConcept(element: null | undefined): undefined;
export function buildCodeableConcept(
  element: CodeableConcept | null | undefined
): CodeableConcept | undefined;
export function buildCodeableConcept(
  element: CodeableConcept | null | undefined
): CodeableConcept | undefined {
  return element
    ? {
        ...element,
        text: element?.text || element?.coding?.[0]?.display,
      }
    : undefined;
}
