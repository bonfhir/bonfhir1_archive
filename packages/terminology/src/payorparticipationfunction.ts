/**
 * **Definition:** Set of codes indicating the manner in which payors participate in a policy or program.</
 * http://terminology.hl7.org/ValueSet/v3-PayorParticipationFunction
 */
export const PayorParticipationFunctionCode = {
  /**
   * PayorParticipationFunction
   */
  PayorParticipationFunction: "_PayorParticipationFunction",

  /**
   * claims adjudication
   */
  claimsadjudication: "CLMADJ",

  /**
   * enrollment broker
   */
  enrollmentbroker: "ENROLL",

  /**
   * ffs management
   */
  ffsmanagement: "FFSMGT",

  /**
   * managed care management
   */
  managedcaremanagement: "MCMGT",

  /**
   * provider management
   */
  providermanagement: "PROVMGT",

  /**
   * utilization management
   */
  utilizationmanagement: "UMGT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PayorParticipationFunctionCode =
  typeof PayorParticipationFunctionCode[keyof typeof PayorParticipationFunctionCode];
