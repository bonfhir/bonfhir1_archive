/**
 * Code set to define specialized/allowed diets
 * http://terminology.hl7.org/ValueSet/v3-ActDietCode
 */
export const ActDietCodeCode = {
  /**
   * Diet
   */
  DIET: "DIET",

  /**
   * breikost (GE)
   */
  BR: "BR",

  /**
   * diabetes mellitus diet
   */
  DM: "DM",

  /**
   * fasting
   */
  FAST: "FAST",

  /**
   * formula diet
   */
  FORMULA: "FORMULA",

  /**
   * gluten free
   */
  GF: "GF",

  /**
   * low fat
   */
  LF: "LF",

  /**
   * low protein
   */
  LP: "LP",

  /**
   * liquid
   */
  LQ: "LQ",

  /**
   * low sodium
   */
  LS: "LS",

  /**
   * normal diet
   */
  N: "N",

  /**
   * no fat
   */
  NF: "NF",

  /**
   * phenylalanine free
   */
  PAF: "PAF",

  /**
   * parenteral
   */
  PAR: "PAR",

  /**
   * reduction diet
   */
  RD: "RD",

  /**
   * schonkost (GE)
   */
  SCH: "SCH",

  /**
   * nutritional supplement
   */
  SUPPLEMENT: "SUPPLEMENT",

  /**
   * tea only
   */
  T: "T",

  /**
   * low valin, leucin, isoleucin
   */
  VLI: "VLI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActDietCodeCode =
  typeof ActDietCodeCode[keyof typeof ActDietCodeCode];
