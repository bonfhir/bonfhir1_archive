/**
 * Describes the type of substance administration being performed.
 * http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdministrationCode
 */
export const ActSubstanceAdministrationCodeCode = {
  /**
   * ActSubstanceAdministrationCode
   */
  ActSubstanceAdministrationCode: "_ActSubstanceAdministrationCode",

  /**
   * Drug therapy
   */
  Drugtherapy: "DRUG",

  /**
   * food
   */
  food: "FD",

  /**
   * Immunization
   */
  Immunization: "IMMUNIZ",

  /**
   * Booster Immunization
   */
  BoosterImmunization: "BOOSTER",

  /**
   * Initial Immunization
   */
  InitialImmunization: "INITIMMUNIZ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSubstanceAdministrationCodeCode =
  typeof ActSubstanceAdministrationCodeCode[keyof typeof ActSubstanceAdministrationCodeCode];
