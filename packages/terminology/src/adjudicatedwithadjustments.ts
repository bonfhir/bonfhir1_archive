/**
 * The invoice element has been accepted for payment but one or more adjustment(s) have been made to one or more invoice element line items (component charges).

Also includes the concept 'Adjudicate as zero' and items not covered under a particular Policy.

Invoice element can be reversed (nullified).

Recommend that the invoice element is saved for DUR (Drug Utilization Reporting).
 * http://terminology.hl7.org/ValueSet/v3-AdjudicatedWithAdjustments
 */
export const AdjudicatedWithAdjustmentsCode = {
  /**
   * adjudicated with adjustments
   */
  AA: "AA",

  /**
   * adjudicated with adjustments and no financial impact
   */
  ANF: "ANF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdjudicatedWithAdjustmentsCode =
  typeof AdjudicatedWithAdjustmentsCode[keyof typeof AdjudicatedWithAdjustmentsCode];
