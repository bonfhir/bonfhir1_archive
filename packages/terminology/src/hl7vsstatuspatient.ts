/**
 * Value Set of codes that specify whether the length of stay is normal or respectively shorter or longer than normal.
 * http://terminology.hl7.org/ValueSet/v2-0739
 */
export const Hl7VSStatusPatientCode = {
  /**
   * Normal length of stay
   */
  Normallengthofstay: "1",

  /**
   * Short length of stay
   */
  Shortlengthofstay: "2",

  /**
   * Long length of stay
   */
  Longlengthofstay: "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSStatusPatientCode =
  typeof Hl7VSStatusPatientCode[keyof typeof Hl7VSStatusPatientCode];
