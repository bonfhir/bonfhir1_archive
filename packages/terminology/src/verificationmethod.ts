/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-VerificationMethod
 */
export const VerificationMethodCode = {
  /**
   * VerificationMethod
   */
  VerificationMethod: "_VerificationMethod",

  /**
   * document verification
   */
  documentverification: "VDOC",

  /**
   * registry verification
   */
  registryverification: "VREG",

  /**
   * electronic token verification
   */
  electronictokenverification: "VTOKEN",

  /**
   * voice-based verification
   */
  voicebasedverification: "VVOICE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VerificationMethodCode =
  typeof VerificationMethodCode[keyof typeof VerificationMethodCode];
