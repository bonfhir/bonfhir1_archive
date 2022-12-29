/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-VaginalGel
 */
export const VaginalGelCode = {
  /**
   * Vaginal Gel
   */
  VaginalGel: "VAGGEL",

  /**
   * Vaginal Gel with Applicator
   */
  VaginalGelwithApplicator: "VGELAPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaginalGelCode = typeof VaginalGelCode[keyof typeof VaginalGelCode];
