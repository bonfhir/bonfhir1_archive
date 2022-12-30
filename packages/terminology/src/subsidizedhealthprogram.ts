/**
 * **Definition:** A government health program that provides coverage for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.
 * http://terminology.hl7.org/ValueSet/v3-SubsidizedHealthProgram
 */
export const SubsidizedHealthProgramCode = {
  /**
   * subsidized health program
   */
  SUBSIDIZ: "SUBSIDIZ",

  /**
   * subsidized managed care program
   */
  SUBSIDMC: "SUBSIDMC",

  /**
   * subsidized supplemental health program
   */
  SUBSUPP: "SUBSUPP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubsidizedHealthProgramCode =
  typeof SubsidizedHealthProgramCode[keyof typeof SubsidizedHealthProgramCode];
