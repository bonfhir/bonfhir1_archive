/**
 * Value Set of codes that specify the admission status for the diagnosis related group (DRG) determination.
 * http://terminology.hl7.org/ValueSet/v2-0759
 */
export const Hl7VSStatusAdmissionCode = {
  /**
   * Admission status is valid; used for grouping
   */
  "0": "0",

  /**
   * Admission status is valid; not used for grouping
   */
  "1": "1",

  /**
   * Admission status is invalid; not used for grouping
   */
  "2": "2",

  /**
   * Admission status is invalid; default value used for grouping
   */
  "3": "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSStatusAdmissionCode =
  typeof Hl7VSStatusAdmissionCode[keyof typeof Hl7VSStatusAdmissionCode];
