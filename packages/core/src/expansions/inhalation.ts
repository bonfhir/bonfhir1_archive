/**
 * Inhalation
 * http://terminology.hl7.org/ValueSet/v3-Inhalation
 */
export const InhalationCode = {
  /**
   * Inhalation, respiratory
   */
  IPINHL: "IPINHL",

  /**
   * Inhalation, oral intermittent flow
   */
  ORIFINHL: "ORIFINHL",

  /**
   * Inhalation, oral rebreather mask
   */
  REBREATH: "REBREATH",

  /**
   * Inhalation, respiratory
   */
  ORINHL: "ORINHL",

  /**
   * Inhalation, respiratory
   */
  RESPINHL: "RESPINHL",

  /**
   * Inhalation, intermittent positive pressure breathing (ippb)
   */
  IPPB: "IPPB",

  /**
   * Inhalation, nasal
   */
  NASINHL: "NASINHL",

  /**
   * Inhalation, nasal cannula
   */
  NASINHLC: "NASINHLC",

  /**
   * Inhalation, nasal cannula
   */
  NP: "NP",

  /**
   * Inhalation, nebulization
   */
  NEB: "NEB",

  /**
   * Inhalation, nebulization, nasal
   */
  NASNEB: "NASNEB",

  /**
   * Inhalation, nebulization, oral
   */
  ORNEB: "ORNEB",

  /**
   * Inhalation, tracheostomy
   */
  TRACH: "TRACH",

  /**
   * Inhalation, ventilator
   */
  VENT: "VENT",

  /**
   * Inhalation, ventimask
   */
  VENTMASK: "VENTMASK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InhalationCode = typeof InhalationCode[keyof typeof InhalationCode];
