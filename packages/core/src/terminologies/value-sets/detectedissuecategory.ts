/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 * http://hl7.org/fhir/ValueSet/detectedissue-category
 */
export const DetectedIssueCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DetectedIssueCategoryCode =
  typeof DetectedIssueCategoryCode[keyof typeof DetectedIssueCategoryCode];
