/**
 * An agreement of obligation between two or more parties that is subject to contractual law and enforcement.
 * http://terminology.hl7.org/ValueSet/v3-ActClassContract
 */
export const ActClassContractCode = {
  /**
   * contract
   */
  CNTRCT: "CNTRCT",

  /**
   * financial contract
   */
  FCNTRCT: "FCNTRCT",

  /**
   * coverage
   */
  COV: "COV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassContractCode =
  typeof ActClassContractCode[keyof typeof ActClassContractCode];
