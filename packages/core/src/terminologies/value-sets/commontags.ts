/**
 * Common Tag Codes defined by FHIR project
 * http://hl7.org/fhir/ValueSet/common-tags
 */
export const CommonTagsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommonTagsCode = typeof CommonTagsCode[keyof typeof CommonTagsCode];
