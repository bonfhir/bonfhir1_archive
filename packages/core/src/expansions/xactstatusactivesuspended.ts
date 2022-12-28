/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActStatusActiveSuspended
 */
export const XActStatusActiveSuspendedCode = {
  /**
   * active
   */
  active: "active",

  /**
   * suspended
   */
  suspended: "suspended",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActStatusActiveSuspendedCode =
  typeof XActStatusActiveSuspendedCode[keyof typeof XActStatusActiveSuspendedCode];
