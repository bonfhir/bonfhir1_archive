/**
 * Hypersensitivity resulting in an adverse reaction upon exposure to an agent.
 * http://terminology.hl7.org/ValueSet/v3-ObservationIntoleranceType
 */
export const ObservationIntoleranceTypeCode = {
  /**
   * intolerance
   */
  OINT: "OINT",

  /**
   * Allergy
   */
  ALG: "ALG",

  /**
   * Drug Allergy
   */
  DALG: "DALG",

  /**
   * Environmental Allergy
   */
  EALG: "EALG",

  /**
   * Food Allergy
   */
  FALG: "FALG",

  /**
   * Drug Intolerance
   */
  DINT: "DINT",

  /**
   * Drug Non-Allergy Intolerance
   */
  DNAINT: "DNAINT",

  /**
   * Environmental Intolerance
   */
  EINT: "EINT",

  /**
   * Environmental Non-Allergy Intolerance
   */
  ENAINT: "ENAINT",

  /**
   * Food Intolerance
   */
  FINT: "FINT",

  /**
   * Food Non-Allergy Intolerance
   */
  FNAINT: "FNAINT",

  /**
   * Non-Allergy Intolerance
   */
  NAINT: "NAINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationIntoleranceTypeCode =
  typeof ObservationIntoleranceTypeCode[keyof typeof ObservationIntoleranceTypeCode];
