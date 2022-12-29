/**
 * Working list collects a dynamic list of individual instances of Act via ActRelationship which reflects the need of an individual worker, team of workers, or an organization to manage lists of acts for many different clinical and administrative reasons. Examples of working lists include problem lists, goal lists, allergy lists, and to-do lists.
 * http://terminology.hl7.org/ValueSet/v3-ActClassWorkingList
 */
export const ActClassWorkingListCode = {
  /**
   * working list
   */
  workinglist: "LIST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassWorkingListCode =
  typeof ActClassWorkingListCode[keyof typeof ActClassWorkingListCode];
