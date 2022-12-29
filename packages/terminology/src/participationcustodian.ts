/**
 * An entity (person, organization or device) that is in charge of maintaining the information of this act (e.g., who maintains the report or the master service catalog item, etc.).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationCustodian
 */
export const ParticipationCustodianCode = {
  /**
   * custodian
   */
  custodian: "CST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationCustodianCode =
  typeof ParticipationCustodianCode[keyof typeof ParticipationCustodianCode];
