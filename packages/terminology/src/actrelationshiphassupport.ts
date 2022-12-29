/**
 * Used to indicate that an existing service is suggesting evidence for a new observation. The assumption of support is attributed to the same actor who asserts the observation. Source must be an observation, target may be any service (e.g., to indicate a status post.)
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasSupport
 */
export const ActRelationshipHasSupportCode = {
  /**
   * has support
   */
  hassupport: "SPRT",

  /**
   * has bounded support
   */
  hasboundedsupport: "SPRTBND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasSupportCode =
  typeof ActRelationshipHasSupportCode[keyof typeof ActRelationshipHasSupportCode];
