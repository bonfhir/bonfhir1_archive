/**
 * Concepts specifying an actual personal relationship that the next of kin/associated party has to a patient.  Used in HL7 Version 2.x messaging in the NK1 segment.
 * http://terminology.hl7.org/ValueSet/v2-0063
 */
export const Hl7VSRelationshipCode = {
  /**
   * Self
   */
  Self: "SEL",

  /**
   * Spouse
   */
  Spouse: "SPO",

  /**
   * Life partner
   */
  Lifepartner: "DOM",

  /**
   * Child
   */
  Child: "CHD",

  /**
   * Grandchild
   */
  Grandchild: "GCH",

  /**
   * Natural child
   */
  Naturalchild: "NCH",

  /**
   * Stepchild
   */
  Stepchild: "SCH",

  /**
   * Foster child
   */
  Fosterchild: "FCH",

  /**
   * Handicapped dependent
   */
  Handicappeddependent: "DEP",

  /**
   * Ward of court
   */
  Wardofcourt: "WRD",

  /**
   * Parent
   */
  Parent: "PAR",

  /**
   * Mother
   */
  Mother: "MTH",

  /**
   * Father
   */
  Father: "FTH",

  /**
   * Care giver
   */
  Caregiver: "CGV",

  /**
   * Guardian
   */
  Guardian: "GRD",

  /**
   * Grandparent
   */
  Grandparent: "GRP",

  /**
   * Extended family
   */
  Extendedfamily: "EXF",

  /**
   * Sibling
   */
  Sibling: "SIB",

  /**
   * Brother
   */
  Brother: "BRO",

  /**
   * Sister
   */
  Sister: "SIS",

  /**
   * Friend
   */
  Friend: "FND",

  /**
   * Other adult
   */
  Otheradult: "OAD",

  /**
   * Employee
   */
  Employee: "EME",

  /**
   * Employer
   */
  Employer: "EMR",

  /**
   * Associate
   */
  Associate: "ASC",

  /**
   * Emergency contact
   */
  Emergencycontact: "EMC",

  /**
   * Owner
   */
  Owner: "OWN",

  /**
   * Trainer
   */
  Trainer: "TRA",

  /**
   * Manager
   */
  Manager: "MGR",

  /**
   * None
   */
  None: "NON",

  /**
   * Unknown
   */
  Unknown: "UNK",

  /**
   * Other
   */
  Other: "OTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelationshipCode =
  typeof Hl7VSRelationshipCode[keyof typeof Hl7VSRelationshipCode];
