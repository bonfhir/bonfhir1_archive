/**
 * The types of involvement of the performer in the Event.
 * http://hl7.org/fhir/ValueSet/performer-function
 */
export const PerformerFunctionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PerformerFunctionCodesCode =
  typeof PerformerFunctionCodesCode[keyof typeof PerformerFunctionCodesCode];
