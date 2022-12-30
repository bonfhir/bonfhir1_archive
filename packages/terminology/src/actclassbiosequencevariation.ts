/**
 * **Description:**A variation in a sequence as described by BioSequence.
 * http://terminology.hl7.org/ValueSet/v3-ActClassBioSequenceVariation
 */
export const ActClassBioSequenceVariationCode = {
  /**
   * bio sequence variation
   */
  SEQVAR: "SEQVAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassBioSequenceVariationCode =
  typeof ActClassBioSequenceVariationCode[keyof typeof ActClassBioSequenceVariationCode];
