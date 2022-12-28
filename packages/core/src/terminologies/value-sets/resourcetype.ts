/**
 * One of the resource types defined as part of this version of FHIR.
 * http://hl7.org/fhir/ValueSet/resource-types
 */
export const ResourceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResourceTypeCode =
  typeof ResourceTypeCode[keyof typeof ResourceTypeCode];
