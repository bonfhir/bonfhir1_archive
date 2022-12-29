/**
 * **Definition:**An identifying modifier code for healthcare interventions or procedures.
 * http://terminology.hl7.org/ValueSet/v3-ActBillableModifierCode
 */
export const ActBillableModifierCodeCode = {
  /**
   * ActBillableModifierCode
   */
  ActBillableModifierCode: "_ActBillableModifierCode",

  /**
   * CPT modifier codes
   */
  CPTmodifiercodes: "CPTM",

  /**
   * HCPCS Level II and Carrier-assigned
   */
  HCPCSLevelIIandCarrierassigned: "HCPCSA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActBillableModifierCodeCode =
  typeof ActBillableModifierCodeCode[keyof typeof ActBillableModifierCodeCode];
