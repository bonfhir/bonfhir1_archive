/**
 * Value Set of codes that specify the degree to which special confidentiality protection should be applied to  information.  The assignment of data elements to these categories is left to the discretion of the healthcare organization.
 * http://terminology.hl7.org/ValueSet/v2-0272
 */
export const Hl7VSDocumentConfidentialityStatusCode = {
  /**
   * ASTM Level 1
   */
  ASTMLevel1: "1",

  /**
   * ASTM Level 2
   */
  ASTMLevel2: "2",

  /**
   * ASTM Level 3
   */
  ASTMLevel3: "3",

  /**
   * Restricted
   */
  Restricted: "RE",

  /**
   * Usual control
   */
  Usualcontrol: "UC",

  /**
   * Very restricted
   */
  Veryrestricted: "VR",

  /**
   * Very restricted
   */
  Veryrestricted: "V",

  /**
   * Restricted
   */
  Restricted: "R",

  /**
   * Usual control
   */
  Usualcontrol: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDocumentConfidentialityStatusCode =
  typeof Hl7VSDocumentConfidentialityStatusCode[keyof typeof Hl7VSDocumentConfidentialityStatusCode];
