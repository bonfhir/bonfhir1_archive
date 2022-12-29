/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-DeltaCalifornia
 */
export const DeltaCaliforniaCode = {
  /**
   * Diegueno
   */
  Diegueno: "_Diegueno",

  /**
   * Kumeyaay
   */
  Kumeyaay: "x-DIH",

  /**
   * Cocopa
   */
  Cocopa: "x-COC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeltaCaliforniaCode =
  typeof DeltaCaliforniaCode[keyof typeof DeltaCaliforniaCode];
