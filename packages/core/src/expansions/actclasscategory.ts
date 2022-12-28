/**
 * A group of entries within a composition or topic that have a common characteristic - for example, Examination, Diagnosis, Management OR Subjective, Objective, Analysis, Plan.

The distinction from Topic relates to value sets. For Category there is a bounded list of things like "Examination", "Diagnosis" or SOAP categories. For Topic the list is wide open to any clinical condition or reason for a part of an encounter.

A CATEGORY MAY CONTAIN ENTRIES.
 * http://terminology.hl7.org/ValueSet/v3-ActClassCategory
 */
export const ActClassCategoryCode = {
  /**
   * category
   */
  CATEGORY: "CATEGORY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassCategoryCode =
  typeof ActClassCategoryCode[keyof typeof ActClassCategoryCode];
