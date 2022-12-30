/**
 * Value Set of codes that specify the circumstances under which the patient was or will be admitted.
 * http://terminology.hl7.org/ValueSet/v2-0007
 */
export const Hl7VSAdmissionTypeCode = {
  /**
   * Accident
   */
  A: "A",

  /**
   * Emergency
   */
  E: "E",

  /**
   * Labor and Delivery
   */
  L: "L",

  /**
   * Routine
   */
  R: "R",

  /**
   * Newborn (Birth in healthcare facility)
   */
  N: "N",

  /**
   * Urgent
   */
  U: "U",

  /**
   * Elective
   */
  C: "C",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdmissionTypeCode =
  typeof Hl7VSAdmissionTypeCode[keyof typeof Hl7VSAdmissionTypeCode];
