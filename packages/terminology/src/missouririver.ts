/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-MissouriRiver
 */
export const MissouriRiverCode = {
  /**
   * Crow
   */
  "x-CRO": "x-CRO",

  /**
   * Hidatsa
   */
  "x-HID": "x-HID",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MissouriRiverCode =
  typeof MissouriRiverCode[keyof typeof MissouriRiverCode];
