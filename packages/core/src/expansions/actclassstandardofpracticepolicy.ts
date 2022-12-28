/**
 * **Description:**A requirement, rule, or expectation typically documented as guidelines, protocols, or formularies imposed or strongly encouraged by an organization that oversees or has authority over the practices within a domain, and which may have legal basis or ramifications on:

 *  The activity of another party
 *  The behavior of another party
 *  The manner in which an act is executed

**Examples:**A payer may require a prescribing provider to adhere to formulary guidelines. An institution may adopt clinical guidelines and protocols and implement these within its electronic health record and decision support systems.
 * http://terminology.hl7.org/ValueSet/v3-ActClassStandardOfPracticePolicy
 */
export const ActClassStandardOfPracticePolicyCode = {
  /**
   * standard of practice policy
   */
  STDPOL: "STDPOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassStandardOfPracticePolicyCode =
  typeof ActClassStandardOfPracticePolicyCode[keyof typeof ActClassStandardOfPracticePolicyCode];
