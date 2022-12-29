/**
 * Value Set of codes specifying the types of services provided by the location.
 * http://terminology.hl7.org/ValueSet/v2-0442
 */
export const Hl7VSLocationServiceCodeCode = {
  /**
   * Diagnostic
   */
  Diagnostic: "D",

  /**
   * Therapeutic
   */
  Therapeutic: "T",

  /**
   * Primary Care
   */
  PrimaryCare: "P",

  /**
   * Emergency Room Casualty
   */
  EmergencyRoomCasualty: "E",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLocationServiceCodeCode =
  typeof Hl7VSLocationServiceCodeCode[keyof typeof Hl7VSLocationServiceCodeCode];
