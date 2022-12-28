/**
 * A coded concept listing the eye codes.
 * http://hl7.org/fhir/ValueSet/vision-eye-codes
 */
export const VisionEyesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VisionEyesCode = typeof VisionEyesCode[keyof typeof VisionEyesCode];
