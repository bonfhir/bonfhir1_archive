/**
 * Administrative reasons for patient encounters.

*Example:*Medical necessity, patient request and dependency.
 * http://terminology.hl7.org/ValueSet/v3-xActEncounterReason
 */
export const XActEncounterReasonCode = {
  /**
   * Medical Necessity
   */
  MedicalNecessity: "MEDNEC",

  /**
   * Patient request
   */
  Patientrequest: "PAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActEncounterReasonCode =
  typeof XActEncounterReasonCode[keyof typeof XActEncounterReasonCode];
