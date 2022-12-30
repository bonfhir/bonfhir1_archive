/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-VaginalGel
 */
export const VaginalGelCode = {
  /**
   * Vaginal Gel
   */
  VAGGEL: "VAGGEL",

  /**
   * Vaginal Gel with Applicator
   */
  VGELAPL: "VGELAPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaginalGelCode = typeof VaginalGelCode[keyof typeof VaginalGelCode];
