/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EndocrinologyClinic
 */
export const EndocrinologyClinicCode = {
  /**
   * Endocrinology clinic
   */
  ENDO: "ENDO",

  /**
   * Pediatric endocrinology clinic
   */
  PEDE: "PEDE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EndocrinologyClinicCode =
  typeof EndocrinologyClinicCode[keyof typeof EndocrinologyClinicCode];
