/**
 * **Description:**Animals, including fish and insects, and microorganisms which may participate as assigned entities in biotherapies.
 * http://terminology.hl7.org/ValueSet/v3-BiotherapeuticNon-personLivingSubjectRoleType
 */
export const BiotherapeuticNonPersonLivingSubjectRoleTypeCode = {
  /**
   * Biotherapeutic non-person living subject
   */
  BIOTH: "BIOTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BiotherapeuticNonPersonLivingSubjectRoleTypeCode =
  typeof BiotherapeuticNonPersonLivingSubjectRoleTypeCode[keyof typeof BiotherapeuticNonPersonLivingSubjectRoleTypeCode];
