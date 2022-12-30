/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Siouan
 */
export const SiouanCode = {
  /**
   * MississippiValley
   */
  _MississippiValley: "_MississippiValley",

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

  /**
   * MissouriRiver
   */
  _MissouriRiver: "_MissouriRiver",

  /**
   * Crow
   */
  "x-CRO": "x-CRO",

  /**
   * Hidatsa
   */
  "x-HID": "x-HID",

  /**
   * Mandan
   */
  "x-MHQ": "x-MHQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SiouanCode = typeof SiouanCode[keyof typeof SiouanCode];
