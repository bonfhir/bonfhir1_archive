/**
 * Value Set of codes specifying a phlebotomy issue.
 * http://terminology.hl7.org/ValueSet/v2-0925
 */
export const Hl7VSPhlebotomyIssueCode = {
  /**
   * Infiltration
   */
  Infiltration: "INF",

  /**
   * Vein Spasm
   */
  VeinSpasm: "VSM",

  /**
   * Collapse
   */
  Collapse: "COL",

  /**
   * Missed / in tissue
   */
  Missedintissue: "MIS",

  /**
   * Needle adjustment (this may not end a procedure, if successful will impact component production)
   */
  Needleadjustmentthismaynotendaprocedureifsuccessfulwillimpactcomponentproduction:
    "NAD",

  /**
   * Poor flow
   */
  Poorflow: "PFL",

  /**
   * Clotted
   */
  Clotted: "CLT",

  /**
   * Defective Needle
   */
  DefectiveNeedle: "DND",

  /**
   * Defective Bag
   */
  DefectiveBag: "DBG",

  /**
   * Defective Apheresis Kit
   */
  DefectiveApheresisKit: "DAK",

  /**
   * Defective Instrument
   */
  DefectiveInstrument: "DMT",

  /**
   * Instrument Power Failure
   */
  InstrumentPowerFailure: "IPF",

  /**
   * Air Contamination
   */
  AirContamination: "ACN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPhlebotomyIssueCode =
  typeof Hl7VSPhlebotomyIssueCode[keyof typeof Hl7VSPhlebotomyIssueCode];
