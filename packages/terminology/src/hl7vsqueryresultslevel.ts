/**
 * Value Set of codes which are used to control level of detail in query results.
 * http://terminology.hl7.org/ValueSet/v2-0108
 */
export const Hl7VSQueryResultsLevelCode = {
  /**
   * Order plus order status
   */
  Orderplusorderstatus: "O",

  /**
   * Results without bulk text
   */
  Resultswithoutbulktext: "R",

  /**
   * Status only
   */
  Statusonly: "S",

  /**
   * Full results
   */
  Fullresults: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSQueryResultsLevelCode =
  typeof Hl7VSQueryResultsLevelCode[keyof typeof Hl7VSQueryResultsLevelCode];
