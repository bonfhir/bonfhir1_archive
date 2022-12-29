/**
 * The player of the role is the spouse of the scoping person's parent and not the scoping person's natural parent.
 * http://terminology.hl7.org/ValueSet/v3-StepParent
 */
export const StepParentCode = {
  /**
   * step parent
   */
  stepparent: "STPPRN",

  /**
   * stepfather
   */
  stepfather: "STPFTH",

  /**
   * stepmother
   */
  stepmother: "STPMTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StepParentCode = typeof StepParentCode[keyof typeof StepParentCode];
