/**
 * A code that specifies a type of context being specified by a usage context.
 * http://hl7.org/fhir/ValueSet/usage-context-type
 */
export const UsageContextTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UsageContextTypeCode =
  typeof UsageContextTypeCode[keyof typeof UsageContextTypeCode];
