/**
 * Pulmonary
 * http://terminology.hl7.org/ValueSet/v3-PulmonaryRoute
 */
export const PulmonaryRouteCode = {
  /**
   * Inhalation, intermittent positive pressure breathing (ippb)
   */
  Inhalationintermittentpositivepressurebreathingippb: "IPPB",

  /**
   * Inhalation, ventilator
   */
  Inhalationventilator: "VENT",

  /**
   * Inhalation, ventimask
   */
  Inhalationventimask: "VENTMASK",

  /**
   * Instillation, endotracheal tube
   */
  Instillationendotrachealtube: "ETINSTL",

  /**
   * Instillation, nasotracheal tube
   */
  Instillationnasotrachealtube: "NTT",

  /**
   * Nebulization, endotracheal tube
   */
  Nebulizationendotrachealtube: "ETNEB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PulmonaryRouteCode =
  typeof PulmonaryRouteCode[keyof typeof PulmonaryRouteCode];
