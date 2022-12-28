/**
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 * http://hl7.org/fhir/ValueSet/encounter-discharge-disposition
 */
export const DischargeDispositionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DischargeDispositionCode =
  typeof DischargeDispositionCode[keyof typeof DischargeDispositionCode];
