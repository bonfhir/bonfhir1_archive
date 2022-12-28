/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 * http://hl7.org/fhir/ValueSet/service-provision-conditions
 */
export const ServiceProvisionConditionsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ServiceProvisionConditionsCode =
  typeof ServiceProvisionConditionsCode[keyof typeof ServiceProvisionConditionsCode];
