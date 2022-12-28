/**
 * An observation that reports the dilution of a sample.
 * http://terminology.hl7.org/ValueSet/v3-ActSpecObsDilutionCode
 */
export const ActSpecObsDilutionCodeCode = {
  /**
   * ActSpecObsDilutionCode
   */
  DILUTION: "DILUTION",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSpecObsDilutionCodeCode =
  typeof ActSpecObsDilutionCodeCode[keyof typeof ActSpecObsDilutionCodeCode];
