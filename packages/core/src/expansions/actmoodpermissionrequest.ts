/**
 * A request for authorization to perform a kind of service.

This is distinct from RQO which is a request for an actual act. PERMRQ is merely a request for permission to perform an act.*Discussion:*
 * http://terminology.hl7.org/ValueSet/v3-ActMoodPermissionRequest
 */
export const ActMoodPermissionRequestCode = {
  /**
   * permission request
   */
  PERMRQ: "PERMRQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodPermissionRequestCode =
  typeof ActMoodPermissionRequestCode[keyof typeof ActMoodPermissionRequestCode];
