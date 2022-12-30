/**
 * Value Set of codes that describe the availability of a document in relation to the type of storage.
 * http://terminology.hl7.org/ValueSet/v2-0275
 */
export const Hl7VSDocumentStorageStatusCode = {
  /**
   * Active
   */
  AC: "AC",

  /**
   * Active and archived
   */
  AA: "AA",

  /**
   * Archived (not active)
   */
  AR: "AR",

  /**
   * Purged
   */
  PU: "PU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDocumentStorageStatusCode =
  typeof Hl7VSDocumentStorageStatusCode[keyof typeof Hl7VSDocumentStorageStatusCode];
