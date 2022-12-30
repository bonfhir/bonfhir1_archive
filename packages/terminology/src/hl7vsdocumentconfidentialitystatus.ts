/**
 * Value Set of codes that specify the degree to which special confidentiality protection should be applied to  information.  The assignment of data elements to these categories is left to the discretion of the healthcare organization.
 * http://terminology.hl7.org/ValueSet/v2-0272
 */
export const Hl7VSDocumentConfidentialityStatusCode = {
  /**
   * ASTM Level 1
   */
  "1": "1",

  /**
   * ASTM Level 2
   */
  "2": "2",

  /**
   * ASTM Level 3
   */
  "3": "3",

  /**
   * Restricted
   */
  RE: "RE",

  /**
   * Usual control
   */
  UC: "UC",

  /**
   * Very restricted
   */
  VR: "VR",

  /**
   * Very restricted
   */
  V: "V",

  /**
   * Restricted
   */
  R: "R",

  /**
   * Usual control
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDocumentConfidentialityStatusCode =
  typeof Hl7VSDocumentConfidentialityStatusCode[keyof typeof Hl7VSDocumentConfidentialityStatusCode];
