/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 * http://hl7.org/fhir/ValueSet/bundle-type
 */
export const BundleTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BundleTypeCode = typeof BundleTypeCode[keyof typeof BundleTypeCode];
