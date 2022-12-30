/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-VerificationMethod
 */
export const VerificationMethodCode = {
  /**
   * VerificationMethod
   */
  _VerificationMethod: "_VerificationMethod",

  /**
   * document verification
   */
  VDOC: "VDOC",

  /**
   * registry verification
   */
  VREG: "VREG",

  /**
   * electronic token verification
   */
  VTOKEN: "VTOKEN",

  /**
   * voice-based verification
   */
  VVOICE: "VVOICE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VerificationMethodCode =
  typeof VerificationMethodCode[keyof typeof VerificationMethodCode];
