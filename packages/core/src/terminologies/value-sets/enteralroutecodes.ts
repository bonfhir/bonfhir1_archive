/**
 * EnteralRouteOfAdministration: Codes specifying the route of administration of enteral formula.  This value set is composed of HL7 V3 codes and is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/enteral-route
 */
export const EnteralRouteCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EnteralRouteCodesCode =
  typeof EnteralRouteCodesCode[keyof typeof EnteralRouteCodesCode];
