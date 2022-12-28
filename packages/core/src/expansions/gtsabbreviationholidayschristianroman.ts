/**
 * Christian Holidays (Roman/Gregorian "Western" Tradition.)
 * http://terminology.hl7.org/ValueSet/v3-GTSAbbreviationHolidaysChristianRoman
 */
export const GTSAbbreviationHolidaysChristianRomanCode = {
  /**
   * JHCHREAS
   */
  JHCHREAS: "JHCHREAS",

  /**
   * JHCHRGFR
   */
  JHCHRGFR: "JHCHRGFR",

  /**
   * JHCHRNEW
   */
  JHCHRNEW: "JHCHRNEW",

  /**
   * JHCHRPEN
   */
  JHCHRPEN: "JHCHRPEN",

  /**
   * JHCHRXME
   */
  JHCHRXME: "JHCHRXME",

  /**
   * JHCHRXMS
   */
  JHCHRXMS: "JHCHRXMS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GTSAbbreviationHolidaysChristianRomanCode =
  typeof GTSAbbreviationHolidaysChristianRomanCode[keyof typeof GTSAbbreviationHolidaysChristianRomanCode];
