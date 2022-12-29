/**
 * Institution
 * http://terminology.hl7.org/ValueSet/v3-Institution
 */
export const InstitutionCode = {
  /**
   * Institution
   */
  Institution: "I",

  /**
   * community shelter
   */
  communityshelter: "CS",

  /**
   * Group Home
   */
  GroupHome: "G",

  /**
   * Nursing Home
   */
  NursingHome: "N",

  /**
   * Extended care facility
   */
  Extendedcarefacility: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InstitutionCode =
  typeof InstitutionCode[keyof typeof InstitutionCode];
