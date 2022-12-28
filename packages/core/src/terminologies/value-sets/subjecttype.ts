/**
 * Possible types of subjects.
 * http://hl7.org/fhir/ValueSet/subject-type
 */
export const SubjectTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubjectTypeCode =
  typeof SubjectTypeCode[keyof typeof SubjectTypeCode];
