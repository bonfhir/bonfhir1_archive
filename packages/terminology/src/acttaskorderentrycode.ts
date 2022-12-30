/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActTaskOrderEntryCode
 */
export const ActTaskOrderEntryCodeCode = {
  /**
   * order entry task
   */
  OE: "OE",

  /**
   * laboratory test order entry task
   */
  LABOE: "LABOE",

  /**
   * medication order entry task
   */
  MEDOE: "MEDOE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskOrderEntryCodeCode =
  typeof ActTaskOrderEntryCodeCode[keyof typeof ActTaskOrderEntryCodeCode];
