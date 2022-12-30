/**
 * Enumerates the moods that an Act can take when describing privileges.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodPermPermrq
 */
export const XActMoodPermPermrqCode = {
  /**
   * permission
   */
  PERM: "PERM",

  /**
   * permission request
   */
  PERMRQ: "PERMRQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodPermPermrqCode =
  typeof XActMoodPermPermrqCode[keyof typeof XActMoodPermPermrqCode];
