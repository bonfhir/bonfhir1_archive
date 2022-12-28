/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActTaskOrderEntryCode
 */
export const ActTaskOrderEntryCodeCode = {
  /**
   * order entry task
   */
  OE: "OE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskOrderEntryCodeCode =
  typeof ActTaskOrderEntryCodeCode[keyof typeof ActTaskOrderEntryCodeCode];
