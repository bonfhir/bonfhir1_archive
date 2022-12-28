/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 * http://hl7.org/fhir/ValueSet/clinicalimpression-status
 */
export const ClinicalImpressionStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinicalImpressionStatusCode =
  typeof ClinicalImpressionStatusCode[keyof typeof ClinicalImpressionStatusCode];
