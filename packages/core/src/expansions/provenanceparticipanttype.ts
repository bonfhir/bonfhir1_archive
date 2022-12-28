/**
 * The type of participation a provenance participant.
 * http://terminology.hl7.org/ValueSet/provenance-agent-type
 */
export const ProvenanceParticipantTypeCode = {
  /**
   * Enterer
   */
  enterer: "enterer",

  /**
   * Performer
   */
  performer: "performer",

  /**
   * Author
   */
  author: "author",

  /**
   * Verifier
   */
  verifier: "verifier",

  /**
   * Attester
   */
  attester: "attester",

  /**
   * Informant
   */
  informant: "informant",

  /**
   * Custodian
   */
  custodian: "custodian",

  /**
   * Assembler
   */
  assembler: "assembler",

  /**
   * Composer
   */
  composer: "composer",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceParticipantTypeCode =
  typeof ProvenanceParticipantTypeCode[keyof typeof ProvenanceParticipantTypeCode];
