/**
 * This example value set defines a set of codes that can be used to indicate a type of insurance plan.
 * http://terminology.hl7.org/ValueSet/insuranceplan-type
 */
export const InsurancePlanTypeCode = {
  /**
   * Medical
   */
  medical: "medical",

  /**
   * Dental
   */
  dental: "dental",

  /**
   * Mental Health
   */
  mental: "mental",

  /**
   * Substance Abuse
   */
  "subst-ab": "subst-ab",

  /**
   * Vision
   */
  vision: "vision",

  /**
   * Drug
   */
  drug: "drug",

  /**
   * Short Term
   */
  "short-term": "short-term",

  /**
   * Long Term Care
   */
  "long-term": "long-term",

  /**
   * Hospice
   */
  hospice: "hospice",

  /**
   * Home Health
   */
  home: "home",

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
