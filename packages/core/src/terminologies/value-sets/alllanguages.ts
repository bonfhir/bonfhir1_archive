/**
 * This value set includes all possible codes from BCP-47 (http://tools.ietf.org/html/bcp47)
 * http://hl7.org/fhir/ValueSet/all-languages
 */
export const AllLanguagesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllLanguagesCode =
  typeof AllLanguagesCode[keyof typeof AllLanguagesCode];
