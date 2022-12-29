/**
 * Value Set of codes that specify the circumstances under which the patient was or will be admitted.
 * http://terminology.hl7.org/ValueSet/v2-0007
 */
export const Hl7VSAdmissionTypeCode = {
  /**
   * Accident
   */
  Accident: "A",

  /**
   * Emergency
   */
  Emergency: "E",

  /**
   * Labor and Delivery
   */
  LaborandDelivery: "L",

  /**
   * Routine
   */
  Routine: "R",

  /**
   * Newborn (Birth in healthcare facility)
   */
  NewbornBirthinhealthcarefacility: "N",

  /**
   * Urgent
   */
  Urgent: "U",

  /**
   * Elective
   */
  Elective: "C",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdmissionTypeCode =
  typeof Hl7VSAdmissionTypeCode[keyof typeof Hl7VSAdmissionTypeCode];
