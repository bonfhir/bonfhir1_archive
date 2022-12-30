/**
 * An observable finding or state that persists over time and tends to require intervention or management, and, therefore, distinguished from an Observation made at a point in time; may exist before an Observation of the Condition is made or after interventions to manage the Condition are undertaken. Examples: equipment repair status, device recall status, a health risk, a financial risk, public health risk, pregnancy, health maintenance, chronic illness
 * http://terminology.hl7.org/ValueSet/v3-ActClassCondition
 */
export const ActClassConditionCode = {
  /**
   * Condition
   */
  COND: "COND",

  /**
   * public health case
   */
  CASE: "CASE",

  /**
   * outbreak
   */
  OUTB: "OUTB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassConditionCode =
  typeof ActClassConditionCode[keyof typeof ActClassConditionCode];
