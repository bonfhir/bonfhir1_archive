/**
 * Concepts further defining a patient's ancestry.  In the US, a current use is to use these codes to report ethnicity in line with US federal standards for Hispanic origin.  Used for HL7 Version 2 messaging in the PID segment.
 * http://terminology.hl7.org/ValueSet/v2-0189
 */
export const Hl7VSEthnicGroupCode = {
  /**
   * Hispanic or Latino
   */
  H: "H",

  /**
   * Not Hispanic or Latino
   */
  N: "N",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEthnicGroupCode =
  typeof Hl7VSEthnicGroupCode[keyof typeof Hl7VSEthnicGroupCode];
