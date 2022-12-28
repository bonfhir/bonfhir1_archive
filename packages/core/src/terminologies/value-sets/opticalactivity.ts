/**
 * The optical rotation type of a substance.
 * http://hl7.org/fhir/ValueSet/substance-optical-activity
 */
export const OpticalActivityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OpticalActivityCode =
  typeof OpticalActivityCode[keyof typeof OpticalActivityCode];
