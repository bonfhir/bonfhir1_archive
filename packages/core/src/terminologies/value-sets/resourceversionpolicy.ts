/**
 * How the system supports versioning for a resource.
 * http://hl7.org/fhir/ValueSet/versioning-policy
 */
export const ResourceVersionPolicyCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResourceVersionPolicyCode =
  typeof ResourceVersionPolicyCode[keyof typeof ResourceVersionPolicyCode];
