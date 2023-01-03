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
