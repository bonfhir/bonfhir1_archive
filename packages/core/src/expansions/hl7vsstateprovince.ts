/**
 * Concepts used to specify a state or province.  Used in Version 2 messaging in the Extended Composite ID with Check Digit (CX), Performing Person Time Stamp (PPN), and Extended Composite ID Number and Name for Persons (XCN) values as well as the Accident (ACC) segment.
 * http://terminology.hl7.org/ValueSet/v2-notAllCodes-0347
 */
export const Hl7VsStateProvinceCode = {
  /**
   * Alberta
   */
  "CA-AB": "CA-AB",

  /**
   * Michigan
   */
  "US-MI": "US-MI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VsStateProvinceCode =
  typeof Hl7VsStateProvinceCode[keyof typeof Hl7VsStateProvinceCode];
