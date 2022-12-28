/**
 * A coded concept listing the base codes.
 * http://hl7.org/fhir/ValueSet/vision-base-codes
 */
export const VisionBaseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VisionBaseCode = typeof VisionBaseCode[keyof typeof VisionBaseCode];
