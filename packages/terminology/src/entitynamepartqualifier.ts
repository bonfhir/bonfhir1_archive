/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntityNamePartQualifier
 */
export const EntityNamePartQualifierCode = {
  /**
   * OrganizationNamePartQualifier
   */
  OrganizationNamePartQualifier: "_OrganizationNamePartQualifier",

  /**
   * academic
   */
  academic: "AC",

  /**
   * adopted
   */
  adopted: "AD",

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
   * Legal status
   */
  Legalstatus: "LS",

  /**
   * nobility
   */
  nobility: "NB",

  /**
   * professional
   */
  professional: "PR",

  /**
   * spouse
   */
  spouse: "SP",

  /**
   * title
   */
  title: "TITLE",

  /**
   * voorvoegsel
   */
  voorvoegsel: "VV",

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
   * PersonNamePartQualifier
   */
  PersonNamePartQualifier: "_PersonNamePartQualifier",

  /**
   * PersonNamePartAffixTypes
   */
  PersonNamePartAffixTypes: "_PersonNamePartAffixTypes",

  /**
   * PersonNamePartChangeQualifier
   */
  PersonNamePartChangeQualifier: "_PersonNamePartChangeQualifier",

  /**
   * PersonNamePartMiscQualifier
   */
  PersonNamePartMiscQualifier: "_PersonNamePartMiscQualifier",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNamePartQualifierCode =
  typeof EntityNamePartQualifierCode[keyof typeof EntityNamePartQualifierCode];
