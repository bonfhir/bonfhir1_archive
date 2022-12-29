/**
 * Classifies the Entity class and all of its subclasses. The terminology is hierarchical. At the top is this HL7-defined domain of high-level categories (such as represented by the Entity subclasses). Each of these terms must be harmonized and is specializable.

The value sets beneath are encoded in Entity.code and are drawn from multiple, frequently external, domains that reflect much more fine-grained typing.
 * http://terminology.hl7.org/ValueSet/v3-EntityClass
 */
export const EntityClassCode = {
  /**
   * entity
   */
  entity: "ENT",

  /**
   * health chart entity
   */
  healthchartentity: "HCE",

  /**
   * living subject
   */
  livingsubject: "LIV",

  /**
   * non-person living subject
   */
  nonpersonlivingsubject: "NLIV",

  /**
   * animal
   */
  animal: "ANM",

  /**
   * microorganism
   */
  microorganism: "MIC",

  /**
   * plant
   */
  plant: "PLNT",

  /**
   * person
   */
  person: "PSN",

  /**
   * material
   */
  material: "MAT",

  /**
   * chemical substance
   */
  chemicalsubstance: "CHEM",

  /**
   * food
   */
  food: "FOOD",

  /**
   * manufactured material
   */
  manufacturedmaterial: "MMAT",

  /**
   * container
   */
  container: "CONT",

  /**
   * holder
   */
  holder: "HOLD",

  /**
   * device
   */
  device: "DEV",

  /**
   * certificate representation
   */
  certificaterepresentation: "CER",

  /**
   * imaging modality
   */
  imagingmodality: "MODDV",

  /**
   * organization
   */
  organization: "ORG",

  /**
   * public institution
   */
  publicinstitution: "PUB",

  /**
   * state
   */
  state: "STATE",

  /**
   * Nation
   */
  Nation: "NAT",

  /**
   * place
   */
  place: "PLC",

  /**
   * city or town
   */
  cityortown: "CITY",

  /**
   * country
   */
  country: "COUNTRY",

  /**
   * county or parish
   */
  countyorparish: "COUNTY",

  /**
   * state or province
   */
  stateorprovince: "PROVINCE",

  /**
   * group
   */
  group: "RGRP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassCode =
  typeof EntityClassCode[keyof typeof EntityClassCode];
