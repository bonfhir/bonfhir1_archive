/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNative
 */
export const RaceAlaskanNativeCode = {
  /**
   * Alaska Native
   */
  "1735-0": "1735-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeCode =
  typeof RaceAlaskanNativeCode[keyof typeof RaceAlaskanNativeCode];
