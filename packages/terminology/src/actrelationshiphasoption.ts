/**
 * A relationship between a source Act that provides more detailed properties to the target Act.

The source act thus is a specialization of the target act, but instead of mentioning all the inherited properties it only mentions new property bindings or refinements.

The typical use case is to specify certain alternative variants of one kind of Act. The priorityNumber attribute is used to weigh refinements as preferred over other alternative refinements.

Example: several routing options for a drug are specified as one SubstanceAdministration for the general treatment with attached refinements for the various routing options.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasOption
 */
export const ActRelationshipHasOptionCode = {
  /**
   * has option
   */
  OPTN: "OPTN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasOptionCode =
  typeof ActRelationshipHasOptionCode[keyof typeof ActRelationshipHasOptionCode];
