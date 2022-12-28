/**
 * The type of relationship between reports.
 * http://hl7.org/fhir/ValueSet/report-relation-type
 */
export const ReportRelationshipTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReportRelationshipTypeCode =
  typeof ReportRelationshipTypeCode[keyof typeof ReportRelationshipTypeCode];
