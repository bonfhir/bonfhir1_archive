/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 * http://hl7.org/fhir/ValueSet/reference-version-rules
 */
export const ReferenceVersionRulesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReferenceVersionRulesCode =
  typeof ReferenceVersionRulesCode[keyof typeof ReferenceVersionRulesCode];
