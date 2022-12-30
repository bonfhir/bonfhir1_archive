/**
 * **Definition:**A patient encounter that takes place both outside a dedicated service delivery location and outside a patient's residence. Example locations might include an accident site and at a supermarket.
 * http://terminology.hl7.org/ValueSet/v3-ActFieldEncounterCode
 */
export const ActFieldEncounterCodeCode = {
  /**
   * field
   */
  FLD: "FLD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActFieldEncounterCodeCode =
  typeof ActFieldEncounterCodeCode[keyof typeof ActFieldEncounterCodeCode];
