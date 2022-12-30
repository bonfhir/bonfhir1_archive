/**
 * Definition: Used to link a newer version or 'snapshot' of a business object (source) to an older version or 'snapshot' of the same business object (target).

*Usage:*The identifier of the Act should be the same for both source and target. If the identifiers are distinct, RPLC should be used instead.

Name from source to target = "modifiesPrior"

Name from target to source = "modifiesByNew"
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipModifies
 */
export const ActRelationshipModifiesCode = {
  /**
   * modifies
   */
  MOD: "MOD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipModifiesCode =
  typeof ActRelationshipModifiesCode[keyof typeof ActRelationshipModifiesCode];
