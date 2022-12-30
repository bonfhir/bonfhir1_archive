/**
 * **Description:** Conveyance of the type of information transfer protocol.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationTransferCode
 */
export const ActInformationTransferCodeCode = {
  /**
   * authorized information transfer
   */
  INFAUT: "INFAUT",

  /**
   * only on court order
   */
  INFCRT: "INFCRT",

  /**
   * only in an emergency
   */
  INFEMER: "INFEMER",

  /**
   * regulatory information transfer
   */
  INFREG: "INFREG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationTransferCodeCode =
  typeof ActInformationTransferCodeCode[keyof typeof ActInformationTransferCodeCode];
