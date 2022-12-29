/**
 * Value Set of codes that specify the type of relationship that is established between the instances of Source Information and  Target Information.
 * http://terminology.hl7.org/ValueSet/v2-0948
 */
export const Hl7VSRelationshipTypeCode = {
  /**
   * Causes/caused
   */
  Causescaused: "CAUS",

  /**
   * Component of
   */
  Componentof: "COMP",

  /**
   * Concurrently
   */
  Concurrently: "CONCR",

  /**
   * Evidence
   */
  Evidence: "EVID",

  /**
   * Interferes / interfered
   */
  Interferesinterfered: "INTF",

  /**
   * Limits/limited
   */
  Limitslimited: "LIMIT",

  /**
   * Succeeds
   */
  Succeeds: "SUCCD",

  /**
   * Service target
   */
  Servicetarget: "SVTGT",

  /**
   * Triggers/triggered
   */
  Triggerstriggered: "TRIG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelationshipTypeCode =
  typeof Hl7VSRelationshipTypeCode[keyof typeof Hl7VSRelationshipTypeCode];
