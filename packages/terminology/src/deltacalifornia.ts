/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-DeltaCalifornia
 */
export const DeltaCaliforniaCode = {
  /**
   * Diegueno
   */
  _Diegueno: "_Diegueno",

  /**
   * Kumeyaay
   */
  "x-DIH": "x-DIH",

  /**
   * Cocopa
   */
  "x-COC": "x-COC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeltaCaliforniaCode =
  typeof DeltaCaliforniaCode[keyof typeof DeltaCaliforniaCode];
