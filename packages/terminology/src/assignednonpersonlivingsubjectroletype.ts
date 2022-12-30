/**
 * **Description:**A role type that is used to further qualify a non-person subject playing a role where the role class attribute is set to RoleClass AssignedEntity
 * http://terminology.hl7.org/ValueSet/v3-AssignedNonPersonLivingSubjectRoleType
 */
export const AssignedNonPersonLivingSubjectRoleTypeCode = {
  /**
   * AssignedNonPersonLivingSubjectRoleType
   */
  _AssignedNonPersonLivingSubjectRoleType:
    "_AssignedNonPersonLivingSubjectRoleType",

  /**
   * Assistive non-person living subject
   */
  ASSIST: "ASSIST",

  /**
   * Biotherapeutic non-person living subject
   */
  BIOTH: "BIOTH",

  /**
   * Antibiotic
   */
  ANTIBIOT: "ANTIBIOT",

  /**
   * Debridement
   */
  DEBR: "DEBR",

  /**
   * Clinical Companion
   */
  CCO: "CCO",

  /**
   * Seeing
   */
  SEE: "SEE",

  /**
   * Sniffing
   */
  SNIFF: "SNIFF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AssignedNonPersonLivingSubjectRoleTypeCode =
  typeof AssignedNonPersonLivingSubjectRoleTypeCode[keyof typeof AssignedNonPersonLivingSubjectRoleTypeCode];
