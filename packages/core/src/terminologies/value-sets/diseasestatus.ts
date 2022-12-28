/**
 * The status of a disease or symptom.
 * http://hl7.org/fhir/ValueSet/disease-status
 */
export const DiseaseStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiseaseStatusCode =
  typeof DiseaseStatusCode[keyof typeof DiseaseStatusCode];
