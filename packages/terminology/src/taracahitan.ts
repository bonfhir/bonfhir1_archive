/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Taracahitan
 */
export const TaracahitanCode = {
  /**
   * Cahitan
   */
  _Cahitan: "_Cahitan",

  /**
   * Yaqui
   */
  "x-YAQ": "x-YAQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TaracahitanCode =
  typeof TaracahitanCode[keyof typeof TaracahitanCode];
