/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClassSubstanceExtraction
 */
export const ActClassSubstanceExtractionCode = {
  /**
   * Substance Extraction
   */
  SBEXT: "SBEXT",

  /**
   * Specimen Collection
   */
  SPECCOLLECT: "SPECCOLLECT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassSubstanceExtractionCode =
  typeof ActClassSubstanceExtractionCode[keyof typeof ActClassSubstanceExtractionCode];
