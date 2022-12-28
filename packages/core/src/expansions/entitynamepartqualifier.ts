/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntityNamePartQualifier
 */
export const EntityNamePartQualifierCode = {
  /**
   * OrganizationNamePartQualifier
   */
  _OrganizationNamePartQualifier: "_OrganizationNamePartQualifier",

  /**
   * academic
   */
  AC: "AC",

  /**
   * adopted
   */
  AD: "AD",

  /**
   * birth
   */
  BR: "BR",

  /**
   * callme
   */
  CL: "CL",

  /**
   * initial
   */
  IN: "IN",

  /**
   * Legal status
   */
  LS: "LS",

  /**
   * nobility
   */
  NB: "NB",

  /**
   * professional
   */
  PR: "PR",

  /**
   * spouse
   */
  SP: "SP",

  /**
   * title
   */
  TITLE: "TITLE",

  /**
   * voorvoegsel
   */
  VV: "VV",

  /**
   * PharmaceuticalEntityNamePartQualifiers
   */
  PharmaceuticalEntityNamePartQualifiers:
    "PharmaceuticalEntityNamePartQualifiers",

  /**
   * container name
   */
  CON: "CON",

  /**
   * device name
   */
  DEV: "DEV",

  /**
   * FlavorName
   */
  FLAV: "FLAV",

  /**
   * FormulationPartName
   */
  FORMUL: "FORMUL",

  /**
   * form name
   */
  FRM: "FRM",

  /**
   * invented name
   */
  INV: "INV",

  /**
   * TargetPopulationName
   */
  POPUL: "POPUL",

  /**
   * scientific name
   */
  SCI: "SCI",

  /**
   * strength name
   */
  STR: "STR",

  /**
   * TimeOrPeriodName
   */
  TIME: "TIME",

  /**
   * trademark name
   */
  TMK: "TMK",

  /**
   * intended use name
   */
  USE: "USE",

  /**
   * PersonNamePartQualifier
   */
  _PersonNamePartQualifier: "_PersonNamePartQualifier",

  /**
   * PersonNamePartAffixTypes
   */
  _PersonNamePartAffixTypes: "_PersonNamePartAffixTypes",

  /**
   * PersonNamePartChangeQualifier
   */
  _PersonNamePartChangeQualifier: "_PersonNamePartChangeQualifier",

  /**
   * PersonNamePartMiscQualifier
   */
  _PersonNamePartMiscQualifier: "_PersonNamePartMiscQualifier",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNamePartQualifierCode =
  typeof EntityNamePartQualifierCode[keyof typeof EntityNamePartQualifierCode];
