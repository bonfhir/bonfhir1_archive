/**
 * Value Set of codes specifying the status of the birth in relation to the gestation
 * http://terminology.hl7.org/ValueSet/v2-0424
 */
export const Hl7VSGestationCategoryCodeCode = {
  /**
   * Premature / Pre-term
   */
  "1": "1",

  /**
   * Full Term
   */
  "2": "2",

  /**
   * Overdue / Post-term
   */
  "3": "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSGestationCategoryCodeCode =
  typeof Hl7VSGestationCategoryCodeCode[keyof typeof Hl7VSGestationCategoryCodeCode];
