/**
 * Infusion, intravenous
 * http://terminology.hl7.org/ValueSet/v3-IntravenousInfusion
 */
export const IntravenousInfusionCode = {
  /**
   * Infusion, intravenous
   */
  IV: "IV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravenousInfusionCode =
  typeof IntravenousInfusionCode[keyof typeof IntravenousInfusionCode];
