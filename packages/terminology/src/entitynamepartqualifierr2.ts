/**
 * **Description:**The qualifier is a set of codes each of which specifies a certain subcategory of the name part in addition to the main name part type. For example, a given name may be flagged as a nickname, a family name may be a pseudonym or a name of public records.
 * http://terminology.hl7.org/ValueSet/v3-EntityNamePartQualifierR2
 */
export const EntityNamePartQualifierR2Code = {
  /**
   * acquired
   */
  acquired: "AD",

  /**
   * spouse
   */
  spouse: "SP",

  /**
   * birth
   */
  birth: "BR",

  /**
   * callme
   */
  callme: "CL",

  /**
   * initial
   */
  initial: "IN",

  /**
   * legal status
   */
  legalstatus: "LS",

  /**
   * middle name
   */
  middlename: "MID",

  /**
   * prefix
   */
  prefix: "PFX",

  /**
   * PharmaceuticalEntityNamePartQualifiers
   */
  PharmaceuticalEntityNamePartQualifiers:
    "PharmaceuticalEntityNamePartQualifiers",

  /**
   * container name
   */
  containername: "CON",

  /**
   * device name
   */
  devicename: "DEV",

  /**
   * FlavorName
   */
  FlavorName: "FLAV",

  /**
   * FormulationPartName
   */
  FormulationPartName: "FORMUL",

  /**
   * form name
   */
  formname: "FRM",

  /**
   * invented name
   */
  inventedname: "INV",

  /**
   * TargetPopulationName
   */
  TargetPopulationName: "POPUL",

  /**
   * scientific name
   */
  scientificname: "SCI",

  /**
   * strength name
   */
  strengthname: "STR",

  /**
   * TimeOrPeriodName
   */
  TimeOrPeriodName: "TIME",

  /**
   * trademark name
   */
  trademarkname: "TMK",

  /**
   * intended use name
   */
  intendedusename: "USE",

  /**
   * suffix
   */
  suffix: "SFX",

  /**
   * TitleStyles
   */
  TitleStyles: "TitleStyles",

  /**
   * academic
   */
  academic: "AC",

  /**
   * honorific
   */
  honorific: "HON",

  /**
   * honorific
   */
  honorific: "HOM",

  /**
   * nobility
   */
  nobility: "NB",

  /**
   * professional
   */
  professional: "PR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNamePartQualifierR2Code =
  typeof EntityNamePartQualifierR2Code[keyof typeof EntityNamePartQualifierR2Code];
