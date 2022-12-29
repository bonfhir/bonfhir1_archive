/**
 * A coded description of the reason for why a patient did not receive a scheduled immunization.

(important for public health strategy
 * http://terminology.hl7.org/ValueSet/v3-ActNoImmunizationReason
 */
export const ActNoImmunizationReasonCode = {
  /**
   * ActNoImmunizationReason
   */
  ActNoImmunizationReason: "_ActNoImmunizationReason",

  /**
   * immunity
   */
  immunity: "IMMUNE",

  /**
   * medical precaution
   */
  medicalprecaution: "MEDPREC",

  /**
   * product out of stock
   */
  productoutofstock: "OSTOCK",

  /**
   * patient objection
   */
  patientobjection: "PATOBJ",

  /**
   * philosophical objection
   */
  philosophicalobjection: "PHILISOP",

  /**
   * religious objection
   */
  religiousobjection: "RELIG",

  /**
   * vaccine efficacy concerns
   */
  vaccineefficacyconcerns: "VACEFF",

  /**
   * vaccine safety concerns
   */
  vaccinesafetyconcerns: "VACSAF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActNoImmunizationReasonCode =
  typeof ActNoImmunizationReasonCode[keyof typeof ActNoImmunizationReasonCode];
