/**
 * Value Set of codes that specify a common (periodical) activity of daily living.
 * http://terminology.hl7.org/ValueSet/v2-0528
 */
export const Hl7VSEventRelatedPeriodCode = {
  /**
   * the hour of sleep (e.g., H18-22)
   */
  thehourofsleepegH1822: "HS",

  /**
   * before meal (from lat. ante cibus)
   */
  beforemealfromlatantecibus: "AC",

  /**
   * after meal (from lat. post cibus)
   */
  aftermealfromlatpostcibus: "PC",

  /**
   * between meals (from lat. inter cibus)
   */
  betweenmealsfromlatintercibus: "IC",

  /**
   * before breakfast (from lat. ante cibus matutinus)
   */
  beforebreakfastfromlatantecibusmatutinus: "ACM",

  /**
   * before lunch (from lat. ante cibus diurnus)
   */
  beforelunchfromlatantecibusdiurnus: "ACD",

  /**
   * before dinner (from lat. ante cibus vespertinus)
   */
  beforedinnerfromlatantecibusvespertinus: "ACV",

  /**
   * after breakfast (from lat. post cibus matutinus)
   */
  afterbreakfastfromlatpostcibusmatutinus: "PCM",

  /**
   * after lunch (from lat. post cibus diurnus)
   */
  afterlunchfromlatpostcibusdiurnus: "PCD",

  /**
   * after dinner (from lat. post cibus vespertinus)
   */
  afterdinnerfromlatpostcibusvespertinus: "PCV",

  /**
   * between breakfast and lunch
   */
  betweenbreakfastandlunch: "ICM",

  /**
   * between lunch and dinner
   */
  betweenlunchanddinner: "ICD",

  /**
   * between dinner and the hour of sleep
   */
  betweendinnerandthehourofsleep: "ICV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventRelatedPeriodCode =
  typeof Hl7VSEventRelatedPeriodCode[keyof typeof Hl7VSEventRelatedPeriodCode];
