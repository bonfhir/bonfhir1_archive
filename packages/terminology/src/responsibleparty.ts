/**
 * The role played by a party who has legal responsibility for another party.
 * http://terminology.hl7.org/ValueSet/v3-ResponsibleParty
 */
export const ResponsiblePartyCode = {
  /**
   * responsible party
   */
  RESPRSN: "RESPRSN",

  /**
   * executor of estate
   */
  EXCEST: "EXCEST",

  /**
   * guardian ad lidem
   */
  GUADLTM: "GUADLTM",

  /**
   * guardian
   */
  GUARD: "GUARD",

  /**
   * power of attorney
   */
  POWATT: "POWATT",

  /**
   * durable power of attorney
   */
  DPOWATT: "DPOWATT",

  /**
   * healthcare power of attorney
   */
  HPOWATT: "HPOWATT",

  /**
   * special power of attorney
   */
  SPOWATT: "SPOWATT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResponsiblePartyCode =
  typeof ResponsiblePartyCode[keyof typeof ResponsiblePartyCode];
