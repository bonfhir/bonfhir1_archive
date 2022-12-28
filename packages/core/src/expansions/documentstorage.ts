/**
 * Identifies the storage status of a document.
 * http://terminology.hl7.org/ValueSet/v3-DocumentStorage
 */
export const DocumentStorageCode = {
  /**
   * archived (not active)
   */
  AR: "AR",

  /**
   * purged
   */
  PU: "PU",

  /**
   * active
   */
  AC: "AC",

  /**
   * active and archived
   */
  AA: "AA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentStorageCode =
  typeof DocumentStorageCode[keyof typeof DocumentStorageCode];
