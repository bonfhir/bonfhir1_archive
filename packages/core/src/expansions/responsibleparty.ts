/**
 * The role played by a party who has legal responsibility for another party.
 * http://terminology.hl7.org/ValueSet/v3-ResponsibleParty
 */
export const ResponsiblePartyCode = {
  /**
   * responsible party
   */
  RESPRSN: "RESPRSN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResponsiblePartyCode =
  typeof ResponsiblePartyCode[keyof typeof ResponsiblePartyCode];
