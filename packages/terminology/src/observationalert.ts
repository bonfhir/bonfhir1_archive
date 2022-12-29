/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ObservationAlert
 */
export const ObservationAlertCode = {
  /**
   * Observation Alert
   */
  ObservationAlert: "OBSA",

  /**
   * Age Alert
   */
  AgeAlert: "AGE",

  /**
   * adult alert
   */
  adultalert: "ADALRT",

  /**
   * High Dose for Age Alert
   */
  HighDoseforAgeAlert: "DOSEHINDA",

  /**
   * Low Dose for Age Alert
   */
  LowDoseforAgeAlert: "DOSELINDA",

  /**
   * geriatric alert
   */
  geriatricalert: "GEALRT",

  /**
   * pediatric alert
   */
  pediatricalert: "PEALRT",

  /**
   * Condition Alert
   */
  ConditionAlert: "COND",

  /**
   *
   */
  HGHT: "HGHT",

  /**
   * Lactation Alert
   */
  LactationAlert: "LACT",

  /**
   * Pregnancy Alert
   */
  PregnancyAlert: "PREG",

  /**
   *
   */
  WGHT: "WGHT",

  /**
   * common reaction alert
   */
  commonreactionalert: "CREACT",

  /**
   * Genetic Alert
   */
  GeneticAlert: "GEN",

  /**
   * Gender Alert
   */
  GenderAlert: "GEND",

  /**
   * Lab Alert
   */
  LabAlert: "LAB",

  /**
   * Reaction Alert
   */
  ReactionAlert: "REACT",

  /**
   * Allergy Alert
   */
  AllergyAlert: "ALGY",

  /**
   * Intolerance Alert
   */
  IntoleranceAlert: "INT",

  /**
   * Related Reaction Alert
   */
  RelatedReactionAlert: "RREACT",

  /**
   * Related Allergy Alert
   */
  RelatedAllergyAlert: "RALG",

  /**
   * Related Prior Reaction Alert
   */
  RelatedPriorReactionAlert: "RAR",

  /**
   * Related Intolerance Alert
   */
  RelatedIntoleranceAlert: "RINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationAlertCode =
  typeof ObservationAlertCode[keyof typeof ObservationAlertCode];
