/**
 * Model media type.
 * http://terminology.hl7.org/ValueSet/v3-ModelMediaType
 */
export const ModelMediaTypeCode = {
  /**
   * VRML Model
   */
  VRMLModel: "model/vrml",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ModelMediaTypeCode =
  typeof ModelMediaTypeCode[keyof typeof ModelMediaTypeCode];
