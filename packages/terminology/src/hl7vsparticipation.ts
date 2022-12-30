/**
 * Concepts that represent functional involvement of a caregiver or member of a care team with an activity being transmitted (e.g., Case Manager, Evaluator, Transcriber, Nurse Care Practitioner, Midwife, Physician Assistant, etc.)
 * http://terminology.hl7.org/ValueSet/v2-0912
 */
export const Hl7VSParticipationCode = {
  /**
   * Alert Acknowledging Provider
   */
  AAP: "AAP",

  /**
   * Administration Cosigner
   */
  AC: "AC",

  /**
   * Admitting Provider
   */
  AD: "AD",

  /**
   * Authorized Performing Health Professional
   */
  AHP: "AHP",

  /**
   * Assistant/Alternate Interpreter
   */
  AI: "AI",

  /**
   * Administering Provider
   */
  AP: "AP",

  /**
   * Authorized Performing Provider Organization
   */
  APO: "APO",

  /**
   * Assistant Result Interpreter
   */
  ARI: "ARI",

  /**
   * Attending Provider
   */
  AT: "AT",

  /**
   * Author/Event Initiator
   */
  AUT: "AUT",

  /**
   * Collecting Provider Organization
   */
  CLPO: "CLPO",

  /**
   * Consulting Provider
   */
  CP: "CP",

  /**
   * De-Identification Entity
   */
  DIE: "DIE",

  /**
   * Dispensing Provider
   */
  DP: "DP",

  /**
   * Expected Assistant Result Interpreter
   */
  EARI: "EARI",

  /**
   * Entering Device
   */
  ED: "ED",

  /**
   * Entering Organization
   */
  EO: "EO",

  /**
   * Entering Person
   */
  EP: "EP",

  /**
   * Expected Principal Result Interpreter
   */
  EPRI: "EPRI",

  /**
   * Equipment
   */
  EQUIP: "EQUIP",

  /**
   * Family Health Care Professional
   */
  FHCP: "FHCP",

  /**
   * From Location
   */
  FL: "FL",

  /**
   * Medical Director
   */
  MDIR: "MDIR",

  /**
   * Ordering Facility
   */
  OF: "OF",

  /**
   * Ordering Provider
   */
  OP: "OP",

  /**
   * Ordering Provider Organization
   */
  OPO: "OPO",

  /**
   * Outside Site(s) Where Observation May Be Performed
   */
  OS: "OS",

  /**
   * Packed by
   */
  PB: "PB",

  /**
   * Pharmacist
   */
  PH: "PH",

  /**
   * Primary Interpreter
   */
  PI: "PI",

  /**
   * Performing Organization
   */
  PO: "PO",

  /**
   * Performing Organization Medical Director
   */
  POMD: "POMD",

  /**
   * Primary Care Provider
   */
  PP: "PP",

  /**
   * Patient Preferred Pharmacy
   */
  PPH: "PPH",

  /**
   * Principal Result Interpreter
   */
  PRI: "PRI",

  /**
   * Results Copies To
   */
  RCT: "RCT",

  /**
   * Referring Health Professional
   */
  RHP: "RHP",

  /**
   * Re-Identification Entity
   */
  RIE: "RIE",

  /**
   * Responsible Observer
   */
  RO: "RO",

  /**
   * Referring Provider
   */
  RP: "RP",

  /**
   * Referring Provider Organization
   */
  RPO: "RPO",

  /**
   * Referred to Provider
   */
  RT: "RT",

  /**
   * Send by
   */
  SB: "SB",

  /**
   * Specimen Collector
   */
  SC: "SC",

  /**
   * To Location
   */
  TL: "TL",

  /**
   * Technician
   */
  TN: "TN",

  /**
   * Transcriptionist
   */
  TR: "TR",

  /**
   * Verifier (Verifying Person)
   */
  VP: "VP",

  /**
   * Verifying Pharmaceutical Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)
   */
  VPS: "VPS",

  /**
   * Verifying Treatment Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)
   */
  VTS: "VTS",

  /**
   * Waypoint
   */
  WAY: "WAY",

  /**
   * Waypoint Recipient
   */
  WAYR: "WAYR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSParticipationCode =
  typeof Hl7VSParticipationCode[keyof typeof Hl7VSParticipationCode];
