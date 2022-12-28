/**
 * A list of all the request resource types defined in this version of the FHIR specification.
 * http://hl7.org/fhir/ValueSet/request-resource-types
 */
export const RequestResourceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RequestResourceTypeCode =
  typeof RequestResourceTypeCode[keyof typeof RequestResourceTypeCode];
