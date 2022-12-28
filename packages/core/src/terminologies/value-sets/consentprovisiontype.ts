/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 * http://hl7.org/fhir/ValueSet/consent-provision-type
 */
export const ConsentProvisionTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentProvisionTypeCode =
  typeof ConsentProvisionTypeCode[keyof typeof ConsentProvisionTypeCode];
