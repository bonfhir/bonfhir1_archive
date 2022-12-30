/**
 * Target that is substantially present in the service and which is directly affected by the service action (includes consumed material, devices, etc.).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationTargetDirect
 */
export const ParticipationTargetDirectCode = {
  /**
   * direct target
   */
  DIR: "DIR",

  /**
   * analyte
   */
  ALY: "ALY",

  /**
   * baby
   */
  BBY: "BBY",

  /**
   * catalyst
   */
  CAT: "CAT",

  /**
   * consumable
   */
  CSM: "CSM",

  /**
   * therapeutic agent
   */
  TPA: "TPA",

  /**
   * device
   */
  DEV: "DEV",

  /**
   * non-reuseable device
   */
  NRD: "NRD",

  /**
   * reusable device
   */
  RDV: "RDV",

  /**
   * donor
   */
  DON: "DON",

  /**
   * ExposureAgent
   */
  EXPAGNT: "EXPAGNT",

  /**
   * ExposureParticipation
   */
  EXPART: "EXPART",

  /**
   * ExposureTarget
   */
  EXPTRGT: "EXPTRGT",

  /**
   * ExposureSource
   */
  EXSRC: "EXSRC",

  /**
   * product
   */
  PRD: "PRD",

  /**
   * subject
   */
  SBJ: "SBJ",

  /**
   * specimen
   */
  SPC: "SPC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationTargetDirectCode =
  typeof ParticipationTargetDirectCode[keyof typeof ParticipationTargetDirectCode];
