/**
 * Describes the type of substance administration being performed.
 * http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdministrationCode
 */
export const ActSubstanceAdministrationCodeCode = {
  /**
   * ActSubstanceAdministrationCode
   */
  _ActSubstanceAdministrationCode: "_ActSubstanceAdministrationCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSubstanceAdministrationCodeCode =
  typeof ActSubstanceAdministrationCodeCode[keyof typeof ActSubstanceAdministrationCodeCode];
