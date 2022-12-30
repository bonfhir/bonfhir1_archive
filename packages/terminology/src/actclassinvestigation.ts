/**
 * An formalized inquiry into the circumstances surrounding a particular unplanned event or potential event for the purposes of identifying possible causes and contributing factors for the event. This investigation could be conducted at a local institutional level or at the level of a local or national government.
 * http://terminology.hl7.org/ValueSet/v3-ActClassInvestigation
 */
export const ActClassInvestigationCode = {
  /**
   * investigation
   */
  INVSTG: "INVSTG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassInvestigationCode =
  typeof ActClassInvestigationCode[keyof typeof ActClassInvestigationCode];
