/**
 * The player of the role is a child of the scoping person's stepparent.
 * http://terminology.hl7.org/ValueSet/v3-StepSibling
 */
export const StepSiblingCode = {
  /**
   * step sibling
   */
  stepsibling: "STPSIB",

  /**
   * stepbrother
   */
  stepbrother: "STPBRO",

  /**
   * stepsister
   */
  stepsister: "STPSIS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StepSiblingCode =
  typeof StepSiblingCode[keyof typeof StepSiblingCode];
