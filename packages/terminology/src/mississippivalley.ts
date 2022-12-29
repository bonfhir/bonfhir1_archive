/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-MississippiValley
 */
export const MississippiValleyCode = {
  /**
   * ChiwereWinnebago
   */
  ChiwereWinnebago: "_ChiwereWinnebago",

  /**
   * Chiwere
   */
  Chiwere: "x-IOW",

  /**
   * Hocak
   */
  Hocak: "x-WIN",

  /**
   * Dakotan
   */
  Dakotan: "_Dakotan",

  /**
   * Assiniboine
   */
  Assiniboine: "x-ASB",

  /**
   * Dakota
   */
  Dakota: "x-DHG",

  /**
   * Lakota
   */
  Lakota: "x-LKT",

  /**
   * Nakota
   */
  Nakota: "x-NKT",

  /**
   * Dhegiha
   */
  Dhegiha: "_Dhegiha",

  /**
   * Kansa
   */
  Kansa: "x-KAA",

  /**
   * Omaha-Ponca
   */
  OmahaPonca: "x-OMA",

  /**
   * Osage
   */
  Osage: "x-OSA",

  /**
   * Quapaw
   */
  Quapaw: "x-QUA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MississippiValleyCode =
  typeof MississippiValleyCode[keyof typeof MississippiValleyCode];
