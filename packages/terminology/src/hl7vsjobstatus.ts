/**
 * Value Set of codes that specify a next of kin/associated party's job status.
 * http://terminology.hl7.org/ValueSet/v2-0311
 */
export const Hl7VSJobStatusCode = {
  /**
   * Permanent
   */
  Permanent: "P",

  /**
   * Temporary
   */
  Temporary: "T",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSJobStatusCode =
  typeof Hl7VSJobStatusCode[keyof typeof Hl7VSJobStatusCode];
