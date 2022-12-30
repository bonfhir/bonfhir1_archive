/**
 * Values for security metadata observation made about aspects of trust applicable to an IT resource (data, information object, service, or system capability). Trust applicable to IT resources is established and maintained in and among security domains, and may be comprised of observations about the domainâ€™s trust authority, trust framework, trust policy, trust interaction rules, means for assessing and monitoring adherence to trust policies, mechanisms that enforce trust, and quality and reliability measures of assurance in those mechanisms. \[Based on ISO IEC 10181-1 and NIST SP 800-63-2\]
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustObservationValue
 */
export const SecurityTrustObservationValueCode = {
  /**
   * security trust observation
   */
  SECTRSTOBV: "SECTRSTOBV",

  /**
   * trust accreditation observation
   */
  TRSTACCRDOBV: "TRSTACCRDOBV",

  /**
   * trust agreement observation
   */
  TRSTAGREOBV: "TRSTAGREOBV",

  /**
   * trust certificate observation
   */
  TRSTCERTOBV: "TRSTCERTOBV",

  /**
   * none supplied 5
   */
  TRSTFWKOBV: "TRSTFWKOBV",

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

  /**
   * none supplied 6
   */
  TRSTMECOBV: "TRSTMECOBV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustObservationValueCode =
  typeof SecurityTrustObservationValueCode[keyof typeof SecurityTrustObservationValueCode];
