/**
 * Value Set of codes specifying the arm(s) receiving a stick.
 * http://terminology.hl7.org/ValueSet/v2-0927
 */
export const Hl7VSArmStickCode = {
  /**
   * Left Arm
   */
  L: "L",

  /**
   * Right Arm
   */
  R: "R",

  /**
   * Both Arms
   */
  B: "B",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSArmStickCode =
  typeof Hl7VSArmStickCode[keyof typeof Hl7VSArmStickCode];
