/**
 * Value Set of codes specifying an observation sub-type used with observation type code RSLT (Result).
 * http://terminology.hl7.org/ValueSet/v3-LaboratoryObservationSubtype
 */
export const LaboratoryObservationSubTypeCode = {
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
export type LaboratoryObservationSubTypeCode =
  typeof LaboratoryObservationSubTypeCode[keyof typeof LaboratoryObservationSubTypeCode];
