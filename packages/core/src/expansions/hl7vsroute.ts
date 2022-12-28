/**
 * Value Set of codes that are used to indicate a means of administrating a medication dose.
 * http://terminology.hl7.org/ValueSet/v2-0033
 */
export const Hl7VSRouteCode = {
  /**
   * Apply externally
   */
  AP: "AP",

  /**
   * Chew
   */
  CH: "CH",

  /**
   * Dust
   */
  DU: "DU",

  /**
   * Ear
   */
  EA: "EA",

  /**
   * Eye
   */
  EY: "EY",

  /**
   * Intro-arterial
   */
  IA: "IA",

  /**
   * Intra-dermal
   */
  ID: "ID",

  /**
   * Infiltrate
   */
  IF: "IF",

  /**
   * Inhalation
   */
  IH: "IH",

  /**
   * Intra-muscular
   */
  IM: "IM",

  /**
   * Intra-nasal
   */
  IN: "IN",

  /**
   * Irrigate
   */
  IR: "IR",

  /**
   * Inserted
   */
  IS: "IS",

  /**
   * Intrathecal
   */
  IT: "IT",

  /**
   * Intravenous
   */
  IV: "IV",

  /**
   * Nebulized
   */
  NB: "NB",

  /**
   * Nathogasic
   */
  NG: "NG",

  /**
   * Peri-anally
   */
  PA: "PA",

  /**
   * Paint
   */
  PT: "PT",

  /**
   * IV push
   */
  PU: "PU",

  /**
   * Rectally
   */
  RC: "RC",

  /**
   * Shampoo
   */
  SH: "SH",

  /**
   * Sublingual
   */
  SL: "SL",

  /**
   * Soak
   */
  SO: "SO",

  /**
   * IV soluset
   */
  SS: "SS",

  /**
   * Topically
   */
  TP: "TP",

  /**
   * Wash
   */
  WA: "WA",

  /**
   * Wipe
   */
  WI: "WI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRouteCode = typeof Hl7VSRouteCode[keyof typeof Hl7VSRouteCode];
