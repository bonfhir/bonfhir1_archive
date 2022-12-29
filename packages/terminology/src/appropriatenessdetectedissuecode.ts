/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-AppropriatenessDetectedIssueCode
 */
export const AppropriatenessDetectedIssueCodeCode = {
  /**
   * InteractionDetectedIssueCode
   */
  InteractionDetectedIssueCode: "_InteractionDetectedIssueCode",

  /**
   * Food Interaction Alert
   */
  FoodInteractionAlert: "FOOD",

  /**
   * Therapeutic Product Alert
   */
  TherapeuticProductAlert: "TPROD",

  /**
   * Drug Interaction Alert
   */
  DrugInteractionAlert: "DRG",

  /**
   * Natural Health Product Alert
   */
  NaturalHealthProductAlert: "NHP",

  /**
   * Non-Prescription Interaction Alert
   */
  NonPrescriptionInteractionAlert: "NONRX",

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

  /**
   * previously ineffective
   */
  previouslyineffective: "PREVINEF",

  /**
   * High Dose for Weight Alert
   */
  HighDoseforWeightAlert: "DOSEHINDW",

  /**
   * Low Dose for Weight Alert
   */
  LowDoseforWeightAlert: "DOSELINDW",

  /**
   * High Dose for Height/Surface Area Alert
   */
  HighDoseforHeightSurfaceAreaAlert: "DOSEHINDSA",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  LowDoseforHeightSurfaceAreaAlert: "DOSELINDSA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AppropriatenessDetectedIssueCodeCode =
  typeof AppropriatenessDetectedIssueCodeCode[keyof typeof AppropriatenessDetectedIssueCodeCode];
