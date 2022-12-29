/**
 * Value Set of codes that further describe an observation definition that is characterized as a challenge observation.
 * http://terminology.hl7.org/ValueSet/v2-0257
 */
export const Hl7VSNatureOfChallengeCode = {
  /**
   * Fasting (no calorie intake) for the period specified in the time component of the term, e.g., 1H POST CFST
   */
  Fastingnocalorieintakefortheperiodspecifiedinthetimecomponentofthetermeg1HPOSTCFST:
    "CFST",

  /**
   * Exercise undertaken as challenge (can be quantified)
   */
  Exerciseundertakenaschallengecanbequantified: "EXCZ",

  /**
   * No fluid intake for the period specified in the time component of the term
   */
  Nofluidintakefortheperiodspecifiedinthetimecomponentoftheterm: "FFST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNatureOfChallengeCode =
  typeof Hl7VSNatureOfChallengeCode[keyof typeof Hl7VSNatureOfChallengeCode];
