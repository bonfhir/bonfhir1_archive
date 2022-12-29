/**
 * This value set includes sample Contract Signer Type codes.
 * http://terminology.hl7.org/ValueSet/contract-signer-type
 */
export const ContractSignerTypeCodesCode = {
  /**
   * Amender
   */
  Amender: "AMENDER",

  /**
   * Authenticator
   */
  Authenticator: "AUTHN",

  /**
   * Author
   */
  Author: "AUT",

  /**
   * Affiliate
   */
  Affiliate: "AFFL",

  /**
   * Agent
   */
  Agent: "AGNT",

  /**
   * Assigned Entity
   */
  AssignedEntity: "ASSIGNED",

  /**
   * Citizen
   */
  Citizen: "CIT",

  /**
   * Claimant
   */
  Claimant: "CLAIMANT",

  /**
   * Co-Author
   */
  CoAuthor: "COAUTH",

  /**
   * Consenter
   */
  Consenter: "CONSENTER",

  /**
   * Consent Witness
   */
  ConsentWitness: "CONSWIT",

  /**
   * Contact
   */
  Contact: "CONT",

  /**
   * Co-Participant
   */
  CoParticipant: "COPART",

  /**
   * Covered Party
   */
  CoveredParty: "COVPTY",

  /**
   * Delegatee
   */
  Delegatee: "DELEGATEE",

  /**
   * Delegator
   */
  Delegator: "delegator",

  /**
   * Dependent
   */
  Dependent: "DEPEND",

  /**
   * Durable Power of Attorney
   */
  DurablePowerofAttorney: "DPOWATT",

  /**
   * Emergency Contact
   */
  EmergencyContact: "EMGCON",

  /**
   * Event Witness
   */
  EventWitness: "EVTWIT",

  /**
   * Executor of Estate
   */
  ExecutorofEstate: "EXCEST",

  /**
   * Grantee
   */
  Grantee: "GRANTEE",

  /**
   * Grantor
   */
  Grantor: "GRANTOR",

  /**
   * Guarantor
   */
  Guarantor: "GUAR",

  /**
   * Guardian
   */
  Guardian: "GUARD",

  /**
   * Guardian ad lidem
   */
  Guardianadlidem: "GUADLTM",

  /**
   * Informant
   */
  Informant: "INF",

  /**
   * Interpreter
   */
  Interpreter: "INTPRT",

  /**
   * Investigation Subject
   */
  InvestigationSubject: "INSBJ",

  /**
   * Healthcare Power of Attorney
   */
  HealthcarePowerofAttorney: "HPOWATT",

  /**
   * Healthcare Provider
   */
  HealthcareProvider: "HPROV",

  /**
   * Legal Authenticator
   */
  LegalAuthenticator: "LEGAUTHN",

  /**
   * Named Insured
   */
  NamedInsured: "NMDINS",

  /**
   * Next of Kin
   */
  NextofKin: "NOK",

  /**
   * Notary
   */
  Notary: "NOTARY",

  /**
   * Patient
   */
  Patient: "PAT",

  /**
   * Power of Attorney
   */
  PowerofAttorney: "POWATT",

  /**
   * Primary Author
   */
  PrimaryAuthor: "PRIMAUTH",

  /**
   * Primary Responsible Party
   */
  PrimaryResponsibleParty: "PRIRECIP",

  /**
   * Recipient
   */
  Recipient: "RECIP",

  /**
   * Responsible Party
   */
  ResponsibleParty: "RESPRSN",

  /**
   * Reviewer
   */
  Reviewer: "REVIEWER",

  /**
   * Transcriber
   */
  Transcriber: "TRANS",

  /**
   * Source
   */
  Source: "SOURCE",

  /**
   * Special Power of Attorney
   */
  SpecialPowerofAttorney: "SPOWATT",

  /**
   * Validator
   */
  Validator: "VALID",

  /**
   * Verifier
   */
  Verifier: "VERF",

  /**
   * Witness
   */
  Witness: "WIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractSignerTypeCodesCode =
  typeof ContractSignerTypeCodesCode[keyof typeof ContractSignerTypeCodesCode];
