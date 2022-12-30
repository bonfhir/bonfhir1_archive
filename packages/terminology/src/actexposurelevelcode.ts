/**
 * A qualitative measure of the degree of exposure to the causative agent. This includes concepts such as "low", "medium" and "high". This quantifies how the quantity that was available to be administered to the target differs from typical or background levels of the substance.
 * http://terminology.hl7.org/ValueSet/v3-ActExposureLevelCode
 */
export const ActExposureLevelCodeCode = {
  /**
   * ActExposureLevelCode
   */
  _ActExposureLevelCode: "_ActExposureLevelCode",

  /**
   * high
   */
  HIGH: "HIGH",

  /**
   * low
   */
  LOW: "LOW",

  /**
   * medium
   */
  MEDIUM: "MEDIUM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActExposureLevelCodeCode =
  typeof ActExposureLevelCodeCode[keyof typeof ActExposureLevelCodeCode];
