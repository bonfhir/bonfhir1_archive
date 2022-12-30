/**
 * The clinical status of an allergy disposition (Clinical Focus)

Used in Program: C-CDA, C-CDA R2.1 2017-06-09 using this value set
 * http://terminology.hl7.org/ValueSet/v3-AllergyStatus
 */
export const AllergyStatusCode = {
  /**
   * Problem resolved (finding)
   */
  "413322009": "413322009",

  /**
   * Active
   */
  "55561003": "55561003",

  /**
   * Inactive
   */
  "73425007": "73425007",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyStatusCode =
  typeof AllergyStatusCode[keyof typeof AllergyStatusCode];
