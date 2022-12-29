/**
 * A specialization of "has support" (SPRT), used to relate a secondary observation to a Region of Interest on a multidimensional observation, if the ROI specifies the true boundaries of the secondary observation as opposed to only marking the approximate area. For example, if the start and end of an ST elevation episode is visible in an EKG, this relation would indicate the ROI bounds the "ST elevation" observation -- the ROI defines the true beginning and ending of the episode. Conversely, if a ROI simply contains ST elevation, but it does not define the bounds (start and end) of the episode, the more general "has support" relation is used. Likewise, if a ROI on an image defines the true bounds of a "1st degree burn", the relation "has bounded support" is used; but if the ROI only points to the approximate area of the burn, the general "has support" relation is used.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasBoundedSupport
 */
export const ActRelationshipHasBoundedSupportCode = {
  /**
   * has bounded support
   */
  hasboundedsupport: "SPRTBND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasBoundedSupportCode =
  typeof ActRelationshipHasBoundedSupportCode[keyof typeof ActRelationshipHasBoundedSupportCode];
