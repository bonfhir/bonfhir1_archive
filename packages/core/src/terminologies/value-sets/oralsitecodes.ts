/**
 * This value set includes a smattering of FDI oral site codes.
 * http://hl7.org/fhir/ValueSet/tooth
 */
export const OralSiteCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralSiteCodesCode =
  typeof OralSiteCodesCode[keyof typeof OralSiteCodesCode];
