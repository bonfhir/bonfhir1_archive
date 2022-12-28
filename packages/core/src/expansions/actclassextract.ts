/**
 * This context represents the part of a patient record conveyed in a single communication. It is drawn from a providing system for the purposes of communication to a requesting process (which might be another repository, a client application or a middleware service such as an electronic guideline engine), and supporting the faithful inclusion of the communicated data in the receiving system.

An extract may be the entirety of the patient record as held by the sender or it may be a part of that record (e.g. changes since a specified date).

An extract contains folders or compositions.

An extract cannot contain another extract.
 * http://terminology.hl7.org/ValueSet/v3-ActClassExtract
 */
export const ActClassExtractCode = {
  /**
   * extract
   */
  EXTRACT: "EXTRACT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassExtractCode =
  typeof ActClassExtractCode[keyof typeof ActClassExtractCode];
