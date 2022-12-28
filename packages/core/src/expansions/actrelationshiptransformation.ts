/**
 * Used when the target Act is a transformation of the source Act. (For instance, used to show that a CDA document is a transformation of a DICOM SR document.)
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipTransformation
 */
export const ActRelationshipTransformationCode = {
  /**
   * transformation
   */
  XFRM: "XFRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipTransformationCode =
  typeof ActRelationshipTransformationCode[keyof typeof ActRelationshipTransformationCode];
