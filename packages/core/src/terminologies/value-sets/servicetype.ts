/**
 * This value set defines an example set of codes of service-types.
 * http://hl7.org/fhir/ValueSet/service-type
 */
export const ServiceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ServiceTypeCode =
  typeof ServiceTypeCode[keyof typeof ServiceTypeCode];
