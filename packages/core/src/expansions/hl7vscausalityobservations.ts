/**
 * Value Set of codes that record event observations regarding what may have caused a product related event.
 * http://terminology.hl7.org/ValueSet/v2-0252
 */
export const Hl7VSCausalityObservationsCode = {
  /**
   * Abatement of event after product withdrawn
   */
  AW: "AW",

  /**
   * Event recurred after product reintroduced
   */
  BE: "BE",

  /**
   * Literature reports association of product with event
   */
  LI: "LI",

  /**
   * Event occurred after product introduced
   */
  IN: "IN",

  /**
   * Alternative explanations for the event available
   */
  EX: "EX",

  /**
   * Effect observed when patient receives placebo
   */
  PL: "PL",

  /**
   * Toxic levels of product documented in blood or body fluids
   */
  TC: "TC",

  /**
   * Dose response observed
   */
  DR: "DR",

  /**
   * Similar events in past for this patient
   */
  SE: "SE",

  /**
   * Occurrence of event was confirmed by objective evidence
   */
  OE: "OE",

  /**
   * Other
   */
  OT: "OT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCausalityObservationsCode =
  typeof Hl7VSCausalityObservationsCode[keyof typeof Hl7VSCausalityObservationsCode];
