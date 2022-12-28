/**
 * Value Set of codes that specify the information to which access is restricted.  Note that the new codes as of November 2018 have been temporarily loaded into the underlying V2 code system pending availability of the currently unavailable new tooling, at which time this value set will be retired and a value set based on the HL7 V3 ActCode code system will be used instead for this table, and the rendered URL will be valid at terminology.hl7.org.
 * http://terminology.hl7.org/ValueSet/v2-0717
 */
export const Hl7VSAccessRestrictionValueCode = {
  /**
   * personal de-identified information policy
   */
  PersDEID: "PersDEID",

  /**
   * All
   */
  ALL: "ALL",

  /**
   * All demographic data
   */
  DEM: "DEM",

  /**
   * Patient Location
   */
  LOC: "LOC",

  /**
   * Date of Birth
   */
  "PID-7": "PID-7",

  /**
   * Religion
   */
  "PID-17": "PID-17",

  /**
   * HIV status and results
   */
  HIV: "HIV",

  /**
   * Sexually transmitted diseases
   */
  STD: "STD",

  /**
   * Psychiatric Mental health
   */
  PSY: "PSY",

  /**
   * Drug
   */
  DRG: "DRG",

  /**
   * Sensitive medical data
   */
  SMD: "SMD",

  /**
   * None
   */
  NO: "NO",

  /**
   * Opt out all registries (HIPAA)
   */
  OO: "OO",

  /**
   * Opt in all registries (HIPAA)
   */
  OI: "OI",

  /**
   * jurisdictional information policy
   */
  JurisIP: "JurisIP",

  /**
   * jurisdictional controlled unclassified information policy
   */
  JurisCUI: "JurisCUI",

  /**
   * jurisdictional de-identified information policy
   */
  JurisDEID: "JurisDEID",

  /**
   * jurisdictional limited data set
   */
  JurisLDS: "JurisLDS",

  /**
   * jurisdictional non-sensitive information policy
   */
  JurisNSI: "JurisNSI",

  /**
   * jurisdictional public information policy
   */
  JurisPI: "JurisPI",

  /**
   * jurisdictional specified controlled unclassified information policy
   */
  "JurisSP-CUI": "JurisSP-CUI",

  /**
   * jurisdictional uncontrolled unclassified information policy
   */
  JurisUUI: "JurisUUI",

  /**
   * organizational information policy
   */
  OrgIP: "OrgIP",

  /**
   * organizational basic controlled unclassified information policy
   */
  OrgCUI: "OrgCUI",

  /**
   * organizational de-identified information policy
   */
  OrgDEID: "OrgDEID",

  /**
   * organizational limited data set information policy
   */
  OrgLDS: "OrgLDS",

  /**
   * organizational non-sensitive information policy
   */
  OrgNSI: "OrgNSI",

  /**
   * organizational public information policy
   */
  OrgPI: "OrgPI",

  /**
   * organizational specified controlled unclassified information policy
   */
  "OrgSP-CUI": "OrgSP-CUI",

  /**
   * organizational uncontrolled unclassified information policy
   */
  OrgUUI: "OrgUUI",

  /**
   * personal information policy
   */
  PersIP: "PersIP",

  /**
   * personal non-sensitive information policy
   */
  PersNSI: "PersNSI",

  /**
   * personal limited data set information policy
   */
  PersLDS: "PersLDS",

  /**
   * personal public information policy
   */
  PersPI: "PersPI",

  /**
   * grantor choice
   */
  GRANTORCHOICE: "GRANTORCHOICE",

  /**
   * implied consent
   */
  IMPLIED: "IMPLIED",

  /**
   * implied consent with opportunity to dissent
   */
  IMPLIEDD: "IMPLIEDD",

  /**
   * no consent
   */
  NOCONSENT: "NOCONSENT",

  /**
   * opt-in
   */
  OPTIN: "OPTIN",

  /**
   * opt-in with restrictions
   */
  OPTINR: "OPTINR",

  /**
   * opt-out
   */
  OPTOUT: "OPTOUT",

  /**
   * opt-out with exceptions
   */
  OPTOUTE: "OPTOUTE",

  /**
   * opt-in emergency only
   */
  EMRGONLY: "EMRGONLY",

  /**
   * notice of privacy practices
   */
  NOPP: "NOPP",

  /**
   * opt-out of personal information or effect collection in a registry or repository
   */
  OOC: "OOC",

  /**
   * opt-out of personal information or effect sharing via a registry or repository
   */
  OOS: "OOS",

  /**
   * opt-in to personal information or effect collection in a registry or repository
   */
  OIC: "OIC",

  /**
   * opt-in to personal information or effect sharing via a registry or repository
   */
  OIS: "OIS",

  /**
   * 42 CFR Part 2 consent directive
   */
  "42CFRPart2CD": "42CFRPart2CD",

  /**
   * HIPAA Authorization Consent Directive
   */
  HIPAAAuthCD: "HIPAAAuthCD",

  /**
   * HIPAA Consent Directive
   */
  HIPAAConsentCD: "HIPAAConsentCD",

  /**
   * HIPAA Right of Access Consent Directive
   */
  HIPAAROACD: "HIPAAROACD",

  /**
   * HIPAA Authorization for Disclosure for Research Consent Directive
   */
  HIPAAResearchAuthCD: "HIPAAResearchAuthCD",

  /**
   * Compound HIPAA Research Authorization and Informed Consent for Research
   */
  CompoundResearchCD: "CompoundResearchCD",

  /**
   * Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes
   */
  "MDHHS-5515": "MDHHS-5515",

  /**
   * GDPR Consent Directive
   */
  GDPRCD: "GDPRCD",

  /**
   * GDPR Research Consent Directive
   */
  GDPRResearchCD: "GDPRResearchCD",

  /**
   * 42 CFR Part 2)
   */
  "42CFRPart2": "42CFRPart2",

  /**
   * Common Rule
   */
  COMMONRULE: "COMMONRULE",

  /**
   * HIPAA notice of privacy practices
   */
  HIPAANOPP: "HIPAANOPP",

  /**
   * HIPAA psychotherapy notes
   */
  HIPAAPsyNotes: "HIPAAPsyNotes",

  /**
   * HIPAA self-pay
   */
  HIPAASelfPay: "HIPAASelfPay",

  /**
   * Title 38 Section 7332
   */
  Title38Section7332: "Title38Section7332",

  /**
   * HIPAA Consent
   */
  HIPAAConsent: "HIPAAConsent",

  /**
   * HIPAA Authorization for Disclosure
   */
  HIPAAAuth: "HIPAAAuth",

  /**
   * HIPAA Right of Access
   */
  HIPAAROA: "HIPAAROA",

  /**
   * GDPR Consent
   */
  GDPRCONSENT: "GDPRCONSENT",

  /**
   * GDPR contract
   */
  GDPRCONTRACT: "GDPRCONTRACT",

  /**
   * GDPR health or social system management
   */
  GDPRHLTHSOCSY: "GDPRHLTHSOCSY",

  /**
   * GDPR legal claim
   */
  GDPRLEGALCLAIM: "GDPRLEGALCLAIM",

  /**
   * GDPR legal obligation
   */
  GDPRLEGALOBL: "GDPRLEGALOBL",

  /**
   * GDPR legitimate interest
   */
  GDPRLEGITINTEREST: "GDPRLEGITINTEREST",

  /**
   * GDPR public health
   */
  GDPRPUBLICHEALTH: "GDPRPUBLICHEALTH",

  /**
   * GDPR public interest
   */
  GDPRPUBLICINTEREST: "GDPRPUBLICINTEREST",

  /**
   * GDPR research
   */
  GDPRRESEARCH: "GDPRRESEARCH",

  /**
   * GDPR vital interest
   */
  GDPRVITALINTEREST: "GDPRVITALINTEREST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAccessRestrictionValueCode =
  typeof Hl7VSAccessRestrictionValueCode[keyof typeof Hl7VSAccessRestrictionValueCode];
