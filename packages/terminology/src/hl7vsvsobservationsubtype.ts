/**
 * Value Set of codes specifying an observation sub-type.
 * http://terminology.hl7.org/ValueSet/v2-0937
 */
export const Hl7VSVSObservationSubtypeCode = {
  /**
   * Ask at Order Entry
   */
  AskatOrderEntry: "AOE",

  /**
   * Ask at Specimen Collection
   */
  AskatSpecimenCollection: "ASC",

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
export type Hl7VSVSObservationSubtypeCode =
  typeof Hl7VSVSObservationSubtypeCode[keyof typeof Hl7VSVSObservationSubtypeCode];
