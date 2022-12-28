/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 * http://hl7.org/fhir/ValueSet/immunization-status
 */
export const ImmunizationStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationStatusCodesCode =
  typeof ImmunizationStatusCodesCode[keyof typeof ImmunizationStatusCodesCode];
