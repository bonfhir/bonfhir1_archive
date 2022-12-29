/**
 * Value Set of codes that define the state of a visit relative to its place in a purge workflow.
 * http://terminology.hl7.org/ValueSet/v2-0213
 */
export const Hl7VSPurgeStatusCode = {
  /**
   * Marked for purge.  User is no longer able to update the visit.
   */
  MarkedforpurgeUserisnolongerabletoupdatethevisit: "P",

  /**
   * The visit is marked for deletion and the user cannot enter new data against it.
   */
  Thevisitismarkedfordeletionandtheusercannotenternewdataagainstit: "D",

  /**
   * The visit is marked inactive and the user cannot enter new data against it.
   */
  Thevisitismarkedinactiveandtheusercannotenternewdataagainstit: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPurgeStatusCode =
  typeof Hl7VSPurgeStatusCode[keyof typeof Hl7VSPurgeStatusCode];
