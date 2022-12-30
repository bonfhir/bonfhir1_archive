/**
 * A storage status in which a document is available on-line.
 * http://terminology.hl7.org/ValueSet/v3-DocumentStorageActive
 */
export const DocumentStorageActiveCode = {
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
export type DocumentStorageActiveCode =
  typeof DocumentStorageActiveCode[keyof typeof DocumentStorageActiveCode];
