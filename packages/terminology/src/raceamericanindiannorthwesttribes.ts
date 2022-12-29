/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianNorthwestTribes
 */
export const RaceAmericanIndianNorthwestTribesCode = {
  /**
   * Northwest Tribes
   */
  NorthwestTribes: "1391-2",

  /**
   * Alsea
   */
  Alsea: "1392-0",

  /**
   * Celilo
   */
  Celilo: "1393-8",

  /**
   * Columbia
   */
  Columbia: "1394-6",

  /**
   * Kalapuya
   */
  Kalapuya: "1395-3",

  /**
   * Molala
   */
  Molala: "1396-1",

  /**
   * Talakamish
   */
  Talakamish: "1397-9",

  /**
   * Tenino
   */
  Tenino: "1398-7",

  /**
   * Tillamook
   */
  Tillamook: "1399-5",

  /**
   * Wenatchee
   */
  Wenatchee: "1400-1",

  /**
   * Yahooskin
   */
  Yahooskin: "1401-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianNorthwestTribesCode =
  typeof RaceAmericanIndianNorthwestTribesCode[keyof typeof RaceAmericanIndianNorthwestTribesCode];
