/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Algic
 */
export const AlgicCode = {
  /**
   * Algonquian
   */
  _Algonquian: "_Algonquian",

  /**
   * Arapahoan
   */
  _Arapahoan: "_Arapahoan",

  /**
   * ArapahoGrosVentre
   */
  _ArapahoGrosVentre: "_ArapahoGrosVentre",

  /**
   * Arapaho
   */
  "x-ARP": "x-ARP",

  /**
   * Gros Ventre
   */
  "x-ATS": "x-ATS",

  /**
   * CreeMontagnais
   */
  _CreeMontagnais: "_CreeMontagnais",

  /**
   * Cree
   */
  _Cree: "_Cree",

  /**
   * Western Cree
   */
  "x-CRP": "x-CRP",

  /**
   * EasternAlgonquin
   */
  _EasternAlgonquin: "_EasternAlgonquin",

  /**
   * Abenakian
   */
  _Abenakian: "_Abenakian",

  /**
   * Eastern Abenaki
   */
  "x-AAQ": "x-AAQ",

  /**
   * Western Abenaki
   */
  "x-ABE": "x-ABE",

  /**
   * Maliseet-Passamaquoddy
   */
  "x-MAC": "x-MAC",

  /**
   * Delawaran
   */
  _Delawaran: "_Delawaran",

  /**
   * Unami Delaware
   */
  "x-DEL": "x-DEL",

  /**
   * Micmac
   */
  "x-MIC": "x-MIC",

  /**
   * Ojibwayan
   */
  _Ojibwayan: "_Ojibwayan",

  /**
   * Southern Ojibwa
   */
  "x-OJB": "x-OJB",

  /**
   * Potawatami
   */
  "x-POT": "x-POT",

  /**
   * SaukFoxKickapoo
   */
  _SaukFoxKickapoo: "_SaukFoxKickapoo",

  /**
   * Kickapoo
   */
  "x-KIC": "x-KIC",

  /**
   * Mesquakie
   */
  "x-SAC": "x-SAC",

  /**
   * Shawnee
   */
  "x-SJW": "x-SJW",

  /**
   * Blackfoot
   */
  "x-BLC": "x-BLC",

  /**
   * Cheyenne
   */
  "x-CHY": "x-CHY",

  /**
   * Menominee
   */
  "x-MEZ": "x-MEZ",

  /**
   * Ritwan
   */
  _Ritwan: "_Ritwan",

  /**
   * Yurok
   */
  "x-YUR": "x-YUR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AlgicCode = typeof AlgicCode[keyof typeof AlgicCode];
