/**
 * This value set includes the FHIR resource types, along with some other important content class codes
 * http://hl7.org/fhir/ValueSet/consent-content-class
 */
export const ConsentContentClassCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentContentClassCode =
  typeof ConsentContentClassCode[keyof typeof ConsentContentClassCode];
