/**
 * ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises. Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are able to use information tagged with these sensitivity values.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationSensitivityPolicy
 */
export const ActInformationSensitivityPolicyCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationSensitivityPolicyCode =
  typeof ActInformationSensitivityPolicyCode[keyof typeof ActInformationSensitivityPolicyCode];
