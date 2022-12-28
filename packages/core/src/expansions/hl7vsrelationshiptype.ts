/**
 * Value Set of codes that specify the type of relationship that is established between the instances of Source Information and  Target Information.
 * http://terminology.hl7.org/ValueSet/v2-0948
 */
export const Hl7VSRelationshipTypeCode = {
  /**
   * Causes/caused
   */
  CAUS: "CAUS",

  /**
   * Component of
   */
  COMP: "COMP",

  /**
   * Concurrently
   */
  CONCR: "CONCR",

  /**
   * Evidence
   */
  EVID: "EVID",

  /**
   * Interferes / interfered
   */
  INTF: "INTF",

  /**
   * Limits/limited
   */
  LIMIT: "LIMIT",

  /**
   * Succeeds
   */
  SUCCD: "SUCCD",

  /**
   * Service target
   */
  SVTGT: "SVTGT",

  /**
   * Triggers/triggered
   */
  TRIG: "TRIG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelationshipTypeCode =
  typeof Hl7VSRelationshipTypeCode[keyof typeof Hl7VSRelationshipTypeCode];
