/**
 * A role played by a person or an organization. It is the party that

1.  accepts fiscal responsibility for insurance plans and the policies created under those plans;
2.  administers and accepts fiscal responsibility for a program that provides coverage for services to eligible individuals; and/or
3.  has the responsibility to assess the merits of each risk and decide a suitable premium for accepting all or part of the risk. If played by an organization, this role may be further specified by an appropriate RoleCode.

*Example:*

1.  A health insurer;
2.  Medicaid Program;
3.  Lloyd's of London
 * http://terminology.hl7.org/ValueSet/v3-RoleClassUnderwriter
 */
export const RoleClassUnderwriterCode = {
  /**
   * underwriter
   */
  UNDWRT: "UNDWRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassUnderwriterCode =
  typeof RoleClassUnderwriterCode[keyof typeof RoleClassUnderwriterCode];
