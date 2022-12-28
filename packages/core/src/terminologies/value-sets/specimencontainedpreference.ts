/**
 * Degree of preference of a type of conditioned specimen.
 * http://hl7.org/fhir/ValueSet/specimen-contained-preference
 */
export const SpecimenContainedPreferenceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenContainedPreferenceCode =
  typeof SpecimenContainedPreferenceCode[keyof typeof SpecimenContainedPreferenceCode];
