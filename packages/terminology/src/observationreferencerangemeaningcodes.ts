/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 * http://terminology.hl7.org/ValueSet/referencerange-meaning
 */
export const ObservationReferenceRangeMeaningCodesCode = {
  /**
   * Type
   */
  type: "type",

  /**
   * Normal Range
   */
  normal: "normal",

  /**
   * Recommended Range
   */
  recommended: "recommended",

  /**
   * Treatment Range
   */
  treatment: "treatment",

  /**
   * Therapeutic Desired Level
   */
  therapeutic: "therapeutic",

  /**
   * Pre Therapeutic Desired Level
   */
  pre: "pre",

  /**
   * Post Therapeutic Desired Level
   */
  post: "post",

  /**
   * Endocrine
   */
  endocrine: "endocrine",

  /**
   * Pre-Puberty
   */
  "pre-puberty": "pre-puberty",

  /**
   * Follicular Stage
   */
  follicular: "follicular",

  /**
   * MidCycle
   */
  midcycle: "midcycle",

  /**
   * Luteal
   */
  luteal: "luteal",

  /**
   * Post-Menopause
   */
  postmenopausal: "postmenopausal",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationReferenceRangeMeaningCodesCode =
  typeof ObservationReferenceRangeMeaningCodesCode[keyof typeof ObservationReferenceRangeMeaningCodesCode];
