/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Algic
 */
export const AlgicCode = {
  /**
   * Algonquian
   */
  Algonquian: "_Algonquian",

  /**
   * Arapahoan
   */
  Arapahoan: "_Arapahoan",

  /**
   * ArapahoGrosVentre
   */
  ArapahoGrosVentre: "_ArapahoGrosVentre",

  /**
   * Arapaho
   */
  Arapaho: "x-ARP",

  /**
   * Gros Ventre
   */
  GrosVentre: "x-ATS",

  /**
   * CreeMontagnais
   */
  CreeMontagnais: "_CreeMontagnais",

  /**
   * Cree
   */
  Cree: "_Cree",

  /**
   * Western Cree
   */
  WesternCree: "x-CRP",

  /**
   * EasternAlgonquin
   */
  EasternAlgonquin: "_EasternAlgonquin",

  /**
   * Abenakian
   */
  Abenakian: "_Abenakian",

  /**
   * Eastern Abenaki
   */
  EasternAbenaki: "x-AAQ",

  /**
   * Western Abenaki
   */
  WesternAbenaki: "x-ABE",

  /**
   * Maliseet-Passamaquoddy
   */
  MaliseetPassamaquoddy: "x-MAC",

  /**
   * Delawaran
   */
  Delawaran: "_Delawaran",

  /**
   * Unami Delaware
   */
  UnamiDelaware: "x-DEL",

  /**
   * Micmac
   */
  Micmac: "x-MIC",

  /**
   * Ojibwayan
   */
  Ojibwayan: "_Ojibwayan",

  /**
   * Southern Ojibwa
   */
  SouthernOjibwa: "x-OJB",

  /**
   * Potawatami
   */
  Potawatami: "x-POT",

  /**
   * SaukFoxKickapoo
   */
  SaukFoxKickapoo: "_SaukFoxKickapoo",

  /**
   * Kickapoo
   */
  Kickapoo: "x-KIC",

  /**
   * Mesquakie
   */
  Mesquakie: "x-SAC",

  /**
   * Shawnee
   */
  Shawnee: "x-SJW",

  /**
   * Blackfoot
   */
  Blackfoot: "x-BLC",

  /**
   * Cheyenne
   */
  Cheyenne: "x-CHY",

  /**
   * Menominee
   */
  Menominee: "x-MEZ",

  /**
   * Ritwan
   */
  Ritwan: "_Ritwan",

  /**
   * Yurok
   */
  Yurok: "x-YUR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AlgicCode = typeof AlgicCode[keyof typeof AlgicCode];
