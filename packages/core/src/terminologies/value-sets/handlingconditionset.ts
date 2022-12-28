/**
 * Set of handling instructions prior testing of the specimen.
 * http://hl7.org/fhir/ValueSet/handling-condition
 */
export const HandlingConditionSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HandlingConditionSetCode =
  typeof HandlingConditionSetCode[keyof typeof HandlingConditionSetCode];
