/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActMoodDesire
 */
export const ActMoodDesireCode = {
  /**
   * desire
   */
  _ActMoodDesire: "_ActMoodDesire",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodDesireCode =
  typeof ActMoodDesireCode[keyof typeof ActMoodDesireCode];
