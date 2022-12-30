/**
 * Value Set of codes that specify the source of information about the insured's eligibility for benefits.
 * http://terminology.hl7.org/ValueSet/v2-0144
 */
export const Hl7VSEligibilitySourceCode = {
  /**
   * Insurance company
   */
  "1": "1",

  /**
   * Employer
   */
  "2": "2",

  /**
   * Insured presented policy
   */
  "3": "3",

  /**
   * Insured presented card
   */
  "4": "4",

  /**
   * Signed statement on file
   */
  "5": "5",

  /**
   * Verbal information
   */
  "6": "6",

  /**
   * None
   */
  "7": "7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEligibilitySourceCode =
  typeof Hl7VSEligibilitySourceCode[keyof typeof Hl7VSEligibilitySourceCode];
