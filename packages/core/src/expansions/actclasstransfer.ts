/**
 * **Definition:** The act of transferring information without the intent of imparting understanding about a topic to the subject that is the recipient or holder of the transferred information where the participation association must be RCV or HLD.
 * http://terminology.hl7.org/ValueSet/v3-ActClassTransfer
 */
export const ActClassTransferCode = {
  /**
   * transfer
   */
  TRFR: "TRFR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassTransferCode =
  typeof ActClassTransferCode[keyof typeof ActClassTransferCode];
