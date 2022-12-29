/**
 * Items located
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipItemsLocated
 */
export const ActRelationshipItemsLocatedCode = {
  /**
   * items located
   */
  itemslocated: "ITEMSLOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipItemsLocatedCode =
  typeof ActRelationshipItemsLocatedCode[keyof typeof ActRelationshipItemsLocatedCode];
