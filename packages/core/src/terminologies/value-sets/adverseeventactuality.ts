/**
 * Overall nature of the adverse event, e.g. real or potential.
 * http://hl7.org/fhir/ValueSet/adverse-event-actuality
 */
export const AdverseEventActualityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventActualityCode =
  typeof AdverseEventActualityCode[keyof typeof AdverseEventActualityCode];
