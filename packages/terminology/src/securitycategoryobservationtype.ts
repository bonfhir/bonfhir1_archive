/**
 * Type of security metadata observation made about the category of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Security category metadata is defined by ISO/IEC 2382-8:1998(E/F)/ T-REC-X.812-1995 as: "A nonhierarchical grouping of sensitive information used to control access to data more finely than with hierarchical security classification alone."
 * http://terminology.hl7.org/ValueSet/v3-SecurityCategoryObservationType
 */
export const SecurityCategoryObservationTypeCode = {
  /**
   * security category observation
   */
  SECCATOBS: "SECCATOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityCategoryObservationTypeCode =
  typeof SecurityCategoryObservationTypeCode[keyof typeof SecurityCategoryObservationTypeCode];
