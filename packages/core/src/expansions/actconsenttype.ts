/**
 * **Definition:** The type of consent directive, e.g., to consent or dissent to collect, access, or use in specific ways within an EHRS or for health information exchange; or to disclose health information for purposes such as research.
 * http://terminology.hl7.org/ValueSet/v3-ActConsentType
 */
export const ActConsentTypeCode = {
  /**
   * ActConsentType
   */
  _ActConsentType: "_ActConsentType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConsentTypeCode =
  typeof ActConsentTypeCode[keyof typeof ActConsentTypeCode];
