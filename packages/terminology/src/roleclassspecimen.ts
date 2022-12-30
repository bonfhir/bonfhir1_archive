/**
 * A role played by a material entity that is a specimen for an act. It is scoped by the source of the specimen.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassSpecimen
 */
export const RoleClassSpecimenCode = {
  /**
   * specimen
   */
  SPEC: "SPEC",

  /**
   * aliquot
   */
  ALQT: "ALQT",

  /**
   * isolate
   */
  ISLT: "ISLT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassSpecimenCode =
  typeof RoleClassSpecimenCode[keyof typeof RoleClassSpecimenCode];
