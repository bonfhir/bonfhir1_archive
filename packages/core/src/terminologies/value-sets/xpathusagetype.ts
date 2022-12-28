/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 * http://hl7.org/fhir/ValueSet/search-xpath-usage
 */
export const XPathUsageTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XPathUsageTypeCode =
  typeof XPathUsageTypeCode[keyof typeof XPathUsageTypeCode];
