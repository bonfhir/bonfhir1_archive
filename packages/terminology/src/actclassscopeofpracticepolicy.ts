/**
 * **Description:**An ethical or clinical obligation, requirement, rule, or expectation imposed or strongly encouraged by organizations that oversee particular clinical domains or provider certification which define the boundaries within which a provider may practice and which may have legal basis or ramifications on:

 *  The activity of another party
 *  The behavior of another party
 *  The manner in which an act is executed

**Examples:**An ethical obligation for a provider to fully inform a patient about all treatment options. An ethical obligation for a provider not to disclose personal health information that meets certain criteria, e.g., where disclosure might result in harm to the patient or another person. The set of health care services which a provider is credentialed or privileged to provide.
 * http://terminology.hl7.org/ValueSet/v3-ActClassScopeOfPracticePolicy
 */
export const ActClassScopeOfPracticePolicyCode = {
  /**
   * scope of practice policy
   */
  scopeofpracticepolicy: "SCOPOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassScopeOfPracticePolicyCode =
  typeof ActClassScopeOfPracticePolicyCode[keyof typeof ActClassScopeOfPracticePolicyCode];
