/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 * http://terminology.hl7.org/ValueSet/referencerange-meaning
 */
export const ObservationReferenceRangeMeaningCodesCode = {
  /**
   * Type
   */
  Type: "type",

  /**
   * Normal Range
   */
  NormalRange: "normal",

  /**
   * Recommended Range
   */
  RecommendedRange: "recommended",

  /**
   * Treatment Range
   */
  TreatmentRange: "treatment",

  /**
   * Therapeutic Desired Level
   */
  TherapeuticDesiredLevel: "therapeutic",

  /**
   * Pre Therapeutic Desired Level
   */
  PreTherapeuticDesiredLevel: "pre",

  /**
   * Post Therapeutic Desired Level
   */
  PostTherapeuticDesiredLevel: "post",

  /**
   * Endocrine
   */
  Endocrine: "endocrine",

  /**
   * Pre-Puberty
   */
  PrePuberty: "pre-puberty",

  /**
   * Follicular Stage
   */
  FollicularStage: "follicular",

  /**
   * MidCycle
   */
  MidCycle: "midcycle",

  /**
   * Luteal
   */
  Luteal: "luteal",

  /**
   * Post-Menopause
   */
  PostMenopause: "postmenopausal",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationReferenceRangeMeaningCodesCode =
  typeof ObservationReferenceRangeMeaningCodesCode[keyof typeof ObservationReferenceRangeMeaningCodesCode];
