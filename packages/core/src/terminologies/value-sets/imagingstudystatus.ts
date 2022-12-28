/**
 * The status of the ImagingStudy.
 * http://hl7.org/fhir/ValueSet/imagingstudy-status
 */
export const ImagingStudyStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImagingStudyStatusCode =
  typeof ImagingStudyStatusCode[keyof typeof ImagingStudyStatusCode];
