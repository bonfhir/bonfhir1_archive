/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xLabProcessClassCodes
 */
export const XLabProcessClassCodesCode = {
  /**
   * accession
   */
  accession: "ACSN",

  /**
   * container registration
   */
  containerregistration: "CONTREG",

  /**
   * observation
   */
  observation: "OBS",

  /**
   * procedure
   */
  procedure: "PROC",

  /**
   * specimen treatment
   */
  specimentreatment: "SPCTRT",

  /**
   * Specimen Collection
   */
  SpecimenCollection: "SPECCOLLECT",

  /**
   * storage
   */
  storage: "STORE",

  /**
   * transportation
   */
  transportation: "TRNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XLabProcessClassCodesCode =
  typeof XLabProcessClassCodesCode[keyof typeof XLabProcessClassCodesCode];
