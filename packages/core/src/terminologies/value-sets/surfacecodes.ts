/**
 * This value set includes a smattering of FDI tooth surface codes.
 * http://hl7.org/fhir/ValueSet/surface
 */
export const SurfaceCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SurfaceCodesCode =
  typeof SurfaceCodesCode[keyof typeof SurfaceCodesCode];
