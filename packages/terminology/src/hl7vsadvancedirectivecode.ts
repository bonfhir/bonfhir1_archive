/**
 * Value Set of codes specifying the patient's instructions to the healthcare facility.
 * http://terminology.hl7.org/ValueSet/v2-0435
 */
export const Hl7VSAdvanceDirectiveCodeCode = {
  /**
   * Do not resuscitate
   */
  DNR: "DNR",

  /**
   * No directive
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdvanceDirectiveCodeCode =
  typeof Hl7VSAdvanceDirectiveCodeCode[keyof typeof Hl7VSAdvanceDirectiveCodeCode];
