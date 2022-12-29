/**
 * A unit of work, a grouper of work items as defined by the system performing that work. Typically some laboratory order fulfillers communicate references to accessions in their communications regarding laboratory orders. Often one or more specimens are related to an accession such that in some environments the accession number is taken as an identifier for a specimen (group).
 * http://terminology.hl7.org/ValueSet/v3-ActClassAccession
 */
export const ActClassAccessionCode = {
  /**
   * accession
   */
  accession: "ACSN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassAccessionCode =
  typeof ActClassAccessionCode[keyof typeof ActClassAccessionCode];
