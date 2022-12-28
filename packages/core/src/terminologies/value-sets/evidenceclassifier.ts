/**
 * Commonly used classifiers for evidence sets.
 * http://hl7.org/fhir/ValueSet/evidence-classifier-code
 */
export const EvidenceClassifierCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceClassifierCode =
  typeof EvidenceClassifierCode[keyof typeof EvidenceClassifierCode];
