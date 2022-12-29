/**
 * Value Set of codes that define whether a patient document is appropriate or available for use in patient care.
 * http://terminology.hl7.org/ValueSet/v2-0273
 */
export const Hl7VSDocumentAvailabilityStatusCode = {
  /**
   * Available for patient care
   */
  Availableforpatientcare: "AV",

  /**
   * Deleted
   */
  Deleted: "CA",

  /**
   * Obsolete
   */
  Obsolete: "OB",

  /**
   * Unavailable for patient care
   */
  Unavailableforpatientcare: "UN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDocumentAvailabilityStatusCode =
  typeof Hl7VSDocumentAvailabilityStatusCode[keyof typeof Hl7VSDocumentAvailabilityStatusCode];
