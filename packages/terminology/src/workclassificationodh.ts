/**
 * Provide the concepts for the value element of the C-CDA Work Classification Observation entry template.
 * http://terminology.hl7.org/ValueSet/v3-WorkClassificationODH
 */
export const WorkClassificationODHCode = {
  /**
   * Paid work, Armed Forces
   */
  PaidworkArmedForces: "PWAF",

  /**
   * Paid work, national government, not armed forces
   */
  Paidworknationalgovernmentnotarmedforces: "PWFG",

  /**
   * Paid work, local government, not armed forces
   */
  Paidworklocalgovernmentnotarmedforces: "PWLG",

  /**
   * Paid non-governmental work, not self-employed
   */
  Paidnongovernmentalworknotselfemployed: "PWNSE",

  /**
   * Paid work, self-employed
   */
  Paidworkselfemployed: "PWSE",

  /**
   * Paid work, state government, not armed forces
   */
  Paidworkstategovernmentnotarmedforces: "PWSG",

  /**
   * Unpaid non-governmental work, not self-employed
   */
  Unpaidnongovernmentalworknotselfemployed: "UWNSE",

  /**
   * Unpaid work, self-employed
   */
  Unpaidworkselfemployed: "UWSE",

  /**
   * Volunteer work (20 or more hours/week and not Disaster Response/ First Responder)
   */
  Volunteerwork20ormorehoursweekandnotDisasterResponseFirstResponder: "VW",

  /**
   * Voluntary Disaster Response/First Responder
   */
  VoluntaryDisasterResponseFirstResponder: "VWDR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WorkClassificationODHCode =
  typeof WorkClassificationODHCode[keyof typeof WorkClassificationODHCode];
