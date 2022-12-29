/**
 * Target that is substantially present in the service and which is directly affected by the service action (includes consumed material, devices, etc.).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationTargetDirect
 */
export const ParticipationTargetDirectCode = {
  /**
   * direct target
   */
  directtarget: "DIR",

  /**
   * analyte
   */
  analyte: "ALY",

  /**
   * baby
   */
  baby: "BBY",

  /**
   * catalyst
   */
  catalyst: "CAT",

  /**
   * consumable
   */
  consumable: "CSM",

  /**
   * therapeutic agent
   */
  therapeuticagent: "TPA",

  /**
   * device
   */
  device: "DEV",

  /**
   * non-reuseable device
   */
  nonreuseabledevice: "NRD",

  /**
   * reusable device
   */
  reusabledevice: "RDV",

  /**
   * donor
   */
  donor: "DON",

  /**
   * ExposureAgent
   */
  ExposureAgent: "EXPAGNT",

  /**
   * ExposureParticipation
   */
  ExposureParticipation: "EXPART",

  /**
   * ExposureTarget
   */
  ExposureTarget: "EXPTRGT",

  /**
   * ExposureSource
   */
  ExposureSource: "EXSRC",

  /**
   * product
   */
  product: "PRD",

  /**
   * subject
   */
  subject: "SBJ",

  /**
   * specimen
   */
  specimen: "SPC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationTargetDirectCode =
  typeof ParticipationTargetDirectCode[keyof typeof ParticipationTargetDirectCode];
