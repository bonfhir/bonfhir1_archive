/**
 * A monitoring program that focuses on narcotics and/or commonly abused substances that are subject to legal restriction.
 * http://terminology.hl7.org/ValueSet/v3-ControlledSubstanceMonitoringProtocol
 */
export const ControlledSubstanceMonitoringProtocolCode = {
  /**
   * Controlled Substance
   */
  CTLSUB: "CTLSUB",

  /**
   * DEADrugSchedule
   */
  _DEADrugSchedule: "_DEADrugSchedule",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ControlledSubstanceMonitoringProtocolCode =
  typeof ControlledSubstanceMonitoringProtocolCode[keyof typeof ControlledSubstanceMonitoringProtocolCode];
