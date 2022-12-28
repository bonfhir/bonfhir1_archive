/**
 * This value set includes a smattering of USCLS codes.
 * http://hl7.org/fhir/ValueSet/service-uscls
 */
export const USCLSCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type USCLSCodesCode = typeof USCLSCodesCode[keyof typeof USCLSCodesCode];
