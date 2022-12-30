/**
 * An exposure agent carrier is an entity that is capable of conveying an exposure agent from one entity to another. The scoper of the role must be the exposure agent (e.g., pathogen).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassExposureAgentCarrier
 */
export const RoleClassExposureAgentCarrierCode = {
  /**
   * exposure agent carrier
   */
  EXPAGTCAR: "EXPAGTCAR",

  /**
   * exposure vector
   */
  EXPVECTOR: "EXPVECTOR",

  /**
   * fomite
   */
  FOMITE: "FOMITE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassExposureAgentCarrierCode =
  typeof RoleClassExposureAgentCarrierCode[keyof typeof RoleClassExposureAgentCarrierCode];
