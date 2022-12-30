/**
 * Provide the concepts for the value element of the C-CDA Work Classification Observation entry template.
 * http://terminology.hl7.org/ValueSet/v3-WorkClassificationODH
 */
export const WorkClassificationODHCode = {
  /**
   * Paid work, Armed Forces
   */
  PWAF: "PWAF",

  /**
   * Paid work, national government, not armed forces
   */
  PWFG: "PWFG",

  /**
   * Paid work, local government, not armed forces
   */
  PWLG: "PWLG",

  /**
   * Paid non-governmental work, not self-employed
   */
  PWNSE: "PWNSE",

  /**
   * Paid work, self-employed
   */
  PWSE: "PWSE",

  /**
   * Paid work, state government, not armed forces
   */
  PWSG: "PWSG",

  /**
   * Unpaid non-governmental work, not self-employed
   */
  UWNSE: "UWNSE",

  /**
   * Unpaid work, self-employed
   */
  UWSE: "UWSE",

  /**
   * Volunteer work (20 or more hours/week and not Disaster Response/ First Responder)
   */
  VW: "VW",

  /**
   * Voluntary Disaster Response/First Responder
   */
  VWDR: "VWDR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WorkClassificationODHCode =
  typeof WorkClassificationODHCode[keyof typeof WorkClassificationODHCode];
