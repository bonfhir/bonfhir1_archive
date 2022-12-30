/**
 * Associates a derived Act with its input parameters. E.G., an anion-gap observation can be associated as being derived from given sodium-, (potassium-,), chloride-, and bicarbonate-observations. The narrative content (Act.text) of a source act is wholly machine-derived from the collection of target acts.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipIsDerivedFrom
 */
export const ActRelationshipIsDerivedFromCode = {
  /**
   * is derived from
   */
  DRIV: "DRIV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipIsDerivedFromCode =
  typeof ActRelationshipIsDerivedFromCode[keyof typeof ActRelationshipIsDerivedFromCode];
