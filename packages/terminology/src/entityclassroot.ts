/**
 * Corresponds to the Entity class
 * http://terminology.hl7.org/ValueSet/v3-EntityClassRoot
 */
export const EntityClassRootCode = {
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
export type EntityClassRootCode =
  typeof EntityClassRootCode[keyof typeof EntityClassRootCode];
