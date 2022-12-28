/**
 * This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.
 * http://hl7.org/fhir/ValueSet/contactentity-type
 */
export const ContactEntityTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContactEntityTypeCode =
  typeof ContactEntityTypeCode[keyof typeof ContactEntityTypeCode];
