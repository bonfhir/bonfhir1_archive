/**
 * Value Set of codes specifying how the patient was brought to the healthcare facility.
 * http://terminology.hl7.org/ValueSet/v2-0430
 */
export const Hl7VSModeOfArrivalCodeCode = {
  /**
   * Ambulance
   */
  Ambulance: "A",

  /**
   * Car
   */
  Car: "C",

  /**
   * On foot
   */
  Onfoot: "F",

  /**
   * Helicopter
   */
  Helicopter: "H",

  /**
   * Public Transport
   */
  PublicTransport: "P",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSModeOfArrivalCodeCode =
  typeof Hl7VSModeOfArrivalCodeCode[keyof typeof Hl7VSModeOfArrivalCodeCode];
