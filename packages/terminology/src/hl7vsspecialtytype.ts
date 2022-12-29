/**
 * Value Set of codes that identify the specialty of the care professional who is supported when using this location definition.
 * http://terminology.hl7.org/ValueSet/v2-0265
 */
export const Hl7VSSpecialtyTypeCode = {
  /**
   * Ambulatory
   */
  Ambulatory: "AMB",

  /**
   * Psychiatric
   */
  Psychiatric: "PSY",

  /**
   * Pediatric psychiatric
   */
  Pediatricpsychiatric: "PPS",

  /**
   * Rehabilitation
   */
  Rehabilitation: "REH",

  /**
   * Pediatric rehabilitation
   */
  Pediatricrehabilitation: "PRE",

  /**
   * Isolation
   */
  Isolation: "ISO",

  /**
   * Obstetrics, gynecology
   */
  Obstetricsgynecology: "OBG",

  /**
   * Pediatric/neonatal intensive care
   */
  Pediatricneonatalintensivecare: "PIN",

  /**
   * Intensive care
   */
  Intensivecare: "INT",

  /**
   * Surgery
   */
  Surgery: "SUR",

  /**
   * Psychiatric intensive care
   */
  Psychiatricintensivecare: "PSI",

  /**
   * Education
   */
  Education: "EDI",

  /**
   * Coronary/cardiac care
   */
  Coronarycardiaccare: "CAR",

  /**
   * Newborn, nursery, infants
   */
  Newbornnurseryinfants: "NBI",

  /**
   * Critical care
   */
  Criticalcare: "CCR",

  /**
   * Pediatrics
   */
  Pediatrics: "PED",

  /**
   * Emergency
   */
  Emergency: "EMR",

  /**
   * Observation
   */
  Observation: "OBS",

  /**
   * Walk-in clinic
   */
  Walkinclinic: "WIC",

  /**
   * General/family practice
   */
  Generalfamilypractice: "PHY",

  /**
   * Allergy
   */
  Allergy: "ALC",

  /**
   * Family planning
   */
  Familyplanning: "FPC",

  /**
   * Chiropractic
   */
  Chiropractic: "CHI",

  /**
   * Cancer
   */
  Cancer: "CAN",

  /**
   * Naturopathic
   */
  Naturopathic: "NAT",

  /**
   * Other specialty
   */
  Otherspecialty: "OTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecialtyTypeCode =
  typeof Hl7VSSpecialtyTypeCode[keyof typeof Hl7VSSpecialtyTypeCode];
