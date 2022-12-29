/**
 * An Act that is still in the preparatory stages has been put aside. No action can occur until the Act is released.
 * http://terminology.hl7.org/ValueSet/v3-ActStatusHeld
 */
export const ActStatusHeldCode = {
  /**
   * held
   */
  held: "held",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusHeldCode =
  typeof ActStatusHeldCode[keyof typeof ActStatusHeldCode];
