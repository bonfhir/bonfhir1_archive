/**
 * Value Set of codes that are used to indicate a means of administrating a medication dose.
 * http://terminology.hl7.org/ValueSet/v2-0033
 */
export const Hl7VSRouteCode = {
  /**
   * Apply externally
   */
  Applyexternally: "AP",

  /**
   * Chew
   */
  Chew: "CH",

  /**
   * Dust
   */
  Dust: "DU",

  /**
   * Ear
   */
  Ear: "EA",

  /**
   * Eye
   */
  Eye: "EY",

  /**
   * Intro-arterial
   */
  Introarterial: "IA",

  /**
   * Intra-dermal
   */
  Intradermal: "ID",

  /**
   * Infiltrate
   */
  Infiltrate: "IF",

  /**
   * Inhalation
   */
  Inhalation: "IH",

  /**
   * Intra-muscular
   */
  Intramuscular: "IM",

  /**
   * Intra-nasal
   */
  Intranasal: "IN",

  /**
   * Irrigate
   */
  Irrigate: "IR",

  /**
   * Inserted
   */
  Inserted: "IS",

  /**
   * Intrathecal
   */
  Intrathecal: "IT",

  /**
   * Intravenous
   */
  Intravenous: "IV",

  /**
   * Nebulized
   */
  Nebulized: "NB",

  /**
   * Nathogasic
   */
  Nathogasic: "NG",

  /**
   * Peri-anally
   */
  Perianally: "PA",

  /**
   * Paint
   */
  Paint: "PT",

  /**
   * IV push
   */
  IVpush: "PU",

  /**
   * Rectally
   */
  Rectally: "RC",

  /**
   * Shampoo
   */
  Shampoo: "SH",

  /**
   * Sublingual
   */
  Sublingual: "SL",

  /**
   * Soak
   */
  Soak: "SO",

  /**
   * IV soluset
   */
  IVsoluset: "SS",

  /**
   * Topically
   */
  Topically: "TP",

  /**
   * Wash
   */
  Wash: "WA",

  /**
   * Wipe
   */
  Wipe: "WI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRouteCode = typeof Hl7VSRouteCode[keyof typeof Hl7VSRouteCode];
