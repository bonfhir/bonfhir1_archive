/**
 * Value Set of codes specifying the code for a certification category.
 * http://terminology.hl7.org/ValueSet/v2-0922
 */
export const Hl7VSCertificationCategoryCodeCode = {
  /**
   * Initial Request
   */
  InitialRequest: "IR",

  /**
   * Request for Appeal
   */
  RequestforAppeal: "RA",

  /**
   * Request for Extension
   */
  RequestforExtension: "RE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCertificationCategoryCodeCode =
  typeof Hl7VSCertificationCategoryCodeCode[keyof typeof Hl7VSCertificationCategoryCodeCode];
