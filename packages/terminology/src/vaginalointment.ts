/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-VaginalOintment
 */
export const VaginalOintmentCode = {
  /**
   * Vaginal Ointment
   */
  VaginalOintment: "VAGOINT",

  /**
   * Vaginal Ointment with Applicator
   */
  VaginalOintmentwithApplicator: "VAGOINTAPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaginalOintmentCode =
  typeof VaginalOintmentCode[keyof typeof VaginalOintmentCode];
