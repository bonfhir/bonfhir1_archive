/**
 * The Act can be performed or is being performed
 * http://terminology.hl7.org/ValueSet/v3-ActStatusActive
 */
export const ActStatusActiveCode = {
  /**
   * active
   */
  active: "active",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusActiveCode =
  typeof ActStatusActiveCode[keyof typeof ActStatusActiveCode];
