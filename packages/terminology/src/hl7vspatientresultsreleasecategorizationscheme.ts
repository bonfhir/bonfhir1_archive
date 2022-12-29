/**
 * Value Set of codes specifying the scheme for the patient results release categorization.
 * http://terminology.hl7.org/ValueSet/v2-0909
 */
export const Hl7VSPatientResultsReleaseCategorizationSchemeCode = {
  /**
   * Share To Be Determined -<p>Category to be determined
   */
  ShareToBeDeterminedpCategorytobedetermined: "STBD",

  /**
   * Share Immediately -<p>Share result with patient immediately
   */
  ShareImmediatelypShareresultwithpatientimmediately: "SIMM",

  /**
   * Share Within Normal Limits -<p>Share result in reference/therapeutic range with patient immediately<p>Share result out of reference/therapeutic ranges with patient after 1 or more business day as agreed to by the systems in play.
   */
  ShareWithinNormalLimitspShareresultinreferencetherapeuticrangewithpatientimmediatelypShareresultoutofreferencetherapeuticrangeswithpatientafter1ormorebusinessdayasagreedtobythesystemsinplay:
    "SWNL",

  /**
   * Share In1 Day -<p>Share result regardless of reference/therapeutic range after 1 or more business day as agreed to by the systems in play.
   */
  ShareIn1DaypShareresultregardlessofreferencetherapeuticrangeafter1ormorebusinessdayasagreedtobythesystemsinplay:
    "SID",

  /**
   * Share in 1 Day Conditionally -<p>Share result in reference ranges/therapeutic with patient after 1 or more business day as agreed to by the systems in play.<p>Withhold result out of reference/therapeutic range until physician release
   */
  Sharein1DayConditionallypShareresultinreferencerangestherapeuticwithpatientafter1ormorebusinessdayasagreedtobythesystemsinplaypWithholdresultoutofreferencetherapeuticrangeuntilphysicianrelease:
    "SIDC",

  /**
   * Share Withhold -<p>Withhold result regardless of reference/therapeutic ranges
   */
  ShareWithholdpWithholdresultregardlessofreferencetherapeuticranges: "SWTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientResultsReleaseCategorizationSchemeCode =
  typeof Hl7VSPatientResultsReleaseCategorizationSchemeCode[keyof typeof Hl7VSPatientResultsReleaseCategorizationSchemeCode];
