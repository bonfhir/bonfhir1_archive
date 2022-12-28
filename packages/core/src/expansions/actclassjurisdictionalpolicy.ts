/**
 * **Description:**A mandate, regulation, obligation, requirement, rule, or expectation unilaterally imposed by a jurisdiction on:

 *  The activity of another party
 *  The behavior of another party
 *  The manner in which an act is executed

**Examples:**A jurisdictional mandate regarding the prescribing and dispensing of a particular medication. A jurisdictional privacy or security regulation dictating the manner in which personal health information is disclosed. A jurisdictional requirement that certain services or health conditions are reported to a monitoring program, e.g., immunizations, methadone treatment, or cancer registries.
 * http://terminology.hl7.org/ValueSet/v3-ActClassJurisdictionalPolicy
 */
export const ActClassJurisdictionalPolicyCode = {
  /**
   * jurisdictional policy
   */
  JURISPOL: "JURISPOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassJurisdictionalPolicyCode =
  typeof ActClassJurisdictionalPolicyCode[keyof typeof ActClassJurisdictionalPolicyCode];
