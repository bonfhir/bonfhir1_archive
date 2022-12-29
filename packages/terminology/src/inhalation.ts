/**
 * Inhalation
 * http://terminology.hl7.org/ValueSet/v3-Inhalation
 */
export const InhalationCode = {
  /**
   * Inhalation, respiratory
   */
  Inhalationrespiratory: "IPINHL",

  /**
   * Inhalation, oral intermittent flow
   */
  Inhalationoralintermittentflow: "ORIFINHL",

  /**
   * Inhalation, oral rebreather mask
   */
  Inhalationoralrebreathermask: "REBREATH",

  /**
   * Inhalation, respiratory
   */
  Inhalationrespiratory: "ORINHL",

  /**
   * Inhalation, respiratory
   */
  Inhalationrespiratory: "RESPINHL",

  /**
   * Inhalation, intermittent positive pressure breathing (ippb)
   */
  Inhalationintermittentpositivepressurebreathingippb: "IPPB",

  /**
   * Inhalation, nasal
   */
  Inhalationnasal: "NASINHL",

  /**
   * Inhalation, nasal cannula
   */
  Inhalationnasalcannula: "NASINHLC",

  /**
   * Inhalation, nasal cannula
   */
  Inhalationnasalcannula: "NP",

  /**
   * Inhalation, nebulization
   */
  Inhalationnebulization: "NEB",

  /**
   * Inhalation, nebulization, nasal
   */
  Inhalationnebulizationnasal: "NASNEB",

  /**
   * Inhalation, nebulization, oral
   */
  Inhalationnebulizationoral: "ORNEB",

  /**
   * Inhalation, tracheostomy
   */
  Inhalationtracheostomy: "TRACH",

  /**
   * Inhalation, ventilator
   */
  Inhalationventilator: "VENT",

  /**
   * Inhalation, ventimask
   */
  Inhalationventimask: "VENTMASK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InhalationCode = typeof InhalationCode[keyof typeof InhalationCode];
