/**
 * Concepts which are represented by codes identifying HL7Versions 2.x Master Files.
 * http://terminology.hl7.org/ValueSet/v2-0175
 */
export const Hl7VSMasterFileIdentifierCodeCode = {
  /**
   * Observation text master file segments (e.g., Lab)
   */
  OM1: "OM1",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  OM2: "OM2",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  OM3: "OM3",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  OM4: "OM4",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  OM5: "OM5",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  OM6: "OM6",

  /**
   * Clinical study master
   */
  CM0: "CM0",

  /**
   * Clinical study phase master
   */
  CM1: "CM1",

  /**
   * Clinical study Data Schedule Master
   */
  CM2: "CM2",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  "OM1-OM6": "OM1-OM6",

  /**
   * Charge description master file
   */
  CDM: "CDM",

  /**
   * Clinical study with phases and scheduled master file
   */
  CMA: "CMA",

  /**
   * Clinical study without phases but with scheduled master file
   */
  CMB: "CMB",

  /**
   * Location master file
   */
  LOC: "LOC",

  /**
   * Numerical observation master file
   */
  OMA: "OMA",

  /**
   * Categorical observation master file
   */
  OMB: "OMB",

  /**
   * Observation batteries master file
   */
  OMC: "OMC",

  /**
   * Calculated observations master file
   */
  OMD: "OMD",

  /**
   * Mixed type observation master file
   */
  OMM: "OMM",

  /**
   * Practitioner master file
   */
  PRA: "PRA",

  /**
   * Staff master file
   */
  STF: "STF",

  /**
   * Clinic master file
   */
  CLN: "CLN",

  /**
   * Other Observation/Service Item master file
   */
  OME: "OME",

  /**
   * Inventory master file
   */
  INV: "INV",

  /**
   * Medicare Limited Coverage Process
   */
  MLCP: "MLCP",

  /**
   * Medicare Approved Coverage Process
   */
  MACP: "MACP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMasterFileIdentifierCodeCode =
  typeof Hl7VSMasterFileIdentifierCodeCode[keyof typeof Hl7VSMasterFileIdentifierCodeCode];
