/**
 * All single celled living organisms including protozoa, bacteria, yeast, viruses, etc.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassMicroorganism
 */
export const EntityClassMicroorganismCode = {
  /**
   * microorganism
   */
  microorganism: "MIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassMicroorganismCode =
  typeof EntityClassMicroorganismCode[keyof typeof EntityClassMicroorganismCode];
