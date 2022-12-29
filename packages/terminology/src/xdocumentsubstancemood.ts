/**
 * Used to enumerate the moods that a substance administration can take within the body of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xDocumentSubstanceMood
 */
export const XDocumentSubstanceMoodCode = {
  /**
   * definition
   */
  definition: "DEF",

  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",

  /**
   * intent
   */
  intent: "INT",

  /**
   * promise
   */
  promise: "PRMS",

  /**
   * proposal
   */
  proposal: "PRP",

  /**
   * request
   */
  request: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XDocumentSubstanceMoodCode =
  typeof XDocumentSubstanceMoodCode[keyof typeof XDocumentSubstanceMoodCode];
