import { CodeableConcept, Reference } from "fhir/r4";
import { narrative } from "./narratives";
import {
  ExtractResource,
  isDomainResource,
  ResourceType,
  WithRequired,
} from "./types";

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

export interface Referenceable {
  resourceType: string | undefined;
  id?: string | undefined;
}

/**
 * Build a new Reference to a resource.
 */
export function buildReferenceFromResource(
  resource: Referenceable
): WithRequired<Reference, "reference">;
export function buildReferenceFromResource(
  resource: null | undefined
): undefined;
export function buildReferenceFromResource(
  resource: Referenceable | null | undefined
): WithRequired<Reference, "reference"> | undefined;
export function buildReferenceFromResource(
  resource: Referenceable | null | undefined
): WithRequired<Reference, "reference"> | undefined {
  if (!resource) {
    return undefined;
  }

  if (!resource.resourceType || !resource.id) {
    throw new Error(
      `Cannot build reference from ${JSON.stringify(
        resource
      )}. Missing either the resourceType or id.`
    );
  }

  return {
    reference: `${resource.resourceType}/${resource.id}`,
    type: resource.resourceType,
  };
}
