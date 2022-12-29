/**
 * Value Set of codes specifying an observation sub-type used with observation type code RSLT (Result).
 * http://terminology.hl7.org/ValueSet/v3-LaboratoryObservationSubtype
 */
export const LaboratoryObservationSubTypeCode = {
  /**
   * Micro Culture Status
   */
  MicroCultureStatus: "MCS",

  /**
   * Micro Isolate Descriptor
   */
  MicroIsolateDescriptor: "MID",

  /**
   * Micro Isolate Growth Quantity
   */
  MicroIsolateGrowthQuantity: "MIG",

  /**
   * Micro Isolate Name
   */
  MicroIsolateName: "MIN",

  /**
   * Micro Isolate Related
   */
  MicroIsolateRelated: "MIR",

  /**
   * Micro Isolate Related Modifier
   */
  MicroIsolateRelatedModifier: "MIRM",

  /**
   * Micro Non-Isolate Related
   */
  MicroNonIsolateRelated: "MNIR",

  /**
   * Micro Other Descriptor
   */
  MicroOtherDescriptor: "MOD",

  /**
   * Micro Sample Stain
   */
  MicroSampleStain: "MSS",

  /**
   * Supplemental Result
   */
  SupplementalResult: "SUP",

  /**
   * Susceptibility Related
   */
  SusceptibilityRelated: "SUR",

  /**
   * Unspecified
   */
  Unspecified: "UNSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LaboratoryObservationSubTypeCode =
  typeof LaboratoryObservationSubTypeCode[keyof typeof LaboratoryObservationSubTypeCode];
