/**
 * Code set to define specialized/allowed diets
 * http://terminology.hl7.org/ValueSet/v3-ActDietCode
 */
export const ActDietCodeCode = {
  /**
   * Diet
   */
  Diet: "DIET",

  /**
   * breikost (GE)
   */
  breikostGE: "BR",

  /**
   * diabetes mellitus diet
   */
  diabetesmellitusdiet: "DM",

  /**
   * fasting
   */
  fasting: "FAST",

  /**
   * formula diet
   */
  formuladiet: "FORMULA",

  /**
   * gluten free
   */
  glutenfree: "GF",

  /**
   * low fat
   */
  lowfat: "LF",

  /**
   * low protein
   */
  lowprotein: "LP",

  /**
   * liquid
   */
  liquid: "LQ",

  /**
   * low sodium
   */
  lowsodium: "LS",

  /**
   * normal diet
   */
  normaldiet: "N",

  /**
   * no fat
   */
  nofat: "NF",

  /**
   * phenylalanine free
   */
  phenylalaninefree: "PAF",

  /**
   * parenteral
   */
  parenteral: "PAR",

  /**
   * reduction diet
   */
  reductiondiet: "RD",

  /**
   * schonkost (GE)
   */
  schonkostGE: "SCH",

  /**
   * nutritional supplement
   */
  nutritionalsupplement: "SUPPLEMENT",

  /**
   * tea only
   */
  teaonly: "T",

  /**
   * low valin, leucin, isoleucin
   */
  lowvalinleucinisoleucin: "VLI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActDietCodeCode =
  typeof ActDietCodeCode[keyof typeof ActDietCodeCode];
