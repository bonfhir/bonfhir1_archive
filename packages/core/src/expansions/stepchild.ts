/**
 * The player of the role is a child of the scoping person's spouse by a previous union.
 * http://terminology.hl7.org/ValueSet/v3-StepChild
 */
export const StepChildCode = {
  /**
   * step child
   */
  STPCHLD: "STPCHLD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StepChildCode = typeof StepChildCode[keyof typeof StepChildCode];
