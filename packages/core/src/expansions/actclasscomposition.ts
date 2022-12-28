/**
 * A context representing a grouped commitment of information to the EHR. It is considered the unit of modification of the record, the unit of transmission in record extracts, and the unit of attestation by authorizing clinicians.

A composition represents part of a patient record originating from a single interaction between an authenticator and the record.

Unless otherwise stated all statements within a composition have the same authenticator, apply to the same patient and were recorded in a single session of use of a single application.

A composition contains organizers and entries.
 * http://terminology.hl7.org/ValueSet/v3-ActClassComposition
 */
export const ActClassCompositionCode = {
  /**
   * composition
   */
  COMPOSITION: "COMPOSITION",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassCompositionCode =
  typeof ActClassCompositionCode[keyof typeof ActClassCompositionCode];
