/**
 * Pulmonary
 * http://terminology.hl7.org/ValueSet/v3-PulmonaryRoute
 */
export const PulmonaryRouteCode = {
  /**
   * Inhalation, intermittent positive pressure breathing (ippb)
   */
  IPPB: "IPPB",

  /**
   * Inhalation, ventilator
   */
  VENT: "VENT",

  /**
   * Inhalation, ventimask
   */
  VENTMASK: "VENTMASK",

  /**
   * Instillation, endotracheal tube
   */
  ETINSTL: "ETINSTL",

  /**
   * Instillation, nasotracheal tube
   */
  NTT: "NTT",

  /**
   * Nebulization, endotracheal tube
   */
  ETNEB: "ETNEB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PulmonaryRouteCode =
  typeof PulmonaryRouteCode[keyof typeof PulmonaryRouteCode];
