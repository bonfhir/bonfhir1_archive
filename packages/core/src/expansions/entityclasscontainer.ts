/**
 * A container of other entities.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassContainer
 */
export const EntityClassContainerCode = {
  /**
   * container
   */
  CONT: "CONT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassContainerCode =
  typeof EntityClassContainerCode[keyof typeof EntityClassContainerCode];
