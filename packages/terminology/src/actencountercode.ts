/**
 * Domain provides codes that qualify the ActEncounterClass (ENC)
 * http://terminology.hl7.org/ValueSet/v3-ActEncounterCode
 */
export const ActEncounterCodeCode = {
  /**
   * ambulatory
   */
  AMB: "AMB",

  /**
   * emergency
   */
  EMER: "EMER",

  /**
   * field
   */
  FLD: "FLD",

  /**
   * home health
   */
  HH: "HH",

  /**
   * inpatient encounter
   */
  IMP: "IMP",

  /**
   * inpatient acute
   */
  ACUTE: "ACUTE",

  /**
   * inpatient non-acute
   */
  NONAC: "NONAC",

  /**
   * observation encounter
   */
  OBSENC: "OBSENC",

  /**
   * pre-admission
   */
  PRENC: "PRENC",

  /**
   * short stay
   */
  SS: "SS",

  /**
   * virtual
   */
  VR: "VR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActEncounterCodeCode =
  typeof ActEncounterCodeCode[keyof typeof ActEncounterCodeCode];
