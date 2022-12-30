/**
 * Concepts that indicate whether a Specimen/Attribute is Preferred or Alternate for collection of a particular specimen.
 * http://terminology.hl7.org/ValueSet/v2-0920
 */
export const Hl7VSPreferredSpecimenAttributeStatusCode = {
  /**
   * Preferred
   */
  P: "P",

  /**
   * Alternate
   */
  A: "A",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPreferredSpecimenAttributeStatusCode =
  typeof Hl7VSPreferredSpecimenAttributeStatusCode[keyof typeof Hl7VSPreferredSpecimenAttributeStatusCode];
