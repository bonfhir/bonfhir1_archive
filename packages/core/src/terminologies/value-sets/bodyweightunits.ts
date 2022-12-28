/**
 * UCUM units for recording Body Weight
 * http://hl7.org/fhir/ValueSet/ucum-bodyweight
 */
export const BodyWeightUnitsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BodyWeightUnitsCode =
  typeof BodyWeightUnitsCode[keyof typeof BodyWeightUnitsCode];
