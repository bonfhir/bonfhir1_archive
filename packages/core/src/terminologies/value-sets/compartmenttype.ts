/**
 * Which type a compartment definition describes.
 * http://hl7.org/fhir/ValueSet/compartment-type
 */
export const CompartmentTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CompartmentTypeCode =
  typeof CompartmentTypeCode[keyof typeof CompartmentTypeCode];
