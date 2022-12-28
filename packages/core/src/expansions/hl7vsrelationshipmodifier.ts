/**
 * Value Set of codes that an observation definition to describe the subject of an observation in relation to a patient.
 * http://terminology.hl7.org/ValueSet/v2-0258
 */
export const Hl7VSRelationshipModifierCode = {
  /**
   * Control
   */
  CONTROL: "CONTROL",

  /**
   * Patient
   */
  PATIENT: "PATIENT",

  /**
   * Donor
   */
  DONOR: "DONOR",

  /**
   * Blood product unit
   */
  BPU: "BPU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelationshipModifierCode =
  typeof Hl7VSRelationshipModifierCode[keyof typeof Hl7VSRelationshipModifierCode];
