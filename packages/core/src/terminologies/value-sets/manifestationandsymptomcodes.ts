/**
 * Example value set for Manifestation and Symptom codes.
 * http://hl7.org/fhir/ValueSet/manifestation-or-symptom
 */
export const ManifestationAndSymptomCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManifestationAndSymptomCodesCode =
  typeof ManifestationAndSymptomCodesCode[keyof typeof ManifestationAndSymptomCodesCode];
