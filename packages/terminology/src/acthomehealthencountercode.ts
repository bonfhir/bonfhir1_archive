/**
 * **Definition:**Healthcare encounter that takes place in the residence of the patient or a designee
 * http://terminology.hl7.org/ValueSet/v3-ActHomeHealthEncounterCode
 */
export const ActHomeHealthEncounterCodeCode = {
  /**
   * home health
   */
  homehealth: "HH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActHomeHealthEncounterCodeCode =
  typeof ActHomeHealthEncounterCodeCode[keyof typeof ActHomeHealthEncounterCodeCode];
