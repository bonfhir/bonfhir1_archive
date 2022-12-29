/**
 * An individual designated for notification as the next of kin for a given entity.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassNextOfKin
 */
export const RoleClassNextOfKinCode = {
  /**
   * next of kin
   */
  nextofkin: "NOK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassNextOfKinCode =
  typeof RoleClassNextOfKinCode[keyof typeof RoleClassNextOfKinCode];
