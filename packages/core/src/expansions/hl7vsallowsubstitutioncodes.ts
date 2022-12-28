/**
 * Value Set of codes that indicate whether the appointment resource may be substituted for another by the entity assigned to fulfill the appointment.
 * http://terminology.hl7.org/ValueSet/v2-0279
 */
export const Hl7VSAllowSubstitutionCodesCode = {
  /**
   * Contact the Placer Contact Person prior to making any substitutions of this resource
   */
  CONFIRM: "CONFIRM",

  /**
   * Substitution of this resource is not allowed
   */
  NO: "NO",

  /**
   * Notify the Placer Contact Person, through normal institutional procedures, that a substitution of this resource has been made
   */
  NOTIFY: "NOTIFY",

  /**
   * Substitution of this resource is allowed
   */
  YES: "YES",

  /**
   * Substitution of this resource is not allowed
   */
  No: "No",

  /**
   * Contact the Placer Contact Person prior to making any substitutions of this resource
   */
  Confirm: "Confirm",

  /**
   * Notify the Placer Contact Person, through normal institutional procedures, that a substitution of this resource has been made
   */
  Notify: "Notify",

  /**
   * Substitution of this resource is allowed
   */
  Yes: "Yes",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAllowSubstitutionCodesCode =
  typeof Hl7VSAllowSubstitutionCodesCode[keyof typeof Hl7VSAllowSubstitutionCodesCode];
