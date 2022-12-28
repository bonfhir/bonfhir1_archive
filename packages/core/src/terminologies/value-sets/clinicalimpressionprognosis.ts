/**
 * Example value set for clinical impression prognosis.
 * http://hl7.org/fhir/ValueSet/clinicalimpression-prognosis
 */
export const ClinicalImpressionPrognosisCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinicalImpressionPrognosisCode =
  typeof ClinicalImpressionPrognosisCode[keyof typeof ClinicalImpressionPrognosisCode];
