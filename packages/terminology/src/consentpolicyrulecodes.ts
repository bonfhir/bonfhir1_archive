/**
 * This value set includes sample Regulatory consent policy types from the US and other regions.
 * http://terminology.hl7.org/ValueSet/consent-policy
 */
export const ConsentPolicyRuleCodesCode = {
  /**
   * Common Rule Informed Consent
   */
  cric: "cric",

  /**
   * Illinois Consent by Minors to Medical Procedures
   */
  "illinois-minor-procedure": "illinois-minor-procedure",

  /**
   * HIPAA Authorization
   */
  "hipaa-auth": "hipaa-auth",

  /**
   * HIPAA Notice of Privacy Practices
   */
  "hipaa-npp": "hipaa-npp",

  /**
   * HIPAA Restrictions
   */
  "hipaa-restrictions": "hipaa-restrictions",

  /**
   * HIPAA Research Authorization
   */
  "hipaa-research": "hipaa-research",

  /**
   * HIPAA Self-Pay Restriction
   */
  "hipaa-self-pay": "hipaa-self-pay",

  /**
   * Michigan MDHHS-5515 Consent to Share Behavioral Health Information for Care Coordination Purposes
   */
  "mdhhs-5515": "mdhhs-5515",

  /**
   * New York State Surgical and Invasive Procedure Protocol
   */
  nyssipp: "nyssipp",

  /**
   * VA Form 10-0484
   */
  "va-10-0484": "va-10-0484",

  /**
   * VA Form 10-0485
   */
  "va-10-0485": "va-10-0485",

  /**
   * VA Form 10-5345
   */
  "va-10-5345": "va-10-5345",

  /**
   * VA Form 10-5345a
   */
  "va-10-5345a": "va-10-5345a",

  /**
   * VA Form 10-5345a-MHV
   */
  "va-10-5345a-mhv": "va-10-5345a-mhv",

  /**
   * VA Form 10-10-10116
   */
  "va-10-10116": "va-10-10116",

  /**
   * VA Form 21-4142
   */
  "va-21-4142": "va-21-4142",

  /**
   * SSA Authorization to Disclose
   */
  "ssa-827": "ssa-827",

  /**
   * Michigan behavior and mental health consent
   */
  "dch-3927": "dch-3927",

  /**
   * Squaxin Indian behavioral health and HIPAA consent
   */
  squaxin: "squaxin",

  /**
   * NL LSP Permission
   */
  "nl-lsp": "nl-lsp",

  /**
   * AT ELGA Opt-in Consent
   */
  "at-elga": "at-elga",

  /**
   * HHS NIH HIPAA Research Authorization
   */
  "nih-hipaa": "nih-hipaa",

  /**
   * NCI Cancer Clinical Trial consent
   */
  nci: "nci",

  /**
   * NIH Global Rare Disease Patient Registry and Data Repository consent
   */
  "nih-grdr": "nih-grdr",

  /**
   * NIH Authorization for the Release of Medical Information
   */
  "nih-527": "nih-527",

  /**
   * Population origins and ancestry research consent
   */
  ga4gh: "ga4gh",

  /**
   * CH EPR Consent
   */
  "ch-epr": "ch-epr",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentPolicyRuleCodesCode =
  typeof ConsentPolicyRuleCodesCode[keyof typeof ConsentPolicyRuleCodesCode];
