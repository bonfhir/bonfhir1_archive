/**
 * Value Set of codes that specify how (or whether) to transport a patient, when applicable, for an ordered service.
 * http://terminology.hl7.org/ValueSet/v2-0124
 */
export const Hl7VSTransportationModeCode = {
  /**
   * Cart - patient travels on cart or gurney
   */
  CART: "CART",

  /**
   * The examining device goes to patient's location
   */
  PORT: "PORT",

  /**
   * Patient walks to diagnostic service
   */
  WALK: "WALK",

  /**
   * Wheelchair
   */
  WHLC: "WHLC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTransportationModeCode =
  typeof Hl7VSTransportationModeCode[keyof typeof Hl7VSTransportationModeCode];
