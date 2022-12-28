/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 * http://hl7.org/fhir/ValueSet/encounter-admit-source
 */
export const AdmitSourceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdmitSourceCode =
  typeof AdmitSourceCode[keyof typeof AdmitSourceCode];
