/**
 * The type of payee Resource.
 * http://terminology.hl7.org/ValueSet/resource-type-link
 */
export const PayeeResourceTypeCode = {
  /**
   * Organization
   */
  organization: "organization",

  /**
   * Patient
   */
  patient: "patient",

  /**
   * Practitioner
   */
  practitioner: "practitioner",

  /**
   * RelatedPerson
   */
  relatedperson: "relatedperson",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PayeeResourceTypeCode =
  typeof PayeeResourceTypeCode[keyof typeof PayeeResourceTypeCode];
