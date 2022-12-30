/**
 * Value Set of codes specifying any known or suspected hazard associated with this material item.
 * http://terminology.hl7.org/ValueSet/v2-0871
 */
export const Hl7VSSupplyRiskCodesCode = {
  /**
   * Corrosive
   */
  COR: "COR",

  /**
   * Flammable
   */
  FLA: "FLA",

  /**
   * Explosive
   */
  EXP: "EXP",

  /**
   * Injury Hazard
   */
  INJ: "INJ",

  /**
   * Toxic
   */
  TOX: "TOX",

  /**
   * Radioactive
   */
  RAD: "RAD",

  /**
   * Unknown
   */
  UNK: "UNK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSupplyRiskCodesCode =
  typeof Hl7VSSupplyRiskCodesCode[keyof typeof Hl7VSSupplyRiskCodesCode];
