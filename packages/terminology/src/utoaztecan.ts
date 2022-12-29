/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-UtoAztecan
 */
export const UtoAztecanCode = {
  /**
   * Numic
   */
  Numic: "_Numic",

  /**
   * CentralNumic
   */
  CentralNumic: "_CentralNumic",

  /**
   * Comanche
   */
  Comanche: "x-COM",

  /**
   * Panamint
   */
  Panamint: "x-PAR",

  /**
   * Shoshone
   */
  Shoshone: "x-SHH",

  /**
   * SouthernNumic
   */
  SouthernNumic: "_SouthernNumic",

  /**
   * Kawaiisu
   */
  Kawaiisu: "x-KAW",

  /**
   * Ute-Southern Paiute
   */
  UteSouthernPaiute: "x-UTE",

  /**
   * WesternNumic
   */
  WesternNumic: "_WesternNumic",

  /**
   * Mono
   */
  Mono: "x-MON",

  /**
   * Northern Paiute-Bannock
   */
  NorthernPaiuteBannock: "x-PAO",

  /**
   * Takic
   */
  Takic: "_Takic",

  /**
   * Cupan
   */
  Cupan: "_Cupan",

  /**
   * Cahuilla
   */
  Cahuilla: "x-CHL",

  /**
   * Cupeno
   */
  Cupeno: "x-CUP",

  /**
   * Luiseno
   */
  Luiseno: "x-LUI",

  /**
   * SerranoGabrielino
   */
  SerranoGabrielino: "_SerranoGabrielino",

  /**
   * Serrano
   */
  Serrano: "x-SER",

  /**
   * Taracahitan
   */
  Taracahitan: "_Taracahitan",

  /**
   * Cahitan
   */
  Cahitan: "_Cahitan",

  /**
   * Yaqui
   */
  Yaqui: "x-YAQ",

  /**
   * Tepiman
   */
  Tepiman: "_Tepiman",

  /**
   * Papago-Pima
   */
  PapagoPima: "x-PAP",

  /**
   * Hopi
   */
  Hopi: "x-HOP",

  /**
   * Tubatululabal
   */
  Tubatululabal: "x-TUB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UtoAztecanCode = typeof UtoAztecanCode[keyof typeof UtoAztecanCode];
