/**
 * **Description:**Indicates whether the name part is a given name, family name, prefix, suffix, etc.
 * http://terminology.hl7.org/ValueSet/v3-EntityNamePartTypeR2
 */
export const EntityNamePartTypeR2Code = {
  /**
   * delimiter
   */
  delimiter: "DEL",

  /**
   * family
   */
  family: "FAM",

  /**
   * given
   */
  given: "GIV",

  /**
   * title
   */
  title: "TITLE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNamePartTypeR2Code =
  typeof EntityNamePartTypeR2Code[keyof typeof EntityNamePartTypeR2Code];
