/**
 * An observation that reports the dilution of a sample.
 * http://terminology.hl7.org/ValueSet/v3-ActSpecObsDilutionCode
 */
export const ActSpecObsDilutionCodeCode = {
  /**
   * ActSpecObsDilutionCode
   */
  DILUTION: "DILUTION",

  /**
   * Auto-High Dilution
   */
  "AUTO-HIGH": "AUTO-HIGH",

  /**
   * Auto-Low Dilution
   */
  "AUTO-LOW": "AUTO-LOW",

  /**
   * Pre-Dilution
   */
  PRE: "PRE",

  /**
   * Rerun Dilution
   */
  RERUN: "RERUN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSpecObsDilutionCodeCode =
  typeof ActSpecObsDilutionCodeCode[keyof typeof ActSpecObsDilutionCodeCode];
