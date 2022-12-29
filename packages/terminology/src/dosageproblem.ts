/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-DosageProblem
 */
export const DosageProblemCode = {
  /**
   * Dosage problem
   */
  Dosageproblem: "DOSE",

  /**
   * dosage-condition alert
   */
  dosageconditionalert: "DOSECOND",

  /**
   * Dose-Duration Alert
   */
  DoseDurationAlert: "DOSEDUR",

  /**
   * Dose-Duration High Alert
   */
  DoseDurationHighAlert: "DOSEDURH",

  /**
   * Dose-Duration High for Indication Alert
   */
  DoseDurationHighforIndicationAlert: "DOSEDURHIND",

  /**
   * Dose-Duration Low Alert
   */
  DoseDurationLowAlert: "DOSEDURL",

  /**
   * Dose-Duration Low for Indication Alert
   */
  DoseDurationLowforIndicationAlert: "DOSEDURLIND",

  /**
   * High Dose Alert
   */
  HighDoseAlert: "DOSEH",

  /**
   * High Dose for Age Alert
   */
  HighDoseforAgeAlert: "DOSEHINDA",

  /**
   * High Dose for Indication Alert
   */
  HighDoseforIndicationAlert: "DOSEHIND",

  /**
   * High Dose for Height/Surface Area Alert
   */
  HighDoseforHeightSurfaceAreaAlert: "DOSEHINDSA",

  /**
   * High Dose for Weight Alert
   */
  HighDoseforWeightAlert: "DOSEHINDW",

  /**
   * Dose-Interval Alert
   */
  DoseIntervalAlert: "DOSEIVL",

  /**
   * Dose-Interval for Indication Alert
   */
  DoseIntervalforIndicationAlert: "DOSEIVLIND",

  /**
   * Low Dose Alert
   */
  LowDoseAlert: "DOSEL",

  /**
   * Low Dose for Age Alert
   */
  LowDoseforAgeAlert: "DOSELINDA",

  /**
   * Low Dose for Indication Alert
   */
  LowDoseforIndicationAlert: "DOSELIND",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  LowDoseforHeightSurfaceAreaAlert: "DOSELINDSA",

  /**
   * Low Dose for Weight Alert
   */
  LowDoseforWeightAlert: "DOSELINDW",

  /**
   * maximum dosage reached
   */
  maximumdosagereached: "MDOSE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DosageProblemCode =
  typeof DosageProblemCode[keyof typeof DosageProblemCode];
