/**
 * Status of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xDocumentStatus
 */
export const XDocumentStatusCode = {
  /**
   * active
   */
  active: "active",

  /**
   * cancelled
   */
  cancelled: "cancelled",

  /**
   * new
   */
  new: "new",

  /**
   * obsolete
   */
  obsolete: "obsolete",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XDocumentStatusCode =
  typeof XDocumentStatusCode[keyof typeof XDocumentStatusCode];
