/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the body site where the vaccination occurred. This value set is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/immunization-site
 */
export const CodesForImmunizationSiteOfAdministrationCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CodesForImmunizationSiteOfAdministrationCode =
  typeof CodesForImmunizationSiteOfAdministrationCode[keyof typeof CodesForImmunizationSiteOfAdministrationCode];
