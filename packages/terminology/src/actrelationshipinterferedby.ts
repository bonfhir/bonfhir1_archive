/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipInterferedBy
 */
export const ActRelationshipInterferedByCode = {
  /**
   * interfered by
   */
  interferedby: "INTF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipInterferedByCode =
  typeof ActRelationshipInterferedByCode[keyof typeof ActRelationshipInterferedByCode];
