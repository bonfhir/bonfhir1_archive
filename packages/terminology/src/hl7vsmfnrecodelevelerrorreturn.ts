/**
 * Concepts which code status values for requested master file record update operations.
 * http://terminology.hl7.org/ValueSet/v2-0181
 */
export const Hl7VSMfnRecodeLevelErrorReturnCode = {
  /**
   * Successful posting of the record defined by the MFE segment
   */
  SuccessfulpostingoftherecorddefinedbytheMFEsegment: "S",

  /**
   * Unsuccessful posting of the record defined by the MFE segment
   */
  UnsuccessfulpostingoftherecorddefinedbytheMFEsegment: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMfnRecodeLevelErrorReturnCode =
  typeof Hl7VSMfnRecodeLevelErrorReturnCode[keyof typeof Hl7VSMfnRecodeLevelErrorReturnCode];
