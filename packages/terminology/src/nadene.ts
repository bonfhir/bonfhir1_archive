/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Nadene
 */
export const NadeneCode = {
  /**
   * AthapaskanEyak
   */
  _AthapaskanEyak: "_AthapaskanEyak",

  /**
   * Athapaskan
   */
  _Athapaskan: "_Athapaskan",

  /**
   * Apachean
   */
  _Apachean: "_Apachean",

  /**
   * EasternApachean
   */
  _EasternApachean: "_EasternApachean",

  /**
   * Jicarilla
   */
  "x-APJ": "x-APJ",

  /**
   * Lipan
   */
  "x-APL": "x-APL",

  /**
   * WesternApachean
   */
  _WesternApachean: "_WesternApachean",

  /**
   * Mescalero-Chiricahua
   */
  "x-APM": "x-APM",

  /**
   * Western Apache
   */
  "x-APW": "x-APW",

  /**
   * Dine
   */
  "x-NAV": "x-NAV",

  /**
   * Kiowa Apache
   */
  "x-APK": "x-APK",

  /**
   * CentralAlaskaYukon
   */
  _CentralAlaskaYukon: "_CentralAlaskaYukon",

  /**
   * KoyukonIngalik
   */
  _KoyukonIngalik: "_KoyukonIngalik",

  /**
   * Holikachuk
   */
  "x-HOI": "x-HOI",

  /**
   * Degexit'an
   */
  "x-ING": "x-ING",

  /**
   * Koyukon
   */
  "x-KOY": "x-KOY",

  /**
   * KutchinHan
   */
  _KutchinHan: "_KutchinHan",

  /**
   * Han
   */
  "x-HAA": "x-HAA",

  /**
   * Kutchin
   */
  "x-KUC": "x-KUC",

  /**
   * TananaTutchone
   */
  _TananaTutchone: "_TananaTutchone",

  /**
   * Tanana
   */
  _Tanana: "_Tanana",

  /**
   * Lower Tanana
   */
  "x-TAA": "x-TAA",

  /**
   * Upper Tanana
   */
  "x-TAU": "x-TAU",

  /**
   * Tanacross
   */
  "x-TCB": "x-TCB",

  /**
   * Upper Kuskokwim
   */
  "x-KUU": "x-KUU",

  /**
   * PacificCoastAthapaskan
   */
  _PacificCoastAthapaskan: "_PacificCoastAthapaskan",

  /**
   * CaliforniaAthapaskan
   */
  _CaliforniaAthapaskan: "_CaliforniaAthapaskan",

  /**
   * Hupa
   */
  "x-HUP": "x-HUP",

  /**
   * Cahto
   */
  "x-KTW": "x-KTW",

  /**
   * OregonAthapaskan
   */
  _OregonAthapaskan: "_OregonAthapaskan",

  /**
   * Tolowa
   */
  "x-TOL": "x-TOL",

  /**
   * Tututni
   */
  "x-TUU": "x-TUU",

  /**
   * SouthernAlaska
   */
  _SouthernAlaska: "_SouthernAlaska",

  /**
   * Ahtna
   */
  "x-AHT": "x-AHT",

  /**
   * Tanaina
   */
  "x-TFN": "x-TFN",

  /**
   * Eyak
   */
  "x-EYA": "x-EYA",

  /**
   * Tlingit
   */
  "x-TLI": "x-TLI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NadeneCode = typeof NadeneCode[keyof typeof NadeneCode];
