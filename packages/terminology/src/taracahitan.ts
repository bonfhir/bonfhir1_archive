/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Taracahitan
 */
export const TaracahitanCode = {
  /**
   * Cahitan
   */
  Cahitan: "_Cahitan",

  /**
   * Yaqui
   */
  Yaqui: "x-YAQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TaracahitanCode =
  typeof TaracahitanCode[keyof typeof TaracahitanCode];
