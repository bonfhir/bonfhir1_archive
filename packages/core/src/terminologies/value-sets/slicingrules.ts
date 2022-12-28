/**
 * How slices are interpreted when evaluating an instance.
 * http://hl7.org/fhir/ValueSet/resource-slicing-rules
 */
export const SlicingRulesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SlicingRulesCode =
  typeof SlicingRulesCode[keyof typeof SlicingRulesCode];
