/**
 * Value Set of codes specifying the scheme for the patient results release categorization.
 * http://terminology.hl7.org/ValueSet/v2-0909
 */
export const Hl7VSPatientResultsReleaseCategorizationSchemeCode = {
  /**
   * Share To Be Determined -<p>Category to be determined
   */
  STBD: "STBD",

  /**
   * Share Immediately -<p>Share result with patient immediately
   */
  SIMM: "SIMM",

  /**
   * Share Within Normal Limits -<p>Share result in reference/therapeutic range with patient immediately<p>Share result out of reference/therapeutic ranges with patient after 1 or more business day as agreed to by the systems in play.
   */
  SWNL: "SWNL",

  /**
   * Share In1 Day -<p>Share result regardless of reference/therapeutic range after 1 or more business day as agreed to by the systems in play.
   */
  SID: "SID",

  /**
   * Share in 1 Day Conditionally -<p>Share result in reference ranges/therapeutic with patient after 1 or more business day as agreed to by the systems in play.<p>Withhold result out of reference/therapeutic range until physician release
   */
  SIDC: "SIDC",

  /**
   * Share Withhold -<p>Withhold result regardless of reference/therapeutic ranges
   */
  SWTH: "SWTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientResultsReleaseCategorizationSchemeCode =
  typeof Hl7VSPatientResultsReleaseCategorizationSchemeCode[keyof typeof Hl7VSPatientResultsReleaseCategorizationSchemeCode];
