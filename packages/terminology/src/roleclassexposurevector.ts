/**
 * **Description:** A vector is a living subject that carries an exposure agent. The vector does not cause the disease itself, but exposes targets to the exposure agent. A mosquito carrying malaria is an example of a vector. The scoper of the role must be the exposure agent (e.g., pathogen).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassExposureVector
 */
export const RoleClassExposureVectorCode = {
  /**
   * exposure vector
   */
  EXPVECTOR: "EXPVECTOR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassExposureVectorCode =
  typeof RoleClassExposureVectorCode[keyof typeof RoleClassExposureVectorCode];
