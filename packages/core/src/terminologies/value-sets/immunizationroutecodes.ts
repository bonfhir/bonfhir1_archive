/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/immunization-route
 */
export const ImmunizationRouteCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationRouteCodesCode =
  typeof ImmunizationRouteCodesCode[keyof typeof ImmunizationRouteCodesCode];
