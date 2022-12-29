/**
 * Domain provides codes that qualify the ActEncounterClass (ENC)
 * http://terminology.hl7.org/ValueSet/v3-ActEncounterCode
 */
export const ActEncounterCodeCode = {
  /**
   * ambulatory
   */
  ambulatory: "AMB",

  /**
   * emergency
   */
  emergency: "EMER",

  /**
   * field
   */
  field: "FLD",

  /**
   * home health
   */
  homehealth: "HH",

  /**
   * inpatient encounter
   */
  inpatientencounter: "IMP",

  /**
   * inpatient acute
   */
  inpatientacute: "ACUTE",

  /**
   * inpatient non-acute
   */
  inpatientnonacute: "NONAC",

  /**
   * observation encounter
   */
  observationencounter: "OBSENC",

  /**
   * pre-admission
   */
  preadmission: "PRENC",

  /**
   * short stay
   */
  shortstay: "SS",

  /**
   * virtual
   */
  virtual: "VR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActEncounterCodeCode =
  typeof ActEncounterCodeCode[keyof typeof ActEncounterCodeCode];
