/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EncounterAdmissionSource
 */
export const EncounterAdmissionSourceCode = {
  /**
   * emergency
   */
  emergency: "E",

  /**
   * labor and delivery
   */
  laboranddelivery: "LD",

  /**
   * newborn
   */
  newborn: "NB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterAdmissionSourceCode =
  typeof EncounterAdmissionSourceCode[keyof typeof EncounterAdmissionSourceCode];
