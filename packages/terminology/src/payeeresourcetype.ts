/**
 * The type of payee Resource.
 * http://terminology.hl7.org/ValueSet/resource-type-link
 */
export const PayeeResourceTypeCode = {
  /**
   * Organization
   */
  Organization: "organization",

  /**
   * Patient
   */
  Patient: "patient",

  /**
   * Practitioner
   */
  Practitioner: "practitioner",

  /**
   * RelatedPerson
   */
  RelatedPerson: "relatedperson",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PayeeResourceTypeCode =
  typeof PayeeResourceTypeCode[keyof typeof PayeeResourceTypeCode];
