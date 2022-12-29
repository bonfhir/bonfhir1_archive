/**
 * Value Set of codes that specify the source of information about the insured's eligibility for benefits.
 * http://terminology.hl7.org/ValueSet/v2-0144
 */
export const Hl7VSEligibilitySourceCode = {
  /**
   * Insurance company
   */
  Insurancecompany: "1",

  /**
   * Employer
   */
  Employer: "2",

  /**
   * Insured presented policy
   */
  Insuredpresentedpolicy: "3",

  /**
   * Insured presented card
   */
  Insuredpresentedcard: "4",

  /**
   * Signed statement on file
   */
  Signedstatementonfile: "5",

  /**
   * Verbal information
   */
  Verbalinformation: "6",

  /**
   * None
   */
  None: "7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEligibilitySourceCode =
  typeof Hl7VSEligibilitySourceCode[keyof typeof Hl7VSEligibilitySourceCode];
