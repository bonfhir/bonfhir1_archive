/**
 * An observation denoting the physical location of a person or thing based on a reference coordinate system.
 * http://terminology.hl7.org/ValueSet/v3-ActClassPosition
 */
export const ActClassPositionCode = {
  /**
   * position
   */
  POS: "POS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassPositionCode =
  typeof ActClassPositionCode[keyof typeof ActClassPositionCode];
