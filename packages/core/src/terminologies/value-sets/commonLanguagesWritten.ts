/**
 * This value set includes common codes from BCP-47 (http://tools.ietf.org/html/bcp47) for the purpose of writing; this value set (unlike the common languages value set) doesn't include dialects except where they are relevant for written languages
 * http://hl7.org/fhir/ValueSet/written-language
 */
export const CommonLanguagesWrittenCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommonLanguagesWrittenCode =
  typeof CommonLanguagesWrittenCode[keyof typeof CommonLanguagesWrittenCode];
