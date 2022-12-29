/**
 * **Description:**A sequence of biomolecule like the DNA, RNA, protein and the like.
 * http://terminology.hl7.org/ValueSet/v3-ActClassBioSequence
 */
export const ActClassBioSequenceCode = {
  /**
   * bio sequence
   */
  biosequence: "SEQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassBioSequenceCode =
  typeof ActClassBioSequenceCode[keyof typeof ActClassBioSequenceCode];
