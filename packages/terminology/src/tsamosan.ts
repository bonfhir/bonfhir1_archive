/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Tsamosan
 */
export const TsamosanCode = {
  /**
   * Lower Chehalis
   */
  LowerChehalis: "x-CEA",

  /**
   * Upper Chehalis
   */
  UpperChehalis: "x-CJH",

  /**
   * Cowlitz
   */
  Cowlitz: "x-COW",

  /**
   * Quinault
   */
  Quinault: "x-QUN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TsamosanCode = typeof TsamosanCode[keyof typeof TsamosanCode];
