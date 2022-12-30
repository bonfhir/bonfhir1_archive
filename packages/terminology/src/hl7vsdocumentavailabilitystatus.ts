/**
 * Value Set of codes that define whether a patient document is appropriate or available for use in patient care.
 * http://terminology.hl7.org/ValueSet/v2-0273
 */
export const Hl7VSDocumentAvailabilityStatusCode = {
  /**
   * Available for patient care
   */
  AV: "AV",

  /**
   * Deleted
   */
  CA: "CA",

  /**
   * Obsolete
   */
  OB: "OB",

  /**
   * Unavailable for patient care
   */
  UN: "UN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDocumentAvailabilityStatusCode =
  typeof Hl7VSDocumentAvailabilityStatusCode[keyof typeof Hl7VSDocumentAvailabilityStatusCode];
