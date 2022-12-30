/**
 * Value Set of codes specifying an observation sub-type.
 * http://terminology.hl7.org/ValueSet/v2-0937
 */
export const Hl7VSVSObservationSubtypeCode = {
  /**
   * Ask at Order Entry
   */
  AOE: "AOE",

  /**
   * Ask at Specimen Collection
   */
  ASC: "ASC",

  /**
   * Micro Culture Status
   */
  MCS: "MCS",

  /**
   * Micro Isolate Descriptor
   */
  MID: "MID",

  /**
   * Micro Isolate Growth Quantity
   */
  MIG: "MIG",

  /**
   * Micro Isolate Name
   */
  MIN: "MIN",

  /**
   * Micro Isolate Related
   */
  MIR: "MIR",

  /**
   * Micro Isolate Related Modifier
   */
  MIRM: "MIRM",

  /**
   * Micro Non-Isolate Related
   */
  MNIR: "MNIR",

  /**
   * Micro Other Descriptor
   */
  MOD: "MOD",

  /**
   * Micro Sample Stain
   */
  MSS: "MSS",

  /**
   * Supplemental Result
   */
  SUP: "SUP",

  /**
   * Susceptibility Related
   */
  SUR: "SUR",

  /**
   * Unspecified
   */
  UNSP: "UNSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVSObservationSubtypeCode =
  typeof Hl7VSVSObservationSubtypeCode[keyof typeof Hl7VSVSObservationSubtypeCode];
