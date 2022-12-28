/**
 * Value Set of codes that specify the relationship the staff person has with the institution for whom he/she provides services.
 * http://terminology.hl7.org/ValueSet/v2-0538
 */
export const Hl7VSInstitutionRelationshipTypeCode = {
  /**
   * Employee
   */
  EMP: "EMP",

  /**
   * Volunteer
   */
  VOL: "VOL",

  /**
   * Contractor
   */
  CON: "CON",

  /**
   * Consultant
   */
  CST: "CST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInstitutionRelationshipTypeCode =
  typeof Hl7VSInstitutionRelationshipTypeCode[keyof typeof Hl7VSInstitutionRelationshipTypeCode];
