/**
 * This is the code representing the clinical specialty of the clinician or provider who interacted with, treated, or provided a service to/for the patient. The value set used for clinical specialty has been limited by HITSP to the value set reproduced from HITSP C80 Table 2-149 Clinical Specialty Value Set Definition.
 * http://hl7.org/fhir/ValueSet/c80-practice-codes
 */
export const PracticeSettingCodeValueSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PracticeSettingCodeValueSetCode =
  typeof PracticeSettingCodeValueSetCode[keyof typeof PracticeSettingCodeValueSetCode];
