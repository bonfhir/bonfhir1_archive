/**
 * Concepts specifying file-level events for master files.  Used in HL7 Version 2 messaging in the MFI segment.
 * http://terminology.hl7.org/ValueSet/v2-0178
 */
export const Hl7VSFileLevelEventCodeCode = {
  /**
   * Replace current version of this master file with the version contained in this message
   */
  REP: "REP",

  /**
   * Change file records as defined in the record-level event codes for each record that follows
   */
  UPD: "UPD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSFileLevelEventCodeCode =
  typeof Hl7VSFileLevelEventCodeCode[keyof typeof Hl7VSFileLevelEventCodeCode];
