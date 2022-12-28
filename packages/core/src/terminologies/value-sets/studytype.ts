/**
 * The type of study the evidence was derived from.
 * http://hl7.org/fhir/ValueSet/study-type
 */
export const StudyTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StudyTypeCode = typeof StudyTypeCode[keyof typeof StudyTypeCode];
