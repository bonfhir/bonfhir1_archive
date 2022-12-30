/**
 * Sensitivity codes are not useful for interoperability outside of a policy domain because sensitivity policies are typically localized and vary drastically across policy domains even for the same information category because of differing organizational business rules, security policies, and jurisdictional requirements. For example, an "employee" sensitivity code would make little sense for use outside of a policy domain. "Taboo" would rarely be useful outside of a policy domain unless there are jurisdictional requirements requiring that a provider disclose sensitive information to a patient directly.

Sensitivity codes may be more appropriate in a legacy system's Master Files in order to notify those who access a patient's orders and observations about the sensitivity policies that apply. Newer systems may have a security engine that uses a sensitivity policy's criteria directly. The specializable Sensitivity Act.code may be useful in some scenarious if used in combination with a sensitivity identifier and/or Act.title.
 * http://terminology.hl7.org/ValueSet/v3-InformationSensitivityPolicy
 */
export const InformationSensitivityPolicyCode = {
  /**
   * InformationSensitivityPolicy
   */
  _InformationSensitivityPolicy: "_InformationSensitivityPolicy",

  /**
   * ActInformationSensitivityPolicy
   */
  _ActInformationSensitivityPolicy: "_ActInformationSensitivityPolicy",

  /**
   * substance abuse information sensitivity
   */
  ETH: "ETH",

  /**
   * genetic disease information sensitivity
   */
  GDIS: "GDIS",

  /**
   * HIV/AIDS information sensitivity
   */
  HIV: "HIV",

  /**
   * military sexual trauma information sensitivity
   */
  MST: "MST",

  /**
   * pregnancy information sensitivity
   */
  PREGNANT: "PREGNANT",

  /**
   * sickle cell anemia information sensitivity
   */
  SCA: "SCA",

  /**
   * sexual assault, abuse, or domestic violence information sensitivity
   */
  SDV: "SDV",

  /**
   * sexuality and reproductive health information sensitivity
   */
  SEX: "SEX",

  /**
   * specially protected information sensitivity
   */
  SPI: "SPI",

  /**
   * behavioral health information sensitivity
   */
  BH: "BH",

  /**
   * cognitive disability information sensitivity
   */
  COGN: "COGN",

  /**
   * developmental disability information sensitivity
   */
  DVD: "DVD",

  /**
   * emotional disturbance information sensitivity
   */
  EMOTDIS: "EMOTDIS",

  /**
   * mental health information sensitivity
   */
  MH: "MH",

  /**
   * psychiatry disorder information sensitivity
   */
  PSY: "PSY",

  /**
   * psychotherapy note information sensitivity
   */
  PSYTHPN: "PSYTHPN",

  /**
   * substance use disorder information sensitivity
   */
  SUD: "SUD",

  /**
   * alcohol use disorder information sensitivity
   */
  ETHUD: "ETHUD",

  /**
   * opioid use disorder information sensitivity
   */
  OPIOIDUD: "OPIOIDUD",

  /**
   * sexually transmitted disease information sensitivity
   */
  STD: "STD",

  /**
   * taboo
   */
  TBOO: "TBOO",

  /**
   * violence information sensitivity
   */
  VIO: "VIO",

  /**
   * Identifier Sensitivity
   */
  IDS: "IDS",

  /**
   * sickle cell
   */
  SICKLE: "SICKLE",

  /**
   * EntityInformationSensitivityPolicy
   */
  _EntitySensitivityPolicyType: "_EntitySensitivityPolicyType",

  /**
   * all demographic information sensitivity
   */
  DEMO: "DEMO",

  /**
   * date of birth information sensitivity
   */
  DOB: "DOB",

  /**
   * gender and sexual orientation information sensitivity
   */
  GENDER: "GENDER",

  /**
   * living arrangement information sensitivity
   */
  LIVARG: "LIVARG",

  /**
   * marital status information sensitivity
   */
  MARST: "MARST",

  /**
   * patient location
   */
  PATLOC: "PATLOC",

  /**
   * race information sensitivity
   */
  RACE: "RACE",

  /**
   * religion information sensitivity
   */
  REL: "REL",

  /**
   * RoleInformationSensitivityPolicy
   */
  _RoleInformationSensitivityPolicy: "_RoleInformationSensitivityPolicy",

  /**
   * business information sensitivity
   */
  B: "B",

  /**
   * employer information sensitivity
   */
  EMPL: "EMPL",

  /**
   * location information sensitivity
   */
  LOCIS: "LOCIS",

  /**
   * sensitive service provider information sensitivity
   */
  SSP: "SSP",

  /**
   * adolescent information sensitivity
   */
  ADOL: "ADOL",

  /**
   * celebrity information sensitivity
   */
  CEL: "CEL",

  /**
   * celebrity information sensitivity
   */
  VIP: "VIP",

  /**
   * diagnosis information sensitivity
   */
  DIA: "DIA",

  /**
   * drug information sensitivity
   */
  DRGIS: "DRGIS",

  /**
   * employee information sensitivity
   */
  EMP: "EMP",

  /**
   * patient default information sensitivity
   */
  PDS: "PDS",

  /**
   * physician requested information sensitivity
   */
  PHY: "PHY",

  /**
   * patient requested information sensitivity
   */
  PRS: "PRS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InformationSensitivityPolicyCode =
  typeof InformationSensitivityPolicyCode[keyof typeof InformationSensitivityPolicyCode];
