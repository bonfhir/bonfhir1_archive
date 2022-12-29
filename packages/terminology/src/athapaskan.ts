/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Athapaskan
 */
export const AthapaskanCode = {
  /**
   * Apachean
   */
  Apachean: "_Apachean",

  /**
   * EasternApachean
   */
  EasternApachean: "_EasternApachean",

  /**
   * Jicarilla
   */
  Jicarilla: "x-APJ",

  /**
   * Lipan
   */
  Lipan: "x-APL",

  /**
   * WesternApachean
   */
  WesternApachean: "_WesternApachean",

  /**
   * Mescalero-Chiricahua
   */
  MescaleroChiricahua: "x-APM",

  /**
   * Western Apache
   */
  WesternApache: "x-APW",

  /**
   * Dine
   */
  Dine: "x-NAV",

  /**
   * Kiowa Apache
   */
  KiowaApache: "x-APK",

  /**
   * CentralAlaskaYukon
   */
  CentralAlaskaYukon: "_CentralAlaskaYukon",

  /**
   * KoyukonIngalik
   */
  KoyukonIngalik: "_KoyukonIngalik",

  /**
   * Holikachuk
   */
  Holikachuk: "x-HOI",

  /**
   * Degexit'an
   */
  Degexitan: "x-ING",

  /**
   * Koyukon
   */
  Koyukon: "x-KOY",

  /**
   * KutchinHan
   */
  KutchinHan: "_KutchinHan",

  /**
   * Han
   */
  Han: "x-HAA",

  /**
   * Kutchin
   */
  Kutchin: "x-KUC",

  /**
   * TananaTutchone
   */
  TananaTutchone: "_TananaTutchone",

  /**
   * Tanana
   */
  Tanana: "_Tanana",

  /**
   * Lower Tanana
   */
  LowerTanana: "x-TAA",

  /**
   * Upper Tanana
   */
  UpperTanana: "x-TAU",

  /**
   * Tanacross
   */
  Tanacross: "x-TCB",

  /**
   * Upper Kuskokwim
   */
  UpperKuskokwim: "x-KUU",

  /**
   * PacificCoastAthapaskan
   */
  PacificCoastAthapaskan: "_PacificCoastAthapaskan",

  /**
   * CaliforniaAthapaskan
   */
  CaliforniaAthapaskan: "_CaliforniaAthapaskan",

  /**
   * Hupa
   */
  Hupa: "x-HUP",

  /**
   * Cahto
   */
  Cahto: "x-KTW",

  /**
   * OregonAthapaskan
   */
  OregonAthapaskan: "_OregonAthapaskan",

  /**
   * Tolowa
   */
  Tolowa: "x-TOL",

  /**
   * Tututni
   */
  Tututni: "x-TUU",

  /**
   * SouthernAlaska
   */
  SouthernAlaska: "_SouthernAlaska",

  /**
   * Ahtna
   */
  Ahtna: "x-AHT",

  /**
   * Tanaina
   */
  Tanaina: "x-TFN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AthapaskanCode = typeof AthapaskanCode[keyof typeof AthapaskanCode];
