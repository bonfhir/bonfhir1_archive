/**
 * Value Set of codes that describe the impact of an event on a patient.
 * http://terminology.hl7.org/ValueSet/v2-0240
 */
export const Hl7VSEventConsequenceCode = {
  /**
   * Death
   */
  Death: "D",

  /**
   * Life threatening
   */
  Lifethreatening: "L",

  /**
   * Caused hospitalized
   */
  Causedhospitalized: "H",

  /**
   * Prolonged hospitalization
   */
  Prolongedhospitalization: "P",

  /**
   * Congenital anomaly/birth defect
   */
  Congenitalanomalybirthdefect: "C",

  /**
   * Incapacity which is significant, persistent or permanent
   */
  Incapacitywhichissignificantpersistentorpermanent: "I",

  /**
   * Disability which is significant, persistent or permanent
   */
  Disabilitywhichissignificantpersistentorpermanent: "J",

  /**
   * Required intervention to prevent permanent impairment/damage
   */
  Requiredinterventiontopreventpermanentimpairmentdamage: "R",

  /**
   * Other
   */
  Other: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventConsequenceCode =
  typeof Hl7VSEventConsequenceCode[keyof typeof Hl7VSEventConsequenceCode];
