/**
 * The introduction of an immunogen with the intent of stimulating an immune response, aimed at preventing subsequent infections by more viable agents.
 * http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdministrationImmunizationCode
 */
export const ActSubstanceAdministrationImmunizationCodeCode = {
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
export type ActSubstanceAdministrationImmunizationCodeCode =
  typeof ActSubstanceAdministrationImmunizationCodeCode[keyof typeof ActSubstanceAdministrationImmunizationCodeCode];
