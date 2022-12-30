/**
 * Value Set of codes that specify the specific method requested for the administration of the drug or treatment to the patient.
 * http://terminology.hl7.org/ValueSet/v2-0165
 */
export const Hl7VSAdministrationMethodCode = {
  /**
   * Chew
   */
  CH: "CH",

  /**
   * Dissolve
   */
  DI: "DI",

  /**
   * Dust
   */
  DU: "DU",

  /**
   * Infiltrate
   */
  IF: "IF",

  /**
   * Insert
   */
  IS: "IS",

  /**
   * Irrigate
   */
  IR: "IR",

  /**
   * IV Piggyback
   */
  IVPB: "IVPB",

  /**
   * IV Push
   */
  IVP: "IVP",

  /**
   * Nebulized
   */
  NB: "NB",

  /**
   * Paint
   */
  PT: "PT",

  /**
   * Perfuse
   */
  PF: "PF",

  /**
   * Shampoo
   */
  SH: "SH",

  /**
   * Soak
   */
  SO: "SO",

  /**
   * Wash
   */
  WA: "WA",

  /**
   * Wipe
   */
  WI: "WI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdministrationMethodCode =
  typeof Hl7VSAdministrationMethodCode[keyof typeof Hl7VSAdministrationMethodCode];
