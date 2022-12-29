/**
 * **Definition:**A patient encounter where the patient and the practitioner(s) are not in the same physical location. Examples include telephone conference, email exchange, robotic surgery, and televideo conference.
 * http://terminology.hl7.org/ValueSet/v3-ActVirtualEncounterCode
 */
export const ActVirtualEncounterCodeCode = {
  /**
   * virtual
   */
  virtual: "VR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActVirtualEncounterCodeCode =
  typeof ActVirtualEncounterCodeCode[keyof typeof ActVirtualEncounterCodeCode];
