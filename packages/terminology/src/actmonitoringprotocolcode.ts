/**
 * Identifies types of monitoring programs
 * http://terminology.hl7.org/ValueSet/v3-ActMonitoringProtocolCode
 */
export const ActMonitoringProtocolCodeCode = {
  /**
   * Controlled Substance
   */
  ControlledSubstance: "CTLSUB",

  /**
   * DEADrugSchedule
   */
  DEADrugSchedule: "_DEADrugSchedule",

  /**
   * investigational
   */
  investigational: "INV",

  /**
   * limited use
   */
  limiteduse: "LU",

  /**
   * non prescription medicine
   */
  nonprescriptionmedicine: "OTC",

  /**
   * prescription only medicine
   */
  prescriptiononlymedicine: "RX",

  /**
   * special authorization
   */
  specialauthorization: "SA",

  /**
   * special access
   */
  specialaccess: "SAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMonitoringProtocolCodeCode =
  typeof ActMonitoringProtocolCodeCode[keyof typeof ActMonitoringProtocolCodeCode];
