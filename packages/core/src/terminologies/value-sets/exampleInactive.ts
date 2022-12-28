/**
 * HL7 v3 ActMood Predicate codes, including inactive codes
 * http://hl7.org/fhir/ValueSet/inactive
 */
export const ExampleinactiveCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleinactiveCode =
  typeof ExampleinactiveCode[keyof typeof ExampleinactiveCode];
