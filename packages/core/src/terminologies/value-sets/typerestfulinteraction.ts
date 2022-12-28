/**
 * Operations supported by REST at the type or instance level.
 * http://hl7.org/fhir/ValueSet/type-restful-interaction
 */
export const TypeRestfulInteractionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TypeRestfulInteractionCode =
  typeof TypeRestfulInteractionCode[keyof typeof TypeRestfulInteractionCode];
