/**
 * This value set defines a set of codes that can be used to indicate the class of encounter: a specific code indicating class of service provided.
 * http://terminology.hl7.org/ValueSet/encounter-class
 */
export const EncounterClassCode = {
  /**
   * inpatient encounter
   */
  IMP: "IMP",

  /**
   * ambulatory
   */
  AMB: "AMB",

  /**
   * observation encounter
   */
  OBSENC: "OBSENC",

  /**
   * emergency
   */
  EMER: "EMER",

  /**
   * virtual
   */
  VR: "VR",

  /**
   * home health
   */
  HH: "HH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterClassCode =
  typeof EncounterClassCode[keyof typeof EncounterClassCode];
