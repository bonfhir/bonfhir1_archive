/**
 * Value Set of codes that specify whether this insurance works in conjunction with other insurance plans or if it provides independent coverage and payment of benefits regardless of other insurance that might be available to the patient.
 * http://terminology.hl7.org/ValueSet/v2-0173
 */
export const Hl7VSCoordinationOfBenefitsCode = {
  /**
   * Coordination
   */
  Coordination: "CO",

  /**
   * Independent
   */
  Independent: "IN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCoordinationOfBenefitsCode =
  typeof Hl7VSCoordinationOfBenefitsCode[keyof typeof Hl7VSCoordinationOfBenefitsCode];
