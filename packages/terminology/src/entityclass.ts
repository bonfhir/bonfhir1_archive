/**
 * Classifies the Entity class and all of its subclasses. The terminology is hierarchical. At the top is this HL7-defined domain of high-level categories (such as represented by the Entity subclasses). Each of these terms must be harmonized and is specializable.

The value sets beneath are encoded in Entity.code and are drawn from multiple, frequently external, domains that reflect much more fine-grained typing.
 * http://terminology.hl7.org/ValueSet/v3-EntityClass
 */
export const EntityClassCode = {
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
export type EntityClassCode =
  typeof EntityClassCode[keyof typeof EntityClassCode];
