/**
 * Common UCUM units for recording Vital Signs
 * http://hl7.org/fhir/ValueSet/ucum-vitals-common
 */
export const VitalSignsUnitsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VitalSignsUnitsCode =
  typeof VitalSignsUnitsCode[keyof typeof VitalSignsUnitsCode];
