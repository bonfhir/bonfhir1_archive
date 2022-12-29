/**
 * Value Set of codes that specify the specific method requested for the administration of the drug or treatment to the patient.
 * http://terminology.hl7.org/ValueSet/v2-0165
 */
export const Hl7VSAdministrationMethodCode = {
  /**
   * Chew
   */
  Chew: "CH",

  /**
   * Dissolve
   */
  Dissolve: "DI",

  /**
   * Dust
   */
  Dust: "DU",

  /**
   * Infiltrate
   */
  Infiltrate: "IF",

  /**
   * Insert
   */
  Insert: "IS",

  /**
   * Irrigate
   */
  Irrigate: "IR",

  /**
   * IV Piggyback
   */
  IVPiggyback: "IVPB",

  /**
   * IV Push
   */
  IVPush: "IVP",

  /**
   * Nebulized
   */
  Nebulized: "NB",

  /**
   * Paint
   */
  Paint: "PT",

  /**
   * Perfuse
   */
  Perfuse: "PF",

  /**
   * Shampoo
   */
  Shampoo: "SH",

  /**
   * Soak
   */
  Soak: "SO",

  /**
   * Wash
   */
  Wash: "WA",

  /**
   * Wipe
   */
  Wipe: "WI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdministrationMethodCode =
  typeof Hl7VSAdministrationMethodCode[keyof typeof Hl7VSAdministrationMethodCode];
