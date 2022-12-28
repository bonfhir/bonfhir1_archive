/**
 * Used to enumerate the moods that a substance administration can take within the body of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xDocumentSubstanceMood
 */
export const XDocumentSubstanceMoodCode = {
  /**
   * definition
   */
  DEF: "DEF",

  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * intent
   */
  INT: "INT",

  /**
   * promise
   */
  PRMS: "PRMS",

  /**
   * proposal
   */
  PRP: "PRP",

  /**
   * request
   */
  RQO: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XDocumentSubstanceMoodCode =
  typeof XDocumentSubstanceMoodCode[keyof typeof XDocumentSubstanceMoodCode];
