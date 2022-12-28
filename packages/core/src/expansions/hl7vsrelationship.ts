/**
 * Concepts specifying an actual personal relationship that the next of kin/associated party has to a patient.  Used in HL7 Version 2.x messaging in the NK1 segment.
 * http://terminology.hl7.org/ValueSet/v2-0063
 */
export const Hl7VSRelationshipCode = {
  /**
   * Self
   */
  SEL: "SEL",

  /**
   * Spouse
   */
  SPO: "SPO",

  /**
   * Life partner
   */
  DOM: "DOM",

  /**
   * Child
   */
  CHD: "CHD",

  /**
   * Grandchild
   */
  GCH: "GCH",

  /**
   * Natural child
   */
  NCH: "NCH",

  /**
   * Stepchild
   */
  SCH: "SCH",

  /**
   * Foster child
   */
  FCH: "FCH",

  /**
   * Handicapped dependent
   */
  DEP: "DEP",

  /**
   * Ward of court
   */
  WRD: "WRD",

  /**
   * Parent
   */
  PAR: "PAR",

  /**
   * Mother
   */
  MTH: "MTH",

  /**
   * Father
   */
  FTH: "FTH",

  /**
   * Care giver
   */
  CGV: "CGV",

  /**
   * Guardian
   */
  GRD: "GRD",

  /**
   * Grandparent
   */
  GRP: "GRP",

  /**
   * Extended family
   */
  EXF: "EXF",

  /**
   * Sibling
   */
  SIB: "SIB",

  /**
   * Brother
   */
  BRO: "BRO",

  /**
   * Sister
   */
  SIS: "SIS",

  /**
   * Friend
   */
  FND: "FND",

  /**
   * Other adult
   */
  OAD: "OAD",

  /**
   * Employee
   */
  EME: "EME",

  /**
   * Employer
   */
  EMR: "EMR",

  /**
   * Associate
   */
  ASC: "ASC",

  /**
   * Emergency contact
   */
  EMC: "EMC",

  /**
   * Owner
   */
  OWN: "OWN",

  /**
   * Trainer
   */
  TRA: "TRA",

  /**
   * Manager
   */
  MGR: "MGR",

  /**
   * None
   */
  NON: "NON",

  /**
   * Unknown
   */
  UNK: "UNK",

  /**
   * Other
   */
  OTH: "OTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelationshipCode =
  typeof Hl7VSRelationshipCode[keyof typeof Hl7VSRelationshipCode];
