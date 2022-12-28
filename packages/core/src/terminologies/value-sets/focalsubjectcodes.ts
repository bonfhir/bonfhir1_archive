/**
 * Example value set composed from SNOMED CT and HL7 V3 codes for observation targets such as donor, fetus or spouse. As use cases are discovered, more values may be added.
 * http://hl7.org/fhir/ValueSet/focal-subject
 */
export const FocalSubjectCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FocalSubjectCodesCode =
  typeof FocalSubjectCodesCode[keyof typeof FocalSubjectCodesCode];
