/**
 * An event that occurred outside of the control of one or more of the parties involved. Includes the concept of an accident.
 * http://terminology.hl7.org/ValueSet/v3-ActClassIncident
 */
export const ActClassIncidentCode = {
  /**
   * incident
   */
  INC: "INC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassIncidentCode =
  typeof ActClassIncidentCode[keyof typeof ActClassIncidentCode];
