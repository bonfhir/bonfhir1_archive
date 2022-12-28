/**
 * The type of Claim payee Resource.
 * http://terminology.hl7.org/ValueSet/ex-payee-resource-type
 */
export const ClaimPayeeResourceTypeCode = {
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
export type ClaimPayeeResourceTypeCode =
  typeof ClaimPayeeResourceTypeCode[keyof typeof ClaimPayeeResourceTypeCode];
