/**
 * The gender of a person used for administrative purposes.
 * http://hl7.org/fhir/ValueSet/administrative-gender
 */
export const AdministrativeGenderCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdministrativeGenderCode =
  typeof AdministrativeGenderCode[keyof typeof AdministrativeGenderCode];
