/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-MississippiValley
 */
export const MississippiValleyCode = {
  /**
   * ChiwereWinnebago
   */
  _ChiwereWinnebago: "_ChiwereWinnebago",

  /**
   * Chiwere
   */
  "x-IOW": "x-IOW",

  /**
   * Hocak
   */
  "x-WIN": "x-WIN",

  /**
   * Dakotan
   */
  _Dakotan: "_Dakotan",

  /**
   * Assiniboine
   */
  "x-ASB": "x-ASB",

  /**
   * Dakota
   */
  "x-DHG": "x-DHG",

  /**
   * Lakota
   */
  "x-LKT": "x-LKT",

  /**
   * Nakota
   */
  "x-NKT": "x-NKT",

  /**
   * Dhegiha
   */
  _Dhegiha: "_Dhegiha",

  /**
   * Kansa
   */
  "x-KAA": "x-KAA",

  /**
   * Omaha-Ponca
   */
  "x-OMA": "x-OMA",

  /**
   * Osage
   */
  "x-OSA": "x-OSA",

  /**
   * Quapaw
   */
  "x-QUA": "x-QUA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MississippiValleyCode =
  typeof MississippiValleyCode[keyof typeof MississippiValleyCode];
