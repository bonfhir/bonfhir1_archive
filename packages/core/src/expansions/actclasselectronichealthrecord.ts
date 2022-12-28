/**
 * A context that comprises all compositions. The EHR is an extract that includes the entire chart.

**NOTE:** In an exchange scenario, an EHR is a specialization of an extract.
 * http://terminology.hl7.org/ValueSet/v3-ActClassElectronicHealthRecord
 */
export const ActClassElectronicHealthRecordCode = {
  /**
   * electronic health record
   */
  EHR: "EHR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassElectronicHealthRecordCode =
  typeof ActClassElectronicHealthRecordCode[keyof typeof ActClassElectronicHealthRecordCode];
