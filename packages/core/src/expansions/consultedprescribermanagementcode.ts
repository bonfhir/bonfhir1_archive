/**
 * Consulted prescriber, therapy confirmed
 * http://terminology.hl7.org/ValueSet/v3-ConsultedPrescriberManagementCode
 */
export const ConsultedPrescriberManagementCodeCode = {
  /**
   * Consulted Prescriber
   */
  "5": "5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsultedPrescriberManagementCodeCode =
  typeof ConsultedPrescriberManagementCodeCode[keyof typeof ConsultedPrescriberManagementCodeCode];
