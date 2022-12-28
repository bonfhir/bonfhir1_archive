/**
 * **Definition:** A set of codes used to indicate coverage under a program. A program is an organized structure for administering and funding coverage of a benefit package for covered parties meeting eligibility criteria, typically related to employment, health, financial, and demographic status. Programs are typically established or permitted by legislation with provisions for ongoing government oversight. Regulations may mandate the structure of the program, the manner in which it is funded and administered, covered benefits, provider types, eligibility criteria and financial participation. A government agency may be charged with implementing the program in accordance to the regulation. Risk of loss under a program in most cases would not meet what an underwriter would consider an insurable risk, i.e., the risk is not random in nature, not financially measurable, and likely requires subsidization with government funds.

*Discussion:* Programs do not have policy holders or subscribers. Program eligibles are enrolled based on health status, statutory eligibility, financial status, or age. Program eligibles who are covered parties under the program may be referred to as members, beneficiaries, eligibles, or recipients. Programs risk are underwritten by not for profit organizations such as governmental entities, and the beneficiaries typically do not pay for any or some portion of the cost of coverage. See CoveredPartyRoleType.
 * http://terminology.hl7.org/ValueSet/v3-ActProgramTypeCode
 */
export const ActProgramTypeCodeCode = {
  /**
   * ActProgramTypeCode
   */
  _ActProgramTypeCode: "_ActProgramTypeCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActProgramTypeCodeCode =
  typeof ActProgramTypeCodeCode[keyof typeof ActProgramTypeCodeCode];
