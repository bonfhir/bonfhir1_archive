/**
 * **Description:** Conveyance of the type of information transfer protocol.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationTransferCode
 */
export const ActInformationTransferCodeCode = {
  /**
   * authorized information transfer
   */
  authorizedinformationtransfer: "INFAUT",

  /**
   * only on court order
   */
  onlyoncourtorder: "INFCRT",

  /**
   * only in an emergency
   */
  onlyinanemergency: "INFEMER",

  /**
   * regulatory information transfer
   */
  regulatoryinformationtransfer: "INFREG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationTransferCodeCode =
  typeof ActInformationTransferCodeCode[keyof typeof ActInformationTransferCodeCode];
