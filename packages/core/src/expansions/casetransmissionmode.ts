/**
 * Code for the mechanism by which disease was acquired by the living subject involved in the public health case. Includes sexually transmitted, airborne, bloodborne, vectorborne, foodborne, zoonotic, nosocomial, mechanical, dermal, congenital, environmental exposure, indeterminate.
 * http://terminology.hl7.org/ValueSet/v3-CaseTransmissionMode
 */
export const CaseTransmissionModeCode = {
  /**
   * case transmission mode
   */
  _CaseTransmissionMode: "_CaseTransmissionMode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CaseTransmissionModeCode =
  typeof CaseTransmissionModeCode[keyof typeof CaseTransmissionModeCode];
