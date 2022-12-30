/**
 * An observation about the presence (or absence) of a particular disease state in a subject.
 * http://terminology.hl7.org/ValueSet/v3-ObservationDiagnosisTypes
 */
export const ObservationDiagnosisTypesCode = {
  /**
   * admitting diagnosis
   */
  ADMDX: "ADMDX",

  /**
   * discharge diagnosis
   */
  DISDX: "DISDX",

  /**
   * intermediate diagnosis
   */
  INTDX: "INTDX",

  /**
   * nature of injury
   */
  NOI: "NOI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationDiagnosisTypesCode =
  typeof ObservationDiagnosisTypesCode[keyof typeof ObservationDiagnosisTypesCode];
