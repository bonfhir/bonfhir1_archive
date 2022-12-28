/**
 * Identifies a type of observation that captures the age of a person in terms of age group concept codes.
 * http://terminology.hl7.org/ValueSet/v3-ObservationActContextAgeGroupType
 */
export const ObservationActContextAgeGroupTypeCode = {
  /**
   * Age group
   */
  "46251-5": "46251-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationActContextAgeGroupTypeCode =
  typeof ObservationActContextAgeGroupTypeCode[keyof typeof ObservationActContextAgeGroupTypeCode];
