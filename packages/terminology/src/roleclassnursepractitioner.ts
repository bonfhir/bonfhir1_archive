/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassNursePractitioner
 */
export const RoleClassNursePractitionerCode = {
  /**
   * nurse practitioner
   */
  nursepractitioner: "NURPRAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassNursePractitionerCode =
  typeof RoleClassNursePractitionerCode[keyof typeof RoleClassNursePractitionerCode];
