/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianIroquois
 */
export const RaceAmericanIndianIroquoisCode = {
  /**
   * Iroquois
   */
  Iroquois: "1285-6",

  /**
   * Cayuga
   */
  Cayuga: "1286-4",

  /**
   * Mohawk
   */
  Mohawk: "1287-2",

  /**
   * Oneida
   */
  Oneida: "1288-0",

  /**
   * Onondaga
   */
  Onondaga: "1289-8",

  /**
   * Seneca
   */
  Seneca: "1290-6",

  /**
   * Seneca Nation
   */
  SenecaNation: "1291-4",

  /**
   * Seneca-Cayuga
   */
  SenecaCayuga: "1292-2",

  /**
   * Tonawanda Seneca
   */
  TonawandaSeneca: "1293-0",

  /**
   * Tuscarora
   */
  Tuscarora: "1294-8",

  /**
   * Wyandotte
   */
  Wyandotte: "1295-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianIroquoisCode =
  typeof RaceAmericanIndianIroquoisCode[keyof typeof RaceAmericanIndianIroquoisCode];
