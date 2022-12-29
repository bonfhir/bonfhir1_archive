/**
 * Value Set of codes that specify the type of payee (e.g., organization, person).
 * http://terminology.hl7.org/ValueSet/v2-0557
 */
export const Hl7VSPayeeTypeCode = {
  /**
   * Payee Organization
   */
  PayeeOrganization: "ORG",

  /**
   * Person
   */
  Person: "PERS",

  /**
   * Pay Person
   */
  PayPerson: "PPER",

  /**
   * Employer
   */
  Employer: "EMPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPayeeTypeCode =
  typeof Hl7VSPayeeTypeCode[keyof typeof Hl7VSPayeeTypeCode];
