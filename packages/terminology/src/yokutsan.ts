/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Yokutsan
 */
export const YokutsanCode = {
  /**
   * Kings River
   */
  KingsRiver: "x-ENH",

  /**
   * Gashowu
   */
  Gashowu: "x-GSH",

  /**
   * Poso Creek
   */
  PosoCreek: "x-PYL",

  /**
   * Tule-Kaweah
   */
  TuleKaweah: "x-TKH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YokutsanCode = typeof YokutsanCode[keyof typeof YokutsanCode];
