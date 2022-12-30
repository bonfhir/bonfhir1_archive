/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianNorthwestTribes
 */
export const RaceAmericanIndianNorthwestTribesCode = {
  /**
   * Northwest Tribes
   */
  "1391-2": "1391-2",

  /**
   * Alsea
   */
  "1392-0": "1392-0",

  /**
   * Celilo
   */
  "1393-8": "1393-8",

  /**
   * Columbia
   */
  "1394-6": "1394-6",

  /**
   * Kalapuya
   */
  "1395-3": "1395-3",

  /**
   * Molala
   */
  "1396-1": "1396-1",

  /**
   * Talakamish
   */
  "1397-9": "1397-9",

  /**
   * Tenino
   */
  "1398-7": "1398-7",

  /**
   * Tillamook
   */
  "1399-5": "1399-5",

  /**
   * Wenatchee
   */
  "1400-1": "1400-1",

  /**
   * Yahooskin
   */
  "1401-9": "1401-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianNorthwestTribesCode =
  typeof RaceAmericanIndianNorthwestTribesCode[keyof typeof RaceAmericanIndianNorthwestTribesCode];
