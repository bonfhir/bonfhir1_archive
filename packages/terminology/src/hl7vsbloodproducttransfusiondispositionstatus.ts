/**
 * Value Set of codes that specify the current status of the specified blood product as indicated by the placer.  For example, the placer may return the blood product to the transfusion service unused because an IV could not be started. The blood co
 * http://terminology.hl7.org/ValueSet/v2-0513
 */
export const Hl7VSBloodProductTransfusionDispositionStatusCode = {
  /**
   * Returned unused and unlinked
   */
  RA: "RA",

  /**
   * Returned unused but linked
   */
  RL: "RL",

  /**
   * Wasted
   */
  WA: "WA",

  /**
   * Transfusion Interrupted
   */
  TI: "TI",

  /**
   * Transfusion Ended with Reactions
   */
  TR: "TR",

  /**
   * Transfusion Started
   */
  TS: "TS",

  /**
   * Transfusion Ended
   */
  TX: "TX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBloodProductTransfusionDispositionStatusCode =
  typeof Hl7VSBloodProductTransfusionDispositionStatusCode[keyof typeof Hl7VSBloodProductTransfusionDispositionStatusCode];
