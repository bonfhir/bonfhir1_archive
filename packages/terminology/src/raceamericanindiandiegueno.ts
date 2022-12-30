/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianDiegueno
 */
export const RaceAmericanIndianDieguenoCode = {
  /**
   * Diegueno
   */
  "1222-9": "1222-9",

  /**
   * Campo
   */
  "1223-7": "1223-7",

  /**
   * Capitan Grande
   */
  "1224-5": "1224-5",

  /**
   * Cuyapaipe
   */
  "1225-2": "1225-2",

  /**
   * La Posta
   */
  "1226-0": "1226-0",

  /**
   * Manzanita
   */
  "1227-8": "1227-8",

  /**
   * Mesa Grande
   */
  "1228-6": "1228-6",

  /**
   * San Pasqual
   */
  "1229-4": "1229-4",

  /**
   * Santa Ysabel
   */
  "1230-2": "1230-2",

  /**
   * Sycuan
   */
  "1231-0": "1231-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianDieguenoCode =
  typeof RaceAmericanIndianDieguenoCode[keyof typeof RaceAmericanIndianDieguenoCode];
