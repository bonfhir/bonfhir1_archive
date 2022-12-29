/**
 * Sensitivity codes are not useful for interoperability outside of a policy domain because sensitivity policies are typically localized and vary drastically across policy domains even for the same information category because of differing organizational business rules, security policies, and jurisdictional requirements. For example, an "employee" sensitivity code would make little sense for use outside of a policy domain. "Taboo" would rarely be useful outside of a policy domain unless there are jurisdictional requirements requiring that a provider disclose sensitive information to a patient directly.

Sensitivity codes may be more appropriate in a legacy system's Master Files in order to notify those who access a patient's orders and observations about the sensitivity policies that apply. Newer systems may have a security engine that uses a sensitivity policy's criteria directly. The specializable Sensitivity Act.code may be useful in some scenarious if used in combination with a sensitivity identifier and/or Act.title.
 * http://terminology.hl7.org/ValueSet/v3-InformationSensitivityPolicy
 */
export const InformationSensitivityPolicyCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InformationSensitivityPolicyCode =
  typeof InformationSensitivityPolicyCode[keyof typeof InformationSensitivityPolicyCode];
