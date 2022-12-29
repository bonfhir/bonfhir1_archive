/**
 * The role played by a party who has legal responsibility for another party.
 * http://terminology.hl7.org/ValueSet/v3-ResponsibleParty
 */
export const ResponsiblePartyCode = {
  /**
   * responsible party
   */
  responsibleparty: "RESPRSN",

  /**
   * executor of estate
   */
  executorofestate: "EXCEST",

  /**
   * guardian ad lidem
   */
  guardianadlidem: "GUADLTM",

  /**
   * guardian
   */
  guardian: "GUARD",

  /**
   * power of attorney
   */
  powerofattorney: "POWATT",

  /**
   * durable power of attorney
   */
  durablepowerofattorney: "DPOWATT",

  /**
   * healthcare power of attorney
   */
  healthcarepowerofattorney: "HPOWATT",

  /**
   * special power of attorney
   */
  specialpowerofattorney: "SPOWATT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResponsiblePartyCode =
  typeof ResponsiblePartyCode[keyof typeof ResponsiblePartyCode];
