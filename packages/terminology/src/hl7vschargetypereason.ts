/**
 * Value Set of codes that specify the choice of, and providing the clinical rationale for, a selected charge type.
 * http://terminology.hl7.org/ValueSet/v2-0475
 */
export const Hl7VSChargeTypeReasonCode = {
  /**
   * Allergy
   */
  "01": "01",

  /**
   * Intolerance
   */
  "02": "02",

  /**
   * Treatment Failure
   */
  "03": "03",

  /**
   * Patient Request
   */
  "04": "04",

  /**
   * No Exception
   */
  "05": "05",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSChargeTypeReasonCode =
  typeof Hl7VSChargeTypeReasonCode[keyof typeof Hl7VSChargeTypeReasonCode];
