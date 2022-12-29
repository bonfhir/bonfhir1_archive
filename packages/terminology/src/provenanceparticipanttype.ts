/**
 * The type of participation a provenance participant.
 * http://terminology.hl7.org/ValueSet/provenance-agent-type
 */
export const ProvenanceParticipantTypeCode = {
  /**
   * Enterer
   */
  Enterer: "enterer",

  /**
   * Performer
   */
  Performer: "performer",

  /**
   * Author
   */
  Author: "author",

  /**
   * Verifier
   */
  Verifier: "verifier",

  /**
   * Legal Authenticator
   */
  LegalAuthenticator: "legal",

  /**
   * Attester
   */
  Attester: "attester",

  /**
   * Informant
   */
  Informant: "informant",

  /**
   * Custodian
   */
  Custodian: "custodian",

  /**
   * Assembler
   */
  Assembler: "assembler",

  /**
   * Composer
   */
  Composer: "composer",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceParticipantTypeCode =
  typeof ProvenanceParticipantTypeCode[keyof typeof ProvenanceParticipantTypeCode];
