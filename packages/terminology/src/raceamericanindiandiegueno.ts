/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianDiegueno
 */
export const RaceAmericanIndianDieguenoCode = {
  /**
   * Diegueno
   */
  Diegueno: "1222-9",

  /**
   * Campo
   */
  Campo: "1223-7",

  /**
   * Capitan Grande
   */
  CapitanGrande: "1224-5",

  /**
   * Cuyapaipe
   */
  Cuyapaipe: "1225-2",

  /**
   * La Posta
   */
  LaPosta: "1226-0",

  /**
   * Manzanita
   */
  Manzanita: "1227-8",

  /**
   * Mesa Grande
   */
  MesaGrande: "1228-6",

  /**
   * San Pasqual
   */
  SanPasqual: "1229-4",

  /**
   * Santa Ysabel
   */
  SantaYsabel: "1230-2",

  /**
   * Sycuan
   */
  Sycuan: "1231-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianDieguenoCode =
  typeof RaceAmericanIndianDieguenoCode[keyof typeof RaceAmericanIndianDieguenoCode];
