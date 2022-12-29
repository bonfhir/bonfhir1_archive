/**
 * ActPrivacyPolicyType codes support the designation of the 1..\* policies that are applicable to an Act such as a Consent Directive, a Role such as a VIP Patient, or an Entity such as a patient who is a minor. 1..\* ActPrivacyPolicyType values may be associated with an Act or Role to indicate the policies that govern the assignment of an Act or Role confidentialityCode. Use of multiple ActPrivacyPolicyType values enables fine grain specification of applicable policies, but must be carefully assigned to ensure cogency and avoid creation of conflicting policy mandates. Statutory title may be named in the ActClassPolicy Act Act.title to specify which privacy policy is being referenced.
 * http://terminology.hl7.org/ValueSet/v3-ActPrivacyPolicy
 */
export const ActPrivacyPolicyCode = {
  /**
   * ActPrivacyPolicy
   */
  ActPrivacyPolicy: "_ActPrivacyPolicy",

  /**
   * ActConsentDirective
   */
  ActConsentDirective: "_ActConsentDirective",

  /**
   * emergency only
   */
  emergencyonly: "EMRGONLY",

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
   * notice of privacy practices
   */
  noticeofprivacypractices: "NOPP",

  /**
   * opt-in
   */
  optin: "OPTIN",

  /**
   * opt-in with restrictions
   */
  optinwithrestrictions: "OPTINR",

  /**
   * op-out
   */
  opout: "OPTOUT",

  /**
   * opt-out with exceptions
   */
  optoutwithexceptions: "OPTOUTE",

  /**
   * ActPrivacyLaw
   */
  ActPrivacyLaw: "_ActPrivacyLaw",

  /**
   * General Data Protection Regulation
   */
  GeneralDataProtectionRegulation: "_ActGDPRPrivacyLaw",

  /**
   * GDPR Consent
   */
  GDPRConsent: "GDPRCONSENT",

  /**
   * _ActUSPrivacyLaw
   */
  _ActUSPrivacyLaw: "_ActUSPrivacyLaw",

  /**
   * 42 CFR Part2
   */
  FortyTwoCFRPart2: "42CFRPart2",

  /**
   * Common Rule
   */
  CommonRule: "CommonRule",

  /**
   * HIPAA Authorization for Disclosure
   */
  HIPAAAuthorizationforDisclosure: "HIPAAAuth",

  /**
   * HIPAA Consent
   */
  HIPAAConsent: "HIPAAConsent",

  /**
   * HIPAA notice of privacy practices
   */
  HIPAAnoticeofprivacypractices: "HIPAANOPP",

  /**
   * HIPAA psychotherapy notes
   */
  HIPAApsychotherapynotes: "HIPAAPsyNotes",

  /**
   * HIPAA Right of Access
   */
  HIPAARightofAccess: "HIPAAROA",

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
  HIPAAConsent: "a) HIPAAConsent",

  /**
   * InformationSensitivityPolicy
   */
  InformationSensitivityPolicy: "_InformationSensitivityPolicy",

  /**
   * ActInformationSensitivityPolicy
   */
  ActInformationSensitivityPolicy: "_ActInformationSensitivityPolicy",

  /**
   * substance abuse information sensitivity
   */
  substanceabuseinformationsensitivity: "ETH",

  /**
   * genetic disease information sensitivity
   */
  geneticdiseaseinformationsensitivity: "GDIS",

  /**
   * HIV/AIDS information sensitivity
   */
  HIVAIDSinformationsensitivity: "HIV",

  /**
   * military sexual trauma information sensitivity
   */
  militarysexualtraumainformationsensitivity: "MST",

  /**
   * pregnancy information sensitivity
   */
  pregnancyinformationsensitivity: "PREGNANT",

  /**
   * sickle cell anemia information sensitivity
   */
  sicklecellanemiainformationsensitivity: "SCA",

  /**
   * sexual assault, abuse, or domestic violence information sensitivity
   */
  sexualassaultabuseordomesticviolenceinformationsensitivity: "SDV",

  /**
   * sexuality and reproductive health information sensitivity
   */
  sexualityandreproductivehealthinformationsensitivity: "SEX",

  /**
   * specially protected information sensitivity
   */
  speciallyprotectedinformationsensitivity: "SPI",

  /**
   * behavioral health information sensitivity
   */
  behavioralhealthinformationsensitivity: "BH",

  /**
   * cognitive disability information sensitivity
   */
  cognitivedisabilityinformationsensitivity: "COGN",

  /**
   * developmental disability information sensitivity
   */
  developmentaldisabilityinformationsensitivity: "DVD",

  /**
   * emotional disturbance information sensitivity
   */
  emotionaldisturbanceinformationsensitivity: "EMOTDIS",

  /**
   * mental health information sensitivity
   */
  mentalhealthinformationsensitivity: "MH",

  /**
   * psychiatry disorder information sensitivity
   */
  psychiatrydisorderinformationsensitivity: "PSY",

  /**
   * psychotherapy note information sensitivity
   */
  psychotherapynoteinformationsensitivity: "PSYTHPN",

  /**
   * substance use disorder information sensitivity
   */
  substanceusedisorderinformationsensitivity: "SUD",

  /**
   * alcohol use disorder information sensitivity
   */
  alcoholusedisorderinformationsensitivity: "ETHUD",

  /**
   * opioid use disorder information sensitivity
   */
  opioidusedisorderinformationsensitivity: "OPIOIDUD",

  /**
   * sexually transmitted disease information sensitivity
   */
  sexuallytransmitteddiseaseinformationsensitivity: "STD",

  /**
   * taboo
   */
  taboo: "TBOO",

  /**
   * violence information sensitivity
   */
  violenceinformationsensitivity: "VIO",

  /**
   * Identifier Sensitivity
   */
  IdentifierSensitivity: "IDS",

  /**
   * sickle cell
   */
  sicklecell: "SICKLE",

  /**
   * EntityInformationSensitivityPolicy
   */
  EntityInformationSensitivityPolicy: "_EntitySensitivityPolicyType",

  /**
   * all demographic information sensitivity
   */
  alldemographicinformationsensitivity: "DEMO",

  /**
   * date of birth information sensitivity
   */
  dateofbirthinformationsensitivity: "DOB",

  /**
   * gender and sexual orientation information sensitivity
   */
  genderandsexualorientationinformationsensitivity: "GENDER",

  /**
   * living arrangement information sensitivity
   */
  livingarrangementinformationsensitivity: "LIVARG",

  /**
   * marital status information sensitivity
   */
  maritalstatusinformationsensitivity: "MARST",

  /**
   * patient location
   */
  patientlocation: "PATLOC",

  /**
   * race information sensitivity
   */
  raceinformationsensitivity: "RACE",

  /**
   * religion information sensitivity
   */
  religioninformationsensitivity: "REL",

  /**
   * RoleInformationSensitivityPolicy
   */
  RoleInformationSensitivityPolicy: "_RoleInformationSensitivityPolicy",

  /**
   * business information sensitivity
   */
  businessinformationsensitivity: "B",

  /**
   * employer information sensitivity
   */
  employerinformationsensitivity: "EMPL",

  /**
   * location information sensitivity
   */
  locationinformationsensitivity: "LOCIS",

  /**
   * sensitive service provider information sensitivity
   */
  sensitiveserviceproviderinformationsensitivity: "SSP",

  /**
   * adolescent information sensitivity
   */
  adolescentinformationsensitivity: "ADOL",

  /**
   * celebrity information sensitivity
   */
  celebrityinformationsensitivity: "CEL",

  /**
   * celebrity information sensitivity
   */
  celebrityinformationsensitivity: "VIP",

  /**
   * diagnosis information sensitivity
   */
  diagnosisinformationsensitivity: "DIA",

  /**
   * drug information sensitivity
   */
  druginformationsensitivity: "DRGIS",

  /**
   * employee information sensitivity
   */
  employeeinformationsensitivity: "EMP",

  /**
   * patient default information sensitivity
   */
  patientdefaultinformationsensitivity: "PDS",

  /**
   * physician requested information sensitivity
   */
  physicianrequestedinformationsensitivity: "PHY",

  /**
   * patient requested information sensitivity
   */
  patientrequestedinformationsensitivity: "PRS",

  /**
   * compartment
   */
  compartment: "COMPT",

  /**
   * accountable care organization compartment
   */
  accountablecareorganizationcompartment: "ACOCOMPT",

  /**
   * CDS system compartment
   */
  CDSsystemcompartment: "CDSSCOMPT",

  /**
   * care team compartment
   */
  careteamcompartment: "CTCOMPT",

  /**
   * financial management compartment
   */
  financialmanagementcompartment: "FMCOMPT",

  /**
   * human resource compartment
   */
  humanresourcecompartment: "HRCOMPT",

  /**
   * legitimate relationship compartment
   */
  legitimaterelationshipcompartment: "LRCOMPT",

  /**
   * patient administration compartment
   */
  patientadministrationcompartment: "PACOMPT",

  /**
   * research project compartment
   */
  researchprojectcompartment: "RESCOMPT",

  /**
   * records management compartment
   */
  recordsmanagementcompartment: "RMGTCOMPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPrivacyPolicyCode =
  typeof ActPrivacyPolicyCode[keyof typeof ActPrivacyPolicyCode];
