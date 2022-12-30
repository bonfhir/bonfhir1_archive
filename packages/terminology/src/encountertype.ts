/**
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 * http://terminology.hl7.org/ValueSet/encounter-type
 */
export const EncounterTypeCode = {
  /**
   * Annual diabetes mellitus screening
   */
  ADMS: "ADMS",

  /**
   * Bone drilling/bone marrow punction in clinic
   */
  "BD/BM-clin": "BD/BM-clin",

  /**
   * Infant colon screening - 60 minutes
   */
  CCS60: "CCS60",

  /**
   * Outpatient Kenacort injection
   */
  OKI: "OKI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterTypeCode =
  typeof EncounterTypeCode[keyof typeof EncounterTypeCode];
