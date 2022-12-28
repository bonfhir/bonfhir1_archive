/**
 * Laterality: SNOMED-CT concepts for 'left', 'right', and 'bilateral'
 * http://hl7.org/fhir/ValueSet/bodysite-laterality
 */
export const LateralityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LateralityCode = typeof LateralityCode[keyof typeof LateralityCode];
