/**
 * An observation about the presence (or absence) of a particular disease state in a subject.
 * http://terminology.hl7.org/ValueSet/v3-ObservationDiagnosisTypes
 */
export const ObservationDiagnosisTypesCode = {
  /**
   * admitting diagnosis
   */
  admittingdiagnosis: "ADMDX",

  /**
   * discharge diagnosis
   */
  dischargediagnosis: "DISDX",

  /**
   * intermediate diagnosis
   */
  intermediatediagnosis: "INTDX",

  /**
   * nature of injury
   */
  natureofinjury: "NOI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationDiagnosisTypesCode =
  typeof ObservationDiagnosisTypesCode[keyof typeof ObservationDiagnosisTypesCode];
