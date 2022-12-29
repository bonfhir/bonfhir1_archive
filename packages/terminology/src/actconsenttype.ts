/**
 * **Definition:** The type of consent directive, e.g., to consent or dissent to collect, access, or use in specific ways within an EHRS or for health information exchange; or to disclose health information for purposes such as research.
 * http://terminology.hl7.org/ValueSet/v3-ActConsentType
 */
export const ActConsentTypeCode = {
  /**
   * ActConsentType
   */
  ActConsentType: "_ActConsentType",

  /**
   * information collection
   */
  informationcollection: "ICOL",

  /**
   * information disclosure
   */
  informationdisclosure: "IDSCL",

  /**
   * information access
   */
  informationaccess: "INFA",

  /**
   * access only
   */
  accessonly: "INFAO",

  /**
   * access and save only
   */
  accessandsaveonly: "INFASO",

  /**
   * information redisclosure
   */
  informationredisclosure: "IRDSCL",

  /**
   * research information access
   */
  researchinformationaccess: "RESEARCH",

  /**
   * de-identified information access
   */
  deidentifiedinformationaccess: "RSDID",

  /**
   * re-identifiable information access
   */
  reidentifiableinformationaccess: "RSREID",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConsentTypeCode =
  typeof ActConsentTypeCode[keyof typeof ActConsentTypeCode];
