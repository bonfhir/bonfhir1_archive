/**
 * SHALL applications comply with this constraint?
 * http://hl7.org/fhir/ValueSet/constraint-severity
 */
export const ConstraintSeverityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConstraintSeverityCode =
  typeof ConstraintSeverityCode[keyof typeof ConstraintSeverityCode];
