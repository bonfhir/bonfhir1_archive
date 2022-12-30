/**
 * Identifies a type of observation that captures the age of an entity involved in an act with no implied method of determination.
 * http://terminology.hl7.org/ValueSet/v3-LOINCObservationActContextAgeDefinitionCode
 */
export const LOINCObservationActContextAgeDefinitionCodeCode = {
  /**
   * Age
   */
  "30525-0": "30525-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LOINCObservationActContextAgeDefinitionCodeCode =
  typeof LOINCObservationActContextAgeDefinitionCodeCode[keyof typeof LOINCObservationActContextAgeDefinitionCodeCode];
