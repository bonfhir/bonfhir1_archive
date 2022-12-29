/**
 * Value Set of codes that specify the information to which access is restricted.  Note that the new codes as of November 2018 have been temporarily loaded into the underlying V2 code system pending availability of the currently unavailable new tooling, at which time this value set will be retired and a value set based on the HL7 V3 ActCode code system will be used instead for this table, and the rendered URL will be valid at terminology.hl7.org.
 * http://terminology.hl7.org/ValueSet/v2-0717
 */
export const Hl7VSAccessRestrictionValueCode = {
  /**
   * personal de-identified information policy
   */
  personaldeidentifiedinformationpolicy: "PersDEID",

  /**
   * All
   */
  All: "ALL",

  /**
   * All demographic data
   */
  Alldemographicdata: "DEM",

  /**
   * Patient Location
   */
  PatientLocation: "LOC",

  /**
   * Date of Birth
   */
  DateofBirth: "PID-7",

  /**
   * Religion
   */
  Religion: "PID-17",

  /**
   * HIV status and results
   */
  HIVstatusandresults: "HIV",

  /**
   * Sexually transmitted diseases
   */
  Sexuallytransmitteddiseases: "STD",

  /**
   * Psychiatric Mental health
   */
  PsychiatricMentalhealth: "PSY",

  /**
   * Drug
   */
  Drug: "DRG",

  /**
   * Sensitive medical data
   */
  Sensitivemedicaldata: "SMD",

  /**
   * None
   */
  None: "NO",

  /**
   * Opt out all registries (HIPAA)
   */
  OptoutallregistriesHIPAA: "OO",

  /**
   * Opt in all registries (HIPAA)
   */
  OptinallregistriesHIPAA: "OI",

  /**
   * jurisdictional information policy
   */
  jurisdictionalinformationpolicy: "JurisIP",

  /**
   * jurisdictional controlled unclassified information policy
   */
  jurisdictionalcontrolledunclassifiedinformationpolicy: "JurisCUI",

  /**
   * jurisdictional de-identified information policy
   */
  jurisdictionaldeidentifiedinformationpolicy: "JurisDEID",

  /**
   * jurisdictional limited data set
   */
  jurisdictionallimiteddataset: "JurisLDS",

  /**
   * jurisdictional non-sensitive information policy
   */
  jurisdictionalnonsensitiveinformationpolicy: "JurisNSI",

  /**
   * jurisdictional public information policy
   */
  jurisdictionalpublicinformationpolicy: "JurisPI",

  /**
   * jurisdictional specified controlled unclassified information policy
   */
  jurisdictionalspecifiedcontrolledunclassifiedinformationpolicy: "JurisSP-CUI",

  /**
   * jurisdictional uncontrolled unclassified information policy
   */
  jurisdictionaluncontrolledunclassifiedinformationpolicy: "JurisUUI",

  /**
   * organizational information policy
   */
  organizationalinformationpolicy: "OrgIP",

  /**
   * organizational basic controlled unclassified information policy
   */
  organizationalbasiccontrolledunclassifiedinformationpolicy: "OrgCUI",

  /**
   * organizational de-identified information policy
   */
  organizationaldeidentifiedinformationpolicy: "OrgDEID",

  /**
   * organizational limited data set information policy
   */
  organizationallimiteddatasetinformationpolicy: "OrgLDS",

  /**
   * organizational non-sensitive information policy
   */
  organizationalnonsensitiveinformationpolicy: "OrgNSI",

  /**
   * organizational public information policy
   */
  organizationalpublicinformationpolicy: "OrgPI",

  /**
   * organizational specified controlled unclassified information policy
   */
  organizationalspecifiedcontrolledunclassifiedinformationpolicy: "OrgSP-CUI",

  /**
   * organizational uncontrolled unclassified information policy
   */
  organizationaluncontrolledunclassifiedinformationpolicy: "OrgUUI",

  /**
   * personal information policy
   */
  personalinformationpolicy: "PersIP",

  /**
   * personal non-sensitive information policy
   */
  personalnonsensitiveinformationpolicy: "PersNSI",

  /**
   * personal limited data set information policy
   */
  personallimiteddatasetinformationpolicy: "PersLDS",

  /**
   * personal public information policy
   */
  personalpublicinformationpolicy: "PersPI",

  /**
   * grantor choice
   */
  grantorchoice: "GRANTORCHOICE",

  /**
   * implied consent
   */
  impliedconsent: "IMPLIED",

  /**
   * implied consent with opportunity to dissent
   */
  impliedconsentwithopportunitytodissent: "IMPLIEDD",

  /**
   * no consent
   */
  noconsent: "NOCONSENT",

  /**
   * opt-in
   */
  optin: "OPTIN",

  /**
   * opt-in with restrictions
   */
  optinwithrestrictions: "OPTINR",

  /**
   * opt-out
   */
  optout: "OPTOUT",

  /**
   * opt-out with exceptions
   */
  optoutwithexceptions: "OPTOUTE",

  /**
   * opt-in emergency only
   */
  optinemergencyonly: "EMRGONLY",

  /**
   * notice of privacy practices
   */
  noticeofprivacypractices: "NOPP",

  /**
   * opt-out of personal information or effect collection in a registry or repository
   */
  optoutofpersonalinformationoreffectcollectioninaregistryorrepository: "OOC",

  /**
   * opt-out of personal information or effect sharing via a registry or repository
   */
  optoutofpersonalinformationoreffectsharingviaaregistryorrepository: "OOS",

  /**
   * opt-in to personal information or effect collection in a registry or repository
   */
  optintopersonalinformationoreffectcollectioninaregistryorrepository: "OIC",

  /**
   * opt-in to personal information or effect sharing via a registry or repository
   */
  optintopersonalinformationoreffectsharingviaaregistryorrepository: "OIS",

  /**
   * 42 CFR Part 2 consent directive
   */
  FortyTwoCFRPart2consentdirective: "42CFRPart2CD",

  /**
   * HIPAA Authorization Consent Directive
   */
  HIPAAAuthorizationConsentDirective: "HIPAAAuthCD",

  /**
   * HIPAA Consent Directive
   */
  HIPAAConsentDirective: "HIPAAConsentCD",

  /**
   * HIPAA Right of Access Consent Directive
   */
  HIPAARightofAccessConsentDirective: "HIPAAROACD",

  /**
   * HIPAA Authorization for Disclosure for Research Consent Directive
   */
  HIPAAAuthorizationforDisclosureforResearchConsentDirective:
    "HIPAAResearchAuthCD",

  /**
   * Compound HIPAA Research Authorization and Informed Consent for Research
   */
  CompoundHIPAAResearchAuthorizationandInformedConsentforResearch:
    "CompoundResearchCD",

  /**
   * Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes
   */
  MichiganConsenttoShareBehavioralHealthInformationforCareCoordinationPurposes:
    "MDHHS-5515",

  /**
   * GDPR Consent Directive
   */
  GDPRConsentDirective: "GDPRCD",

  /**
   * GDPR Research Consent Directive
   */
  GDPRResearchConsentDirective: "GDPRResearchCD",

  /**
   * 42 CFR Part 2)
   */
  FortyTwoCFRPart2: "42CFRPart2",

  /**
   * Common Rule
   */
  CommonRule: "COMMONRULE",

  /**
   * HIPAA notice of privacy practices
   */
  HIPAAnoticeofprivacypractices: "HIPAANOPP",

  /**
   * HIPAA psychotherapy notes
   */
  HIPAApsychotherapynotes: "HIPAAPsyNotes",

  /**
   * HIPAA self-pay
   */
  HIPAAselfpay: "HIPAASelfPay",

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
  HIPAAAuthorizationforDisclosure: "HIPAAAuth",

  /**
   * HIPAA Right of Access
   */
  HIPAARightofAccess: "HIPAAROA",

  /**
   * GDPR Consent
   */
  GDPRConsent: "GDPRCONSENT",

  /**
   * GDPR contract
   */
  GDPRcontract: "GDPRCONTRACT",

  /**
   * GDPR health or social system management
   */
  GDPRhealthorsocialsystemmanagement: "GDPRHLTHSOCSY",

  /**
   * GDPR legal claim
   */
  GDPRlegalclaim: "GDPRLEGALCLAIM",

  /**
   * GDPR legal obligation
   */
  GDPRlegalobligation: "GDPRLEGALOBL",

  /**
   * GDPR legitimate interest
   */
  GDPRlegitimateinterest: "GDPRLEGITINTEREST",

  /**
   * GDPR public health
   */
  GDPRpublichealth: "GDPRPUBLICHEALTH",

  /**
   * GDPR public interest
   */
  GDPRpublicinterest: "GDPRPUBLICINTEREST",

  /**
   * GDPR research
   */
  GDPRresearch: "GDPRRESEARCH",

  /**
   * GDPR vital interest
   */
  GDPRvitalinterest: "GDPRVITALINTEREST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAccessRestrictionValueCode =
  typeof Hl7VSAccessRestrictionValueCode[keyof typeof Hl7VSAccessRestrictionValueCode];
