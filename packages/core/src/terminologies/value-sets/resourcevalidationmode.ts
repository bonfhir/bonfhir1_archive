/**
 * Codes indicating how a resource can be validated
 * http://hl7.org/fhir/ValueSet/resource-validation-mode
 */
export const ResourceValidationModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResourceValidationModeCode =
  typeof ResourceValidationModeCode[keyof typeof ResourceValidationModeCode];
