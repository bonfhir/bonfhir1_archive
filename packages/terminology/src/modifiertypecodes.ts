/**
 * This value set includes sample Modifier type codes.
 * http://terminology.hl7.org/ValueSet/claim-modifiers
 */
export const ModifierTypeCodesCode = {
  /**
   * Repair of prior service or installation
   */
  Repairofpriorserviceorinstallation: "a",

  /**
   * Temporary service or installation
   */
  Temporaryserviceorinstallation: "b",

  /**
   * TMJ treatment
   */
  TMJtreatment: "c",

  /**
   * Implant or associated with an implant
   */
  Implantorassociatedwithanimplant: "e",

  /**
   * Rush or Outside of office hours
   */
  RushorOutsideofofficehours: "rooh",

  /**
   * None
   */
  None: "x",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ModifierTypeCodesCode =
  typeof ModifierTypeCodesCode[keyof typeof ModifierTypeCodesCode];
