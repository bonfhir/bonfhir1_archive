/**
 * Class for holding attributes unique to diagnostic images.
 * http://terminology.hl7.org/ValueSet/v3-ActClassDiagnosticImage
 */
export const ActClassDiagnosticImageCode = {
  /**
   * diagnostic image
   */
  DGIMG: "DGIMG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassDiagnosticImageCode =
  typeof ActClassDiagnosticImageCode[keyof typeof ActClassDiagnosticImageCode];
