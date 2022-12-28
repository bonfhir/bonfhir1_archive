/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Penutian
 */
export const PenutianCode = {
  /**
   * Chinookan
   */
  _Chinookan: "_Chinookan",

  /**
   * UpperChinook
   */
  _UpperChinook: "_UpperChinook",

  /**
   * Kiksht
   */
  "x-WAC": "x-WAC",

  /**
   * Coosan
   */
  _Coosan: "_Coosan",

  /**
   * Hanis
   */
  "x-COS": "x-COS",

  /**
   * Maiduan
   */
  _Maiduan: "_Maiduan",

  /**
   * Northwest Maidu
   */
  "x-MAI": "x-MAI",

  /**
   * Northeast Maidu
   */
  "x-NMU": "x-NMU",

  /**
   * Nisenan
   */
  "x-NSZ": "x-NSZ",

  /**
   * PlateauPenutian
   */
  _PlateauPenutian: "_PlateauPenutian",

  /**
   * Sahaptian
   */
  _Sahaptian: "_Sahaptian",

  /**
   * Umatilla
   */
  "x-UMA": "x-UMA",

  /**
   * Walla Walla
   */
  "x-WAA": "x-WAA",

  /**
   * Tenino
   */
  "x-WAR": "x-WAR",

  /**
   * Yakima
   */
  "x-YAK": "x-YAK",

  /**
   * Klamath-Modoc
   */
  "x-KLA": "x-KLA",

  /**
   * Nez Perce
   */
  "x-NEZ": "x-NEZ",

  /**
   * Takelman
   */
  _Takelman: "_Takelman",

  /**
   * Kalapuyan
   */
  _Kalapuyan: "_Kalapuyan",

  /**
   * Central Kalapuyan
   */
  "x-KAL": "x-KAL",

  /**
   * Tsimshianic
   */
  _Tsimshianic: "_Tsimshianic",

  /**
   * Coast Tsimshain
   */
  "x-TSI": "x-TSI",

  /**
   * Utian
   */
  _Utian: "_Utian",

  /**
   * Miwokan
   */
  _Miwokan: "_Miwokan",

  /**
   * EasternMiwok
   */
  _EasternMiwok: "_EasternMiwok",

  /**
   * Central Sierra Miwok
   */
  "x-CSM": "x-CSM",

  /**
   * Northern Sierra Miwok
   */
  "x-NSQ": "x-NSQ",

  /**
   * Plains Miwok
   */
  "x-PMW": "x-PMW",

  /**
   * Southern Sierra Miwok
   */
  "x-SKD": "x-SKD",

  /**
   * WesternMiwok
   */
  _WesternMiwok: "_WesternMiwok",

  /**
   * Coast Miwok
   */
  "x-CSI": "x-CSI",

  /**
   * Lake Miwok
   */
  "x-LMW": "x-LMW",

  /**
   * Wintuan
   */
  _Wintuan: "_Wintuan",

  /**
   * Wintu-Nomlaki
   */
  "x-WIT": "x-WIT",

  /**
   * Yokutsan
   */
  _Yokutsan: "_Yokutsan",

  /**
   * Kings River
   */
  "x-ENH": "x-ENH",

  /**
   * Gashowu
   */
  "x-GSH": "x-GSH",

  /**
   * Poso Creek
   */
  "x-PYL": "x-PYL",

  /**
   * Tule-Kaweah
   */
  "x-TKH": "x-TKH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PenutianCode = typeof PenutianCode[keyof typeof PenutianCode];
