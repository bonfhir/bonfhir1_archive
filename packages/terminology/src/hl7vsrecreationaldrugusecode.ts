/**
 * Value Set of codes specifying what recreational drugs the patient uses.
 * http://terminology.hl7.org/ValueSet/v2-0431
 */
export const Hl7VSRecreationalDrugUseCodeCode = {
  /**
   * Alcohol
   */
  A: "A",

  /**
   * Kava
   */
  K: "K",

  /**
   * Marijuana
   */
  M: "M",

  /**
   * Tobacco - smoked
   */
  T: "T",

  /**
   * Tobacco - chewed
   */
  C: "C",

  /**
   * Other
   */
  O: "O",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRecreationalDrugUseCodeCode =
  typeof Hl7VSRecreationalDrugUseCodeCode[keyof typeof Hl7VSRecreationalDrugUseCodeCode];
