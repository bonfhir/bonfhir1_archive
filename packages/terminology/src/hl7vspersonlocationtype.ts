/**
 * Value Set of codes that specify the categorization of the person's location.
 * http://terminology.hl7.org/ValueSet/v2-0305
 */
export const Hl7VSPersonLocationTypeCode = {
  /**
   * Clinic
   */
  Clinic: "C",

  /**
   * Department
   */
  Department: "D",

  /**
   * Home
   */
  Home: "H",

  /**
   * Nursing Unit
   */
  NursingUnit: "N",

  /**
   * Provider's Office
   */
  ProvidersOffice: "O",

  /**
   * Phone
   */
  Phone: "P",

  /**
   * SNF
   */
  SNF: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPersonLocationTypeCode =
  typeof Hl7VSPersonLocationTypeCode[keyof typeof Hl7VSPersonLocationTypeCode];
