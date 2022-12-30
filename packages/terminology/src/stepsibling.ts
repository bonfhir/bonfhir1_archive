/**
 * The player of the role is a child of the scoping person's stepparent.
 * http://terminology.hl7.org/ValueSet/v3-StepSibling
 */
export const StepSiblingCode = {
  /**
   * step sibling
   */
  STPSIB: "STPSIB",

  /**
   * stepbrother
   */
  STPBRO: "STPBRO",

  /**
   * stepsister
   */
  STPSIS: "STPSIS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StepSiblingCode =
  typeof StepSiblingCode[keyof typeof StepSiblingCode];
