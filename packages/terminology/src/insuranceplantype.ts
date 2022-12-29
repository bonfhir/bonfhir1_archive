/**
 * This example value set defines a set of codes that can be used to indicate a type of insurance plan.
 * http://terminology.hl7.org/ValueSet/insuranceplan-type
 */
export const InsurancePlanTypeCode = {
  /**
   * Medical
   */
  Medical: "medical",

  /**
   * Dental
   */
  Dental: "dental",

  /**
   * Mental Health
   */
  MentalHealth: "mental",

  /**
   * Substance Abuse
   */
  SubstanceAbuse: "subst-ab",

  /**
   * Vision
   */
  Vision: "vision",

  /**
   * Drug
   */
  Drug: "drug",

  /**
   * Short Term
   */
  ShortTerm: "short-term",

  /**
   * Long Term Care
   */
  LongTermCare: "long-term",

  /**
   * Hospice
   */
  Hospice: "hospice",

  /**
   * Home Health
   */
  HomeHealth: "home",

  /**
   * Drug
   */
  Drug: "Drug",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InsurancePlanTypeCode =
  typeof InsurancePlanTypeCode[keyof typeof InsurancePlanTypeCode];
