/**
 * Value Set of codes that identify the kind of location described in the location definition.
 * http://terminology.hl7.org/ValueSet/v2-0260
 */
export const Hl7VSPatientLocationTypeCode = {
  /**
   * Nursing Unit
   */
  NursingUnit: "N",

  /**
   * Room
   */
  Room: "R",

  /**
   * Bed
   */
  Bed: "B",

  /**
   * Exam Room
   */
  ExamRoom: "E",

  /**
   * Operating Room
   */
  OperatingRoom: "O",

  /**
   * Clinic
   */
  Clinic: "C",

  /**
   * Department
   */
  Department: "D",

  /**
   * Other Location
   */
  OtherLocation: "L",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientLocationTypeCode =
  typeof Hl7VSPatientLocationTypeCode[keyof typeof Hl7VSPatientLocationTypeCode];
