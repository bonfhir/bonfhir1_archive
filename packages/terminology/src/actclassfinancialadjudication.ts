/**
 * A transformation process where a requested invoice is transformed into an agreed invoice. Represents the adjudication processing of an invoice (claim). Adjudication results can be adjudicated as submitted, with adjustments or refused.

Adjudication results comprise 2 components: the adjudication processing results and a restated (or adjudicated) invoice or claim
 * http://terminology.hl7.org/ValueSet/v3-ActClassFinancialAdjudication
 */
export const ActClassFinancialAdjudicationCode = {
  /**
   * financial adjudication
   */
  ADJUD: "ADJUD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassFinancialAdjudicationCode =
  typeof ActClassFinancialAdjudicationCode[keyof typeof ActClassFinancialAdjudicationCode];
