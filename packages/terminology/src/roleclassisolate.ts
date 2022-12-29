/**
 * A microorganism that has been isolated from other microorganisms or a source matrix.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassIsolate
 */
export const RoleClassIsolateCode = {
  /**
   * isolate
   */
  isolate: "ISLT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassIsolateCode =
  typeof RoleClassIsolateCode[keyof typeof RoleClassIsolateCode];
