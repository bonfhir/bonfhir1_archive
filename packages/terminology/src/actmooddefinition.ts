/**
 * A definition of a service (master).

Historical note: in previous RIM versions, the definition mood was captured as a separate class hierarchy, called Master\_service.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodDefinition
 */
export const ActMoodDefinitionCode = {
  /**
   * definition
   */
  definition: "DEF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodDefinitionCode =
  typeof ActMoodDefinitionCode[keyof typeof ActMoodDefinitionCode];
