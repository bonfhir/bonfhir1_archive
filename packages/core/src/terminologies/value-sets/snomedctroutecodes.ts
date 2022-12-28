/**
 * This value set includes all Route codes from SNOMED CT - provided as an exemplar.
 * http://hl7.org/fhir/ValueSet/route-codes
 */
export const SNOMEDCTRouteCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SNOMEDCTRouteCodesCode =
  typeof SNOMEDCTRouteCodesCode[keyof typeof SNOMEDCTRouteCodesCode];
