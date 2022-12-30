/**
 * Value Set of codes that identify the specialty of the care professional who is supported when using this location definition.
 * http://terminology.hl7.org/ValueSet/v2-0265
 */
export const Hl7VSSpecialtyTypeCode = {
  /**
   * Ambulatory
   */
  AMB: "AMB",

  /**
   * Psychiatric
   */
  PSY: "PSY",

  /**
   * Pediatric psychiatric
   */
  PPS: "PPS",

  /**
   * Rehabilitation
   */
  REH: "REH",

  /**
   * Pediatric rehabilitation
   */
  PRE: "PRE",

  /**
   * Isolation
   */
  ISO: "ISO",

  /**
   * Obstetrics, gynecology
   */
  OBG: "OBG",

  /**
   * Pediatric/neonatal intensive care
   */
  PIN: "PIN",

  /**
   * Intensive care
   */
  INT: "INT",

  /**
   * Surgery
   */
  SUR: "SUR",

  /**
   * Psychiatric intensive care
   */
  PSI: "PSI",

  /**
   * Education
   */
  EDI: "EDI",

  /**
   * Coronary/cardiac care
   */
  CAR: "CAR",

  /**
   * Newborn, nursery, infants
   */
  NBI: "NBI",

  /**
   * Critical care
   */
  CCR: "CCR",

  /**
   * Pediatrics
   */
  PED: "PED",

  /**
   * Emergency
   */
  EMR: "EMR",

  /**
   * Observation
   */
  OBS: "OBS",

  /**
   * Walk-in clinic
   */
  WIC: "WIC",

  /**
   * General/family practice
   */
  PHY: "PHY",

  /**
   * Allergy
   */
  ALC: "ALC",

  /**
   * Family planning
   */
  FPC: "FPC",

  /**
   * Chiropractic
   */
  CHI: "CHI",

  /**
   * Cancer
   */
  CAN: "CAN",

  /**
   * Naturopathic
   */
  NAT: "NAT",

  /**
   * Other specialty
   */
  OTH: "OTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecialtyTypeCode =
  typeof Hl7VSSpecialtyTypeCode[keyof typeof Hl7VSSpecialtyTypeCode];
