/**
 * Corresponds to the Entity class
 * http://terminology.hl7.org/ValueSet/v3-EntityClassRoot
 */
export const EntityClassRootCode = {
  /**
   * entity
   */
  ENT: "ENT",

  /**
   * health chart entity
   */
  HCE: "HCE",

  /**
   * living subject
   */
  LIV: "LIV",

  /**
   * non-person living subject
   */
  NLIV: "NLIV",

  /**
   * animal
   */
  ANM: "ANM",

  /**
   * microorganism
   */
  MIC: "MIC",

  /**
   * plant
   */
  PLNT: "PLNT",

  /**
   * person
   */
  PSN: "PSN",

  /**
   * material
   */
  MAT: "MAT",

  /**
   * chemical substance
   */
  CHEM: "CHEM",

  /**
   * food
   */
  FOOD: "FOOD",

  /**
   * manufactured material
   */
  MMAT: "MMAT",

  /**
   * container
   */
  CONT: "CONT",

  /**
   * holder
   */
  HOLD: "HOLD",

  /**
   * device
   */
  DEV: "DEV",

  /**
   * certificate representation
   */
  CER: "CER",

  /**
   * imaging modality
   */
  MODDV: "MODDV",

  /**
   * organization
   */
  ORG: "ORG",

  /**
   * public institution
   */
  PUB: "PUB",

  /**
   * state
   */
  STATE: "STATE",

  /**
   * Nation
   */
  NAT: "NAT",

  /**
   * place
   */
  PLC: "PLC",

  /**
   * city or town
   */
  CITY: "CITY",

  /**
   * country
   */
  COUNTRY: "COUNTRY",

  /**
   * county or parish
   */
  COUNTY: "COUNTY",

  /**
   * state or province
   */
  PROVINCE: "PROVINCE",

  /**
   * group
   */
  RGRP: "RGRP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassRootCode =
  typeof EntityClassRootCode[keyof typeof EntityClassRootCode];
