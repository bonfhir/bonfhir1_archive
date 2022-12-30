/**
 * Value Set of codes specifying the limit for a collection event or process step.
 * http://terminology.hl7.org/ValueSet/v2-0938
 */
export const Hl7VSVSCollectionEventCode = {
  /**
   * Placing the order
   */
  ORD: "ORD",

  /**
   * Collecting the specimen
   */
  DRW: "DRW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVSCollectionEventCode =
  typeof Hl7VSVSCollectionEventCode[keyof typeof Hl7VSVSCollectionEventCode];
