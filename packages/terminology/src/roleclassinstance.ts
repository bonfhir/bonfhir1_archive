/**
 * An individual piece of material (player) instantiating a class of material (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassInstance
 */
export const RoleClassInstanceCode = {
  /**
   * instance
   */
  instance: "INST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassInstanceCode =
  typeof RoleClassInstanceCode[keyof typeof RoleClassInstanceCode];
