/**
 * An interactant - a substance that may have an clinically significant effect on another.
 * http://hl7.org/fhir/ValueSet/interactant
 */
export const InteractantCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteractantCode =
  typeof InteractantCode[keyof typeof InteractantCode];
