/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Penutian
 */
export const PenutianCode = {
  /**
   * Chinookan
   */
  Chinookan: "_Chinookan",

  /**
   * UpperChinook
   */
  UpperChinook: "_UpperChinook",

  /**
   * Kiksht
   */
  Kiksht: "x-WAC",

  /**
   * Coosan
   */
  Coosan: "_Coosan",

  /**
   * Hanis
   */
  Hanis: "x-COS",

  /**
   * Maiduan
   */
  Maiduan: "_Maiduan",

  /**
   * Northwest Maidu
   */
  NorthwestMaidu: "x-MAI",

  /**
   * Northeast Maidu
   */
  NortheastMaidu: "x-NMU",

  /**
   * Nisenan
   */
  Nisenan: "x-NSZ",

  /**
   * PlateauPenutian
   */
  PlateauPenutian: "_PlateauPenutian",

  /**
   * Sahaptian
   */
  Sahaptian: "_Sahaptian",

  /**
   * Umatilla
   */
  Umatilla: "x-UMA",

  /**
   * Walla Walla
   */
  WallaWalla: "x-WAA",

  /**
   * Tenino
   */
  Tenino: "x-WAR",

  /**
   * Yakima
   */
  Yakima: "x-YAK",

  /**
   * Klamath-Modoc
   */
  KlamathModoc: "x-KLA",

  /**
   * Nez Perce
   */
  NezPerce: "x-NEZ",

  /**
   * Takelman
   */
  Takelman: "_Takelman",

  /**
   * Kalapuyan
   */
  Kalapuyan: "_Kalapuyan",

  /**
   * Central Kalapuyan
   */
  CentralKalapuyan: "x-KAL",

  /**
   * Tsimshianic
   */
  Tsimshianic: "_Tsimshianic",

  /**
   * Coast Tsimshain
   */
  CoastTsimshain: "x-TSI",

  /**
   * Utian
   */
  Utian: "_Utian",

  /**
   * Miwokan
   */
  Miwokan: "_Miwokan",

  /**
   * EasternMiwok
   */
  EasternMiwok: "_EasternMiwok",

  /**
   * Central Sierra Miwok
   */
  CentralSierraMiwok: "x-CSM",

  /**
   * Northern Sierra Miwok
   */
  NorthernSierraMiwok: "x-NSQ",

  /**
   * Plains Miwok
   */
  PlainsMiwok: "x-PMW",

  /**
   * Southern Sierra Miwok
   */
  SouthernSierraMiwok: "x-SKD",

  /**
   * WesternMiwok
   */
  WesternMiwok: "_WesternMiwok",

  /**
   * Coast Miwok
   */
  CoastMiwok: "x-CSI",

  /**
   * Lake Miwok
   */
  LakeMiwok: "x-LMW",

  /**
   * Wintuan
   */
  Wintuan: "_Wintuan",

  /**
   * Wintu-Nomlaki
   */
  WintuNomlaki: "x-WIT",

  /**
   * Yokutsan
   */
  Yokutsan: "_Yokutsan",

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
export type PenutianCode = typeof PenutianCode[keyof typeof PenutianCode];
