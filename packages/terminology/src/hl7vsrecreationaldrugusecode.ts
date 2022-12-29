/**
 * Value Set of codes specifying what recreational drugs the patient uses.
 * http://terminology.hl7.org/ValueSet/v2-0431
 */
export const Hl7VSRecreationalDrugUseCodeCode = {
  /**
   * Alcohol
   */
  Alcohol: "A",

  /**
   * Kava
   */
  Kava: "K",

  /**
   * Marijuana
   */
  Marijuana: "M",

  /**
   * Tobacco - smoked
   */
  Tobaccosmoked: "T",

  /**
   * Tobacco - chewed
   */
  Tobaccochewed: "C",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRecreationalDrugUseCodeCode =
  typeof Hl7VSRecreationalDrugUseCodeCode[keyof typeof Hl7VSRecreationalDrugUseCodeCode];
