/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianIowa
 */
export const RaceAmericanIndianIowaCode = {
  /**
   * Iowa
   */
  Iowa: "1281-5",

  /**
   * Iowa of Kansas-Nebraska
   */
  IowaofKansasNebraska: "1282-3",

  /**
   * Iowa of Oklahoma
   */
  IowaofOklahoma: "1283-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianIowaCode =
  typeof RaceAmericanIndianIowaCode[keyof typeof RaceAmericanIndianIowaCode];
