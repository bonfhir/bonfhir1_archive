/**
 * Operations supported by REST at the system level.
 * http://hl7.org/fhir/ValueSet/system-restful-interaction
 */
export const SystemRestfulInteractionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SystemRestfulInteractionCode =
  typeof SystemRestfulInteractionCode[keyof typeof SystemRestfulInteractionCode];
