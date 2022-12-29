/**
 * An Entity (player) that is authorized to provide health care services by some authorizing agency (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassHealthcareProvider
 */
export const RoleClassHealthcareProviderCode = {
  /**
   * healthcare provider
   */
  healthcareprovider: "PROV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassHealthcareProviderCode =
  typeof RoleClassHealthcareProviderCode[keyof typeof RoleClassHealthcareProviderCode];
