/**
 * A kind of service which is authorized to be performed.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodPermission
 */
export const ActMoodPermissionCode = {
  /**
   * permission
   */
  PERM: "PERM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodPermissionCode =
  typeof ActMoodPermissionCode[keyof typeof ActMoodPermissionCode];
