/**
 * This value set includes sample Contract Signer Type codes.
 * http://terminology.hl7.org/ValueSet/contract-signer-type
 */
export const ContractSignerTypeCodesCode = {
  /**
   * Amender
   */
  AMENDER: "AMENDER",

  /**
   * Authenticator
   */
  AUTHN: "AUTHN",

  /**
   * Author
   */
  AUT: "AUT",

  /**
   * Affiliate
   */
  AFFL: "AFFL",

  /**
   * Agent
   */
  AGNT: "AGNT",

  /**
   * Assigned Entity
   */
  ASSIGNED: "ASSIGNED",

  /**
   * Citizen
   */
  CIT: "CIT",

  /**
   * Claimant
   */
  CLAIMANT: "CLAIMANT",

  /**
   * Co-Author
   */
  COAUTH: "COAUTH",

  /**
   * Consenter
   */
  CONSENTER: "CONSENTER",

  /**
   * Consent Witness
   */
  CONSWIT: "CONSWIT",

  /**
   * Contact
   */
  CONT: "CONT",

  /**
   * Co-Participant
   */
  COPART: "COPART",

  /**
   * Covered Party
   */
  COVPTY: "COVPTY",

  /**
   * Delegatee
   */
  DELEGATEE: "DELEGATEE",

  /**
   * Delegator
   */
  delegator: "delegator",

  /**
   * Dependent
   */
  DEPEND: "DEPEND",

  /**
   * Durable Power of Attorney
   */
  DPOWATT: "DPOWATT",

  /**
   * Emergency Contact
   */
  EMGCON: "EMGCON",

  /**
   * Event Witness
   */
  EVTWIT: "EVTWIT",

  /**
   * Executor of Estate
   */
  EXCEST: "EXCEST",

  /**
   * Grantee
   */
  GRANTEE: "GRANTEE",

  /**
   * Grantor
   */
  GRANTOR: "GRANTOR",

  /**
   * Guarantor
   */
  GUAR: "GUAR",

  /**
   * Guardian
   */
  GUARD: "GUARD",

  /**
   * Guardian ad lidem
   */
  GUADLTM: "GUADLTM",

  /**
   * Informant
   */
  INF: "INF",

  /**
   * Interpreter
   */
  INTPRT: "INTPRT",

  /**
   * Investigation Subject
   */
  INSBJ: "INSBJ",

  /**
   * Healthcare Power of Attorney
   */
  HPOWATT: "HPOWATT",

  /**
   * Healthcare Provider
   */
  HPROV: "HPROV",

  /**
   * Legal Authenticator
   */
  LEGAUTHN: "LEGAUTHN",

  /**
   * Named Insured
   */
  NMDINS: "NMDINS",

  /**
   * Next of Kin
   */
  NOK: "NOK",

  /**
   * Notary
   */
  NOTARY: "NOTARY",

  /**
   * Patient
   */
  PAT: "PAT",

  /**
   * Power of Attorney
   */
  POWATT: "POWATT",

  /**
   * Primary Author
   */
  PRIMAUTH: "PRIMAUTH",

  /**
   * Primary Responsible Party
   */
  PRIRECIP: "PRIRECIP",

  /**
   * Recipient
   */
  RECIP: "RECIP",

  /**
   * Responsible Party
   */
  RESPRSN: "RESPRSN",

  /**
   * Reviewer
   */
  REVIEWER: "REVIEWER",

  /**
   * Transcriber
   */
  TRANS: "TRANS",

  /**
   * Source
   */
  SOURCE: "SOURCE",

  /**
   * Special Power of Attorney
   */
  SPOWATT: "SPOWATT",

  /**
   * Validator
   */
  VALID: "VALID",

  /**
   * Verifier
   */
  VERF: "VERF",

  /**
   * Witness
   */
  WIT: "WIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractSignerTypeCodesCode =
  typeof ContractSignerTypeCodesCode[keyof typeof ContractSignerTypeCodesCode];
