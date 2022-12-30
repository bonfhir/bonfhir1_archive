/**
 * Value Set of codes used to specify the relationship to the invoice for Person Payee Types.
 * http://terminology.hl7.org/ValueSet/v2-0558
 */
export const Hl7VSPayeeRelationshipToInvoiceCode = {
  /**
   * Patient
   */
  PT: "PT",

  /**
   * Family Member
   */
  FM: "FM",

  /**
   * Subscriber
   */
  SB: "SB",

  /**
   * Guarantor
   */
  GT: "GT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPayeeRelationshipToInvoiceCode =
  typeof Hl7VSPayeeRelationshipToInvoiceCode[keyof typeof Hl7VSPayeeRelationshipToInvoiceCode];
