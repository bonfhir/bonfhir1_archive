/**
 * This value set defines the set of codes for describing the type or mode of the patient's preferred language.
 * http://hl7.org/fhir/ValueSet/language-preference-type
 */
export const LanguagePreferenceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LanguagePreferenceTypeCode =
  typeof LanguagePreferenceTypeCode[keyof typeof LanguagePreferenceTypeCode];
