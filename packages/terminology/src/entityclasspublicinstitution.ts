/**
 * An agency of the people of a state often assuming some authority over a certain matter. Includes government, governmental agencies, associations.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassPublicInstitution
 */
export const EntityClassPublicInstitutionCode = {
  /**
   * public institution
   */
  PUB: "PUB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassPublicInstitutionCode =
  typeof EntityClassPublicInstitutionCode[keyof typeof EntityClassPublicInstitutionCode];
