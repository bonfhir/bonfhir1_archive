/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianApache
 */
export const RaceAmericanIndianApacheCode = {
  /**
   * Apache
   */
  "1010-8": "1010-8",

  /**
   * Chiricahua
   */
  "1011-6": "1011-6",

  /**
   * Fort Sill Apache
   */
  "1012-4": "1012-4",

  /**
   * Jicarilla Apache
   */
  "1013-2": "1013-2",

  /**
   * Lipan Apache
   */
  "1014-0": "1014-0",

  /**
   * Mescalero Apache
   */
  "1015-7": "1015-7",

  /**
   * Oklahoma Apache
   */
  "1016-5": "1016-5",

  /**
   * Payson Apache
   */
  "1017-3": "1017-3",

  /**
   * San Carlos Apache
   */
  "1018-1": "1018-1",

  /**
   * White Mountain Apache
   */
  "1019-9": "1019-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianApacheCode =
  typeof RaceAmericanIndianApacheCode[keyof typeof RaceAmericanIndianApacheCode];
