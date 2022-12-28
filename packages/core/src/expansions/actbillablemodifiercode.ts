/**
 * **Definition:**An identifying modifier code for healthcare interventions or procedures.
 * http://terminology.hl7.org/ValueSet/v3-ActBillableModifierCode
 */
export const ActBillableModifierCodeCode = {
  /**
   * ActBillableModifierCode
   */
  _ActBillableModifierCode: "_ActBillableModifierCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActBillableModifierCodeCode =
  typeof ActBillableModifierCodeCode[keyof typeof ActBillableModifierCodeCode];
