/**
 * This value set includes common codes from BCP-47 (http://tools.ietf.org/html/bcp47)
 * http://hl7.org/fhir/ValueSet/languages
 */
export const CommonLanguagesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommonLanguagesCode =
  typeof CommonLanguagesCode[keyof typeof CommonLanguagesCode];
