/**
 * **Definition:** Consent to have healthcare information in an electronic health record accessed for research purposes.
 * http://terminology.hl7.org/ValueSet/v3-ActResearchInformationAccess
 */
export const ActResearchInformationAccessCode = {
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
export type ActResearchInformationAccessCode =
  typeof ActResearchInformationAccessCode[keyof typeof ActResearchInformationAccessCode];
