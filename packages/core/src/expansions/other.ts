/**
 * The actual value is not an element in the value domain of a variable. (e.g., concept not provided by required code system).
 * http://terminology.hl7.org/ValueSet/v3-Other
 */
export const OtherCode = {
  /**
   * other
   */
  OTH: "OTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OtherCode = typeof OtherCode[keyof typeof OtherCode];
