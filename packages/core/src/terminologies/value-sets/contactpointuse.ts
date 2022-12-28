/**
 * Use of contact point.
 * http://hl7.org/fhir/ValueSet/contact-point-use
 */
export const ContactPointUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContactPointUseCode =
  typeof ContactPointUseCode[keyof typeof ContactPointUseCode];
