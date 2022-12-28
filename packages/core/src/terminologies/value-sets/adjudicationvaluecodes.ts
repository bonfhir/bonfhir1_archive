/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 * http://hl7.org/fhir/ValueSet/adjudication
 */
export const AdjudicationValueCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdjudicationValueCodesCode =
  typeof AdjudicationValueCodesCode[keyof typeof AdjudicationValueCodesCode];
