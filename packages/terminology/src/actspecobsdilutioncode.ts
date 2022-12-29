/**
 * An observation that reports the dilution of a sample.
 * http://terminology.hl7.org/ValueSet/v3-ActSpecObsDilutionCode
 */
export const ActSpecObsDilutionCodeCode = {
  /**
   * ActSpecObsDilutionCode
   */
  ActSpecObsDilutionCode: "DILUTION",

  /**
   * Auto-High Dilution
   */
  AutoHighDilution: "AUTO-HIGH",

  /**
   * Auto-Low Dilution
   */
  AutoLowDilution: "AUTO-LOW",

  /**
   * Pre-Dilution
   */
  PreDilution: "PRE",

  /**
   * Rerun Dilution
   */
  RerunDilution: "RERUN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSpecObsDilutionCodeCode =
  typeof ActSpecObsDilutionCodeCode[keyof typeof ActSpecObsDilutionCodeCode];
