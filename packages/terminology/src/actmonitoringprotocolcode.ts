/**
 * Identifies types of monitoring programs
 * http://terminology.hl7.org/ValueSet/v3-ActMonitoringProtocolCode
 */
export const ActMonitoringProtocolCodeCode = {
  /**
   * Controlled Substance
   */
  CTLSUB: "CTLSUB",

  /**
   * DEADrugSchedule
   */
  _DEADrugSchedule: "_DEADrugSchedule",

  /**
   * investigational
   */
  INV: "INV",

  /**
   * limited use
   */
  LU: "LU",

  /**
   * non prescription medicine
   */
  OTC: "OTC",

  /**
   * prescription only medicine
   */
  RX: "RX",

  /**
   * special authorization
   */
  SA: "SA",

  /**
   * special access
   */
  SAC: "SAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMonitoringProtocolCodeCode =
  typeof ActMonitoringProtocolCodeCode[keyof typeof ActMonitoringProtocolCodeCode];
