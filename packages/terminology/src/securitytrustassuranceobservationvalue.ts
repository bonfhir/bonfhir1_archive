/**
 * Values for security metadata observation made about the digital quality or reliability of a trust assertion, activity, capability, information exchange, mechanism, process, or protocol.
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustAssuranceObservationValue
 */
export const SecurityTrustAssuranceObservationValueCode = {
  /**
   * trust assurance observation
   */
  trustassuranceobservation: "TRSTLOAOBV",

  /**
   * authentication level of assurance value
   */
  authenticationlevelofassurancevalue: "LOAAN",

  /**
   * low authentication level of assurance
   */
  lowauthenticationlevelofassurance: "LOAAN1",

  /**
   * basic authentication level of assurance
   */
  basicauthenticationlevelofassurance: "LOAAN2",

  /**
   * medium authentication level of assurance
   */
  mediumauthenticationlevelofassurance: "LOAAN3",

  /**
   * high authentication level of assurance
   */
  highauthenticationlevelofassurance: "LOAAN4",

  /**
   * authentication process level of assurance value
   */
  authenticationprocesslevelofassurancevalue: "LOAAP",

  /**
   * low authentication process level of assurance
   */
  lowauthenticationprocesslevelofassurance: "LOAAP1",

  /**
   * basic authentication process level of assurance
   */
  basicauthenticationprocesslevelofassurance: "LOAAP2",

  /**
   * medium authentication process level of assurance
   */
  mediumauthenticationprocesslevelofassurance: "LOAAP3",

  /**
   * high authentication process level of assurance
   */
  highauthenticationprocesslevelofassurance: "LOAAP4",

  /**
   * assertion level of assurance value
   */
  assertionlevelofassurancevalue: "LOAAS",

  /**
   * low assertion level of assurance
   */
  lowassertionlevelofassurance: "LOAAS1",

  /**
   * basic assertion level of assurance
   */
  basicassertionlevelofassurance: "LOAAS2",

  /**
   * medium assertion level of assurance
   */
  mediumassertionlevelofassurance: "LOAAS3",

  /**
   * high assertion level of assurance
   */
  highassertionlevelofassurance: "LOAAS4",

  /**
   * token and credential management level of assurance value)
   */
  tokenandcredentialmanagementlevelofassurancevalue: "LOACM",

  /**
   * low token and credential management level of assurance
   */
  lowtokenandcredentialmanagementlevelofassurance: "LOACM1",

  /**
   * basic token and credential management level of assurance
   */
  basictokenandcredentialmanagementlevelofassurance: "LOACM2",

  /**
   * medium token and credential management level of assurance
   */
  mediumtokenandcredentialmanagementlevelofassurance: "LOACM3",

  /**
   * high token and credential management level of assurance
   */
  hightokenandcredentialmanagementlevelofassurance: "LOACM4",

  /**
   * identity proofing level of assurance
   */
  identityproofinglevelofassurance: "LOAID",

  /**
   * low identity proofing level of assurance
   */
  lowidentityproofinglevelofassurance: "LOAID1",

  /**
   * basic identity proofing level of assurance
   */
  basicidentityproofinglevelofassurance: "LOAID2",

  /**
   * medium identity proofing level of assurance
   */
  mediumidentityproofinglevelofassurance: "LOAID3",

  /**
   * high identity proofing level of assurance
   */
  highidentityproofinglevelofassurance: "LOAID4",

  /**
   * non-repudiation level of assurance value
   */
  nonrepudiationlevelofassurancevalue: "LOANR",

  /**
   * low non-repudiation level of assurance
   */
  lownonrepudiationlevelofassurance: "LOANR1",

  /**
   * basic non-repudiation level of assurance
   */
  basicnonrepudiationlevelofassurance: "LOANR2",

  /**
   * medium non-repudiation level of assurance
   */
  mediumnonrepudiationlevelofassurance: "LOANR3",

  /**
   * high non-repudiation level of assurance
   */
  highnonrepudiationlevelofassurance: "LOANR4",

  /**
   * remote access level of assurance value
   */
  remoteaccesslevelofassurancevalue: "LOARA",

  /**
   * low remote access level of assurance
   */
  lowremoteaccesslevelofassurance: "LOARA1",

  /**
   * basic remote access level of assurance
   */
  basicremoteaccesslevelofassurance: "LOARA2",

  /**
   * medium remote access level of assurance
   */
  mediumremoteaccesslevelofassurance: "LOARA3",

  /**
   * high remote access level of assurance
   */
  highremoteaccesslevelofassurance: "LOARA4",

  /**
   * token level of assurance value
   */
  tokenlevelofassurancevalue: "LOATK",

  /**
   * low token level of assurance
   */
  lowtokenlevelofassurance: "LOATK1",

  /**
   * basic token level of assurance
   */
  basictokenlevelofassurance: "LOATK2",

  /**
   * medium token level of assurance
   */
  mediumtokenlevelofassurance: "LOATK3",

  /**
   * high token level of assurance
   */
  hightokenlevelofassurance: "LOATK4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustAssuranceObservationValueCode =
  typeof SecurityTrustAssuranceObservationValueCode[keyof typeof SecurityTrustAssuranceObservationValueCode];
