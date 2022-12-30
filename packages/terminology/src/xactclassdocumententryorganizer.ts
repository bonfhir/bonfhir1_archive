/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActClassDocumentEntryOrganizer
 */
export const XActClassDocumentEntryOrganizerCode = {
  /**
   * battery
   */
  BATTERY: "BATTERY",

  /**
   * Cluster
   */
  CLUSTER: "CLUSTER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActClassDocumentEntryOrganizerCode =
  typeof XActClassDocumentEntryOrganizerCode[keyof typeof XActClassDocumentEntryOrganizerCode];
