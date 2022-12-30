/**
 * Value Set of codes specifying a phlebotomy issue.
 * http://terminology.hl7.org/ValueSet/v2-0925
 */
export const Hl7VSPhlebotomyIssueCode = {
  /**
   * Infiltration
   */
  INF: "INF",

  /**
   * Vein Spasm
   */
  VSM: "VSM",

  /**
   * Collapse
   */
  COL: "COL",

  /**
   * Missed / in tissue
   */
  MIS: "MIS",

  /**
   * Needle adjustment (this may not end a procedure, if successful will impact component production)
   */
  NAD: "NAD",

  /**
   * Poor flow
   */
  PFL: "PFL",

  /**
   * Clotted
   */
  CLT: "CLT",

  /**
   * Defective Needle
   */
  DND: "DND",

  /**
   * Defective Bag
   */
  DBG: "DBG",

  /**
   * Defective Apheresis Kit
   */
  DAK: "DAK",

  /**
   * Defective Instrument
   */
  DMT: "DMT",

  /**
   * Instrument Power Failure
   */
  IPF: "IPF",

  /**
   * Air Contamination
   */
  ACN: "ACN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPhlebotomyIssueCode =
  typeof Hl7VSPhlebotomyIssueCode[keyof typeof Hl7VSPhlebotomyIssueCode];
