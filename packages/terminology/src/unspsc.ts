/**
 * **Description:**United Nations Standard Products and Services Classification, managed by Uniform Code Council (UCC): www.unspsc.org
 * http://terminology.hl7.org/ValueSet/v3-UNSPSC
 */
export const UNSPSCCode = {
  /**
   * United Nations Standard Products and Services Classification
   */
  UnitedNationsStandardProductsandServicesClassification: "UNSPSC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UNSPSCCode = typeof UNSPSCCode[keyof typeof UNSPSCCode];
