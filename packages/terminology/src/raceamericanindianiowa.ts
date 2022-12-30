/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianIowa
 */
export const RaceAmericanIndianIowaCode = {
  /**
   * Iowa
   */
  "1281-5": "1281-5",

  /**
   * Iowa of Kansas-Nebraska
   */
  "1282-3": "1282-3",

  /**
   * Iowa of Oklahoma
   */
  "1283-1": "1283-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianIowaCode =
  typeof RaceAmericanIndianIowaCode[keyof typeof RaceAmericanIndianIowaCode];
