/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 * http://terminology.hl7.org/ValueSet/verificationresult-communication-method
 */
export const VerificationResult_communication_methodCode = {
  /**
   * Manual
   */
  manual: "manual",

  /**
   * Portal
   */
  portal: "portal",

  /**
   * Pull
   */
  pull: "pull",

  /**
   * Push
   */
  push: "push",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VerificationResult_communication_methodCode =
  typeof VerificationResult_communication_methodCode[keyof typeof VerificationResult_communication_methodCode];
