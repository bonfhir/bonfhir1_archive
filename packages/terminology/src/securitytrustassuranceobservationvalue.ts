/**
 * Values for security metadata observation made about the digital quality or reliability of a trust assertion, activity, capability, information exchange, mechanism, process, or protocol.
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustAssuranceObservationValue
 */
export const SecurityTrustAssuranceObservationValueCode = {
  /**
   * trust assurance observation
   */
  TRSTLOAOBV: "TRSTLOAOBV",

  /**
   * authentication level of assurance value
   */
  LOAAN: "LOAAN",

  /**
   * low authentication level of assurance
   */
  LOAAN1: "LOAAN1",

  /**
   * basic authentication level of assurance
   */
  LOAAN2: "LOAAN2",

  /**
   * medium authentication level of assurance
   */
  LOAAN3: "LOAAN3",

  /**
   * high authentication level of assurance
   */
  LOAAN4: "LOAAN4",

  /**
   * authentication process level of assurance value
   */
  LOAAP: "LOAAP",

  /**
   * low authentication process level of assurance
   */
  LOAAP1: "LOAAP1",

  /**
   * basic authentication process level of assurance
   */
  LOAAP2: "LOAAP2",

  /**
   * medium authentication process level of assurance
   */
  LOAAP3: "LOAAP3",

  /**
   * high authentication process level of assurance
   */
  LOAAP4: "LOAAP4",

  /**
   * assertion level of assurance value
   */
  LOAAS: "LOAAS",

  /**
   * low assertion level of assurance
   */
  LOAAS1: "LOAAS1",

  /**
   * basic assertion level of assurance
   */
  LOAAS2: "LOAAS2",

  /**
   * medium assertion level of assurance
   */
  LOAAS3: "LOAAS3",

  /**
   * high assertion level of assurance
   */
  LOAAS4: "LOAAS4",

  /**
   * token and credential management level of assurance value)
   */
  LOACM: "LOACM",

  /**
   * low token and credential management level of assurance
   */
  LOACM1: "LOACM1",

  /**
   * basic token and credential management level of assurance
   */
  LOACM2: "LOACM2",

  /**
   * medium token and credential management level of assurance
   */
  LOACM3: "LOACM3",

  /**
   * high token and credential management level of assurance
   */
  LOACM4: "LOACM4",

  /**
   * identity proofing level of assurance
   */
  LOAID: "LOAID",

  /**
   * low identity proofing level of assurance
   */
  LOAID1: "LOAID1",

  /**
   * basic identity proofing level of assurance
   */
  LOAID2: "LOAID2",

  /**
   * medium identity proofing level of assurance
   */
  LOAID3: "LOAID3",

  /**
   * high identity proofing level of assurance
   */
  LOAID4: "LOAID4",

  /**
   * non-repudiation level of assurance value
   */
  LOANR: "LOANR",

  /**
   * low non-repudiation level of assurance
   */
  LOANR1: "LOANR1",

  /**
   * basic non-repudiation level of assurance
   */
  LOANR2: "LOANR2",

  /**
   * medium non-repudiation level of assurance
   */
  LOANR3: "LOANR3",

  /**
   * high non-repudiation level of assurance
   */
  LOANR4: "LOANR4",

  /**
   * remote access level of assurance value
   */
  LOARA: "LOARA",

  /**
   * low remote access level of assurance
   */
  LOARA1: "LOARA1",

  /**
   * basic remote access level of assurance
   */
  LOARA2: "LOARA2",

  /**
   * medium remote access level of assurance
   */
  LOARA3: "LOARA3",

  /**
   * high remote access level of assurance
   */
  LOARA4: "LOARA4",

  /**
   * token level of assurance value
   */
  LOATK: "LOATK",

  /**
   * low token level of assurance
   */
  LOATK1: "LOATK1",

  /**
   * basic token level of assurance
   */
  LOATK2: "LOATK2",

  /**
   * medium token level of assurance
   */
  LOATK3: "LOATK3",

  /**
   * high token level of assurance
   */
  LOATK4: "LOATK4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustAssuranceObservationValueCode =
  typeof SecurityTrustAssuranceObservationValueCode[keyof typeof SecurityTrustAssuranceObservationValueCode];
