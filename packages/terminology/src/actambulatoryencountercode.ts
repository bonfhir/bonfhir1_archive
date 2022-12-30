/**
 * **Definition:**A comprehensive term for health care provided in a healthcare facility (e.g. a practitioneraTMs office, clinic setting, or hospital) on a nonresident basis. The term ambulatory usually implies that the patient has come to the location and is not assigned to a bed. Sometimes referred to as an outpatient encounter.
 * http://terminology.hl7.org/ValueSet/v3-ActAmbulatoryEncounterCode
 */
export const ActAmbulatoryEncounterCodeCode = {
  /**
   * ambulatory
   */
  AMB: "AMB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAmbulatoryEncounterCodeCode =
  typeof ActAmbulatoryEncounterCodeCode[keyof typeof ActAmbulatoryEncounterCodeCode];
