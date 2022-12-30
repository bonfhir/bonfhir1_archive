/**
 * An act representing a system action such as the change of state of another act or the initiation of a query. All control acts represent trigger events in the HL7 context. ControlActs may occur in different moods.
 * http://terminology.hl7.org/ValueSet/v3-ActClassControlAct
 */
export const ActClassControlActCode = {
  /**
   * control act
   */
  CACT: "CACT",

  /**
   * action
   */
  ACTN: "ACTN",

  /**
   * information
   */
  INFO: "INFO",

  /**
   * state transition control
   */
  STC: "STC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassControlActCode =
  typeof ActClassControlActCode[keyof typeof ActClassControlActCode];
