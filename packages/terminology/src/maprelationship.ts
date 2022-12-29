/**
 * The closeness or quality of the mapping between the HL7 concept (as represented by the HL7 concept identifier) and the source coding system. The values are patterned after the similar relationships used in the UMLS Metathesaurus. Because the HL7 coding sy
 * http://terminology.hl7.org/ValueSet/v3-MapRelationship
 */
export const MapRelationshipCode = {
  /**
   * Broader Than
   */
  BroaderThan: "BT",

  /**
   * Exact
   */
  Exact: "E",

  /**
   * Narrower Than
   */
  NarrowerThan: "NT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MapRelationshipCode =
  typeof MapRelationshipCode[keyof typeof MapRelationshipCode];
