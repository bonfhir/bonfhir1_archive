/**
 * Telecommunications form for contact point.
 * http://hl7.org/fhir/ValueSet/contact-point-system
 */
export const ContactPointSystemCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContactPointSystemCode =
  typeof ContactPointSystemCode[keyof typeof ContactPointSystemCode];
