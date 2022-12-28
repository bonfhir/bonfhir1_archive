/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Tsamosan
 */
export const TsamosanCode = {
  /**
   * Lower Chehalis
   */
  "x-CEA": "x-CEA",

  /**
   * Upper Chehalis
   */
  "x-CJH": "x-CJH",

  /**
   * Cowlitz
   */
  "x-COW": "x-COW",

  /**
   * Quinault
   */
  "x-QUN": "x-QUN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TsamosanCode = typeof TsamosanCode[keyof typeof TsamosanCode];
