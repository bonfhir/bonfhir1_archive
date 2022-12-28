/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 * http://hl7.org/fhir/ValueSet/message-reason-encounter
 */
export const ExampleMessageReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleMessageReasonCodesCode =
  typeof ExampleMessageReasonCodesCode[keyof typeof ExampleMessageReasonCodesCode];
