/**
 * A public health case is a Concern about an observation or event that has a specific significance for public health. The creation of a PublicHealthCase initiates the tracking of the object of concern. The decision to track is related to but somewhat independent of the underlying event or observation.
 * http://terminology.hl7.org/ValueSet/v3-ActClassPublicHealthCase2
 */
export const ActClassPublicHealthCase2Code = {
  /**
   * public health case
   */
  publichealthcase: "HCASE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassPublicHealthCase2Code =
  typeof ActClassPublicHealthCase2Code[keyof typeof ActClassPublicHealthCase2Code];
