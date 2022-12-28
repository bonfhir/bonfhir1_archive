/**
 * Details of how a designation would be used
 * http://hl7.org/fhir/ValueSet/designation-use
 */
export const DesignationUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DesignationUseCode =
  typeof DesignationUseCode[keyof typeof DesignationUseCode];
