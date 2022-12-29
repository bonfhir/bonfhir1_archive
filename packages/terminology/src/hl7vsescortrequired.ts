/**
 * Value Set of codes indicating whether a patient must be accompanied while travelling to a diagnostic service department.
 * http://terminology.hl7.org/ValueSet/v2-0225
 */
export const Hl7VSEscortRequiredCode = {
  /**
   * Required
   */
  Required: "R",

  /**
   * Not Required
   */
  NotRequired: "N",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEscortRequiredCode =
  typeof Hl7VSEscortRequiredCode[keyof typeof Hl7VSEscortRequiredCode];
