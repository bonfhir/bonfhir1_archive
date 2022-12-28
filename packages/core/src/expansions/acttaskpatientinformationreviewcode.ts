/**
 * A person (e.g., clinician, the patient herself) reviews patient information in the electronic medical record.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskPatientInformationReviewCode
 */
export const ActTaskPatientInformationReviewCodeCode = {
  /**
   * patient information review task
   */
  PATINFO: "PATINFO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskPatientInformationReviewCodeCode =
  typeof ActTaskPatientInformationReviewCodeCode[keyof typeof ActTaskPatientInformationReviewCodeCode];
