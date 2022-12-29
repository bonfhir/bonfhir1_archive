/**
 * Value Set of codes specifying any known or suspected hazard associated with this material item.
 * http://terminology.hl7.org/ValueSet/v2-0871
 */
export const Hl7VSSupplyRiskCodesCode = {
  /**
   * Corrosive
   */
  Corrosive: "COR",

  /**
   * Flammable
   */
  Flammable: "FLA",

  /**
   * Explosive
   */
  Explosive: "EXP",

  /**
   * Injury Hazard
   */
  InjuryHazard: "INJ",

  /**
   * Toxic
   */
  Toxic: "TOX",

  /**
   * Radioactive
   */
  Radioactive: "RAD",

  /**
   * Unknown
   */
  Unknown: "UNK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSupplyRiskCodesCode =
  typeof Hl7VSSupplyRiskCodesCode[keyof typeof Hl7VSSupplyRiskCodesCode];
