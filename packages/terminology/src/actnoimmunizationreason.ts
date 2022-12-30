/**
 * A coded description of the reason for why a patient did not receive a scheduled immunization.

(important for public health strategy
 * http://terminology.hl7.org/ValueSet/v3-ActNoImmunizationReason
 */
export const ActNoImmunizationReasonCode = {
  /**
   * ActNoImmunizationReason
   */
  _ActNoImmunizationReason: "_ActNoImmunizationReason",

  /**
   * immunity
   */
  IMMUNE: "IMMUNE",

  /**
   * medical precaution
   */
  MEDPREC: "MEDPREC",

  /**
   * product out of stock
   */
  OSTOCK: "OSTOCK",

  /**
   * patient objection
   */
  PATOBJ: "PATOBJ",

  /**
   * philosophical objection
   */
  PHILISOP: "PHILISOP",

  /**
   * religious objection
   */
  RELIG: "RELIG",

  /**
   * vaccine efficacy concerns
   */
  VACEFF: "VACEFF",

  /**
   * vaccine safety concerns
   */
  VACSAF: "VACSAF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActNoImmunizationReasonCode =
  typeof ActNoImmunizationReasonCode[keyof typeof ActNoImmunizationReasonCode];
