/**
 * **Definition:**An act that may occur in the future and which is regarded as undesirable. The essential feature of a risk is that if it occurs this would be regarded as a marker of a negative outcome or of deterioration towards a negative outcome. Recording a risk indicates that it is seen as more likely to occur in the subject than in a general member of the population but does not mean it is expected to occur.

**Examples:**Increased risk of DVT, at risk for sub-acute bacterial endocarditis.

**Discussion:**Note: An observation in RSK mood expresses the undesirable act, and not the underlying risk factor. A risk factor that is present (e.g. obesity, smoking, etc) should be expressed in event mood. INT (intent) reflects a plan for the future, which is a declaration to do something. This contrasts with RSK (risk), which is the potential that something negative will occur that may or may not ever happen. GOL (goal) reflects a hope to achieve something. EXPEC (expectation) is the prediction of a positive or negative event. This contrasts with RSK (risk), which is the potential that something negative will occur that may or may not ever happen, and may not be expected to happen.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodRisk
 */
export const ActMoodRiskCode = {
  /**
   * risk
   */
  risk: "RSK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodRiskCode =
  typeof ActMoodRiskCode[keyof typeof ActMoodRiskCode];
