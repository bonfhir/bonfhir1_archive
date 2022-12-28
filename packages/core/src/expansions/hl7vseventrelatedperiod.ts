/**
 * Value Set of codes that specify a common (periodical) activity of daily living.
 * http://terminology.hl7.org/ValueSet/v2-0528
 */
export const Hl7VSEventRelatedPeriodCode = {
  /**
   * the hour of sleep (e.g., H18-22)
   */
  HS: "HS",

  /**
   * before meal (from lat. ante cibus)
   */
  AC: "AC",

  /**
   * after meal (from lat. post cibus)
   */
  PC: "PC",

  /**
   * between meals (from lat. inter cibus)
   */
  IC: "IC",

  /**
   * before breakfast (from lat. ante cibus matutinus)
   */
  ACM: "ACM",

  /**
   * before lunch (from lat. ante cibus diurnus)
   */
  ACD: "ACD",

  /**
   * before dinner (from lat. ante cibus vespertinus)
   */
  ACV: "ACV",

  /**
   * after breakfast (from lat. post cibus matutinus)
   */
  PCM: "PCM",

  /**
   * after lunch (from lat. post cibus diurnus)
   */
  PCD: "PCD",

  /**
   * after dinner (from lat. post cibus vespertinus)
   */
  PCV: "PCV",

  /**
   * between breakfast and lunch
   */
  ICM: "ICM",

  /**
   * between lunch and dinner
   */
  ICD: "ICD",

  /**
   * between dinner and the hour of sleep
   */
  ICV: "ICV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventRelatedPeriodCode =
  typeof Hl7VSEventRelatedPeriodCode[keyof typeof Hl7VSEventRelatedPeriodCode];
