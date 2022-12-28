/**
 * Possible group measure aggregates (E.g. Mean, Median).
 * http://hl7.org/fhir/ValueSet/group-measure
 */
export const GroupMeasureCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GroupMeasureCode =
  typeof GroupMeasureCode[keyof typeof GroupMeasureCode];
