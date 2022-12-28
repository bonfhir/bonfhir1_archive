/**
 * The license that applies to an Implementation Guide (using an SPDX license Identifiers, or 'not-open-source'). The binding is required but new SPDX license Identifiers are allowed to be used (https://spdx.org/licenses/).
 * http://hl7.org/fhir/ValueSet/spdx-license
 */
export const SPDXLicenseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SPDXLicenseCode =
  typeof SPDXLicenseCode[keyof typeof SPDXLicenseCode];
