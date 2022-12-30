/**
 * Location (mobile) where healthcare service was delivered.
 * http://terminology.hl7.org/ValueSet/v3-MobileUnit
 */
export const MobileUnitCode = {
  /**
   * Mobile Unit
   */
  MOBL: "MOBL",

  /**
   * Ambulance
   */
  AMB: "AMB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MobileUnitCode = typeof MobileUnitCode[keyof typeof MobileUnitCode];
