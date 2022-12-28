/**
 * Value Set of codes that further define an identified status.
 * http://terminology.hl7.org/ValueSet/v2-0950
 */
export const Hl7VSOrderStatusModifierCode = {
  /**
   * Expiration on event
   */
  EOE: "EOE",

  /**
   * Expiration on time
   */
  EOT: "EOT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrderStatusModifierCode =
  typeof Hl7VSOrderStatusModifierCode[keyof typeof Hl7VSOrderStatusModifierCode];
