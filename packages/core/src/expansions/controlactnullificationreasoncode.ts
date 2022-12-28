/**
 * **Description:**Identifies reasons for nullifying (retracting) a particular control act.

**Examples:**"Entered in error", "altered decision", etc.
 * http://terminology.hl7.org/ValueSet/v3-ControlActNullificationReasonCode
 */
export const ControlActNullificationReasonCodeCode = {
  /**
   * altered decision
   */
  ALTD: "ALTD",

  /**
   * entered in error
   */
  EIE: "EIE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ControlActNullificationReasonCodeCode =
  typeof ControlActNullificationReasonCodeCode[keyof typeof ControlActNullificationReasonCodeCode];
