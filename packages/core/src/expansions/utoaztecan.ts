/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-UtoAztecan
 */
export const UtoAztecanCode = {
  /**
   * Numic
   */
  _Numic: "_Numic",

  /**
   * CentralNumic
   */
  _CentralNumic: "_CentralNumic",

  /**
   * Comanche
   */
  "x-COM": "x-COM",

  /**
   * Panamint
   */
  "x-PAR": "x-PAR",

  /**
   * Shoshone
   */
  "x-SHH": "x-SHH",

  /**
   * SouthernNumic
   */
  _SouthernNumic: "_SouthernNumic",

  /**
   * Kawaiisu
   */
  "x-KAW": "x-KAW",

  /**
   * Ute-Southern Paiute
   */
  "x-UTE": "x-UTE",

  /**
   * WesternNumic
   */
  _WesternNumic: "_WesternNumic",

  /**
   * Mono
   */
  "x-MON": "x-MON",

  /**
   * Northern Paiute-Bannock
   */
  "x-PAO": "x-PAO",

  /**
   * Takic
   */
  _Takic: "_Takic",

  /**
   * Cupan
   */
  _Cupan: "_Cupan",

  /**
   * Cahuilla
   */
  "x-CHL": "x-CHL",

  /**
   * Cupeno
   */
  "x-CUP": "x-CUP",

  /**
   * Luiseno
   */
  "x-LUI": "x-LUI",

  /**
   * SerranoGabrielino
   */
  _SerranoGabrielino: "_SerranoGabrielino",

  /**
   * Serrano
   */
  "x-SER": "x-SER",

  /**
   * Taracahitan
   */
  _Taracahitan: "_Taracahitan",

  /**
   * Cahitan
   */
  _Cahitan: "_Cahitan",

  /**
   * Yaqui
   */
  "x-YAQ": "x-YAQ",

  /**
   * Tepiman
   */
  _Tepiman: "_Tepiman",

  /**
   * Papago-Pima
   */
  "x-PAP": "x-PAP",

  /**
   * Hopi
   */
  "x-HOP": "x-HOP",

  /**
   * Tubatululabal
   */
  "x-TUB": "x-TUB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UtoAztecanCode = typeof UtoAztecanCode[keyof typeof UtoAztecanCode];
