/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 * http://terminology.hl7.org/ValueSet/service-provision-conditions
 */
export const ServiceProvisionConditionsCode = {
  /**
   * Free
   */
  Free: "free",

  /**
   * Discounts Available
   */
  DiscountsAvailable: "disc",

  /**
   * Fees apply
   */
  Feesapply: "cost",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ServiceProvisionConditionsCode =
  typeof ServiceProvisionConditionsCode[keyof typeof ServiceProvisionConditionsCode];
