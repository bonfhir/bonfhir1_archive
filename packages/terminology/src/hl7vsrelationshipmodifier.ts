/**
 * Value Set of codes that an observation definition to describe the subject of an observation in relation to a patient.
 * http://terminology.hl7.org/ValueSet/v2-0258
 */
export const Hl7VSRelationshipModifierCode = {
  /**
   * Control
   */
  Control: "CONTROL",

  /**
   * Patient
   */
  Patient: "PATIENT",

  /**
   * Donor
   */
  Donor: "DONOR",

  /**
   * Blood product unit
   */
  Bloodproductunit: "BPU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelationshipModifierCode =
  typeof Hl7VSRelationshipModifierCode[keyof typeof Hl7VSRelationshipModifierCode];
