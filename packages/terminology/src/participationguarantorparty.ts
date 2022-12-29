/**
 * The target person or organization contractually recognized by the issuer as a participant who has assumed fiscal responsibility for another personaTMs financial obligations by guaranteeing to pay for amounts owed to a particular account

*Example:*The subscriber of the patientaTMs health insurance policy signs a contract with the provider to be fiscally responsible for the patient billing account balance amount owed.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationGuarantorParty
 */
export const ParticipationGuarantorPartyCode = {
  /**
   * guarantor party
   */
  guarantorparty: "GUAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationGuarantorPartyCode =
  typeof ParticipationGuarantorPartyCode[keyof typeof ParticipationGuarantorPartyCode];
