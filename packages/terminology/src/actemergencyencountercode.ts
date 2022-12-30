/**
 * **Definition:**A patient encounter that takes place at a dedicated healthcare service delivery location where the patient receives immediate evaluation and treatment, provided until the patient can be discharged or responsibility for the patient's care is transferred elsewhere (for example, the patient could be admitted as an inpatient or transferred to another facility.)
 * http://terminology.hl7.org/ValueSet/v3-ActEmergencyEncounterCode
 */
export const ActEmergencyEncounterCodeCode = {
  /**
   * emergency
   */
  EMER: "EMER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActEmergencyEncounterCodeCode =
  typeof ActEmergencyEncounterCodeCode[keyof typeof ActEmergencyEncounterCodeCode];
