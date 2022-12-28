/**
 * The type of participant.
 * http://hl7.org/fhir/ValueSet/report-participant-type
 */
export const TestReportParticipantTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestReportParticipantTypeCode =
  typeof TestReportParticipantTypeCode[keyof typeof TestReportParticipantTypeCode];
