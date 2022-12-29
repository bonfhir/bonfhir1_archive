/**
 * Value Set of codes that specify an additional or alternate relationship between this service request and other service requests.
 * http://terminology.hl7.org/ValueSet/v2-0506
 */
export const Hl7VSServiceRequestRelationshipCode = {
  /**
   * Nurse prerogative
   */
  Nurseprerogative: "N",

  /**
   * Compound
   */
  Compound: "C",

  /**
   * Tapering
   */
  Tapering: "T",

  /**
   * Exclusive
   */
  Exclusive: "E",

  /**
   * Simultaneous
   */
  Simultaneous: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSServiceRequestRelationshipCode =
  typeof Hl7VSServiceRequestRelationshipCode[keyof typeof Hl7VSServiceRequestRelationshipCode];
