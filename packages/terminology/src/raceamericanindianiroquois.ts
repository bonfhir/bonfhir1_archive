/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianIroquois
 */
export const RaceAmericanIndianIroquoisCode = {
  /**
   * Iroquois
   */
  "1285-6": "1285-6",

  /**
   * Cayuga
   */
  "1286-4": "1286-4",

  /**
   * Mohawk
   */
  "1287-2": "1287-2",

  /**
   * Oneida
   */
  "1288-0": "1288-0",

  /**
   * Onondaga
   */
  "1289-8": "1289-8",

  /**
   * Seneca
   */
  "1290-6": "1290-6",

  /**
   * Seneca Nation
   */
  "1291-4": "1291-4",

  /**
   * Seneca-Cayuga
   */
  "1292-2": "1292-2",

  /**
   * Tonawanda Seneca
   */
  "1293-0": "1293-0",

  /**
   * Tuscarora
   */
  "1294-8": "1294-8",

  /**
   * Wyandotte
   */
  "1295-5": "1295-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianIroquoisCode =
  typeof RaceAmericanIndianIroquoisCode[keyof typeof RaceAmericanIndianIroquoisCode];
