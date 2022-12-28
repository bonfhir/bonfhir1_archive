/**
 * The way in which a person authenticated a composition.
 * http://hl7.org/fhir/ValueSet/composition-attestation-mode
 */
export const CompositionAttestationModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CompositionAttestationModeCode =
  typeof CompositionAttestationModeCode[keyof typeof CompositionAttestationModeCode];
