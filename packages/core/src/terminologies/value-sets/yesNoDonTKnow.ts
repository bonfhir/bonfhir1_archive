/**
 * For Capturing simple yes-no-don't know answers
 * http://hl7.org/fhir/ValueSet/yesnodontknow
 */
export const YesNoDontKnowCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YesNoDontKnowCode =
  typeof YesNoDontKnowCode[keyof typeof YesNoDontKnowCode];
