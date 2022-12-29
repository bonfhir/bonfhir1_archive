/**
 * Identifies the storage status of a document.
 * http://terminology.hl7.org/ValueSet/v3-DocumentStorage
 */
export const DocumentStorageCode = {
  /**
   * archived (not active)
   */
  archivednotactive: "AR",

  /**
   * purged
   */
  purged: "PU",

  /**
   * active
   */
  active: "AC",

  /**
   * active and archived
   */
  activeandarchived: "AA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentStorageCode =
  typeof DocumentStorageCode[keyof typeof DocumentStorageCode];
