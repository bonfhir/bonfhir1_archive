/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 * http://terminology.hl7.org/ValueSet/service-provision-conditions
 */
export const ServiceProvisionConditionsCode = {
  /**
   * Free
   */
  free: "free",

  /**
   * Discounts Available
   */
  disc: "disc",

  /**
   * Fees apply
   */
  cost: "cost",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ServiceProvisionConditionsCode =
  typeof ServiceProvisionConditionsCode[keyof typeof ServiceProvisionConditionsCode];
