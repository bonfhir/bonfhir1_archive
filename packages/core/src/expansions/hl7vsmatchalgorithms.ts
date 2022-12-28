/**
 * Value Set of codes identifying the name or identity of the specific search algorithm to which the RCP-5 Search Confidence Threshold and the QRI-1 Candidate Confidence refer.
 * http://terminology.hl7.org/ValueSet/v2-0393
 */
export const Hl7VSMatchAlgorithmsCode = {
  /**
   * Proprietary algorithm for LinkSoft v2.01
   */
  "LINKSOFT_2.01": "LINKSOFT_2.01",

  /**
   * Proprietary algorithm for MatchWare v1.2
   */
  "MATCHWARE_1.2": "MATCHWARE_1.2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMatchAlgorithmsCode =
  typeof Hl7VSMatchAlgorithmsCode[keyof typeof Hl7VSMatchAlgorithmsCode];
