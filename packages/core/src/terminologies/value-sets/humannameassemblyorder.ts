/**
 * A code that represents the preferred display order of the components of a human name.
 * http://hl7.org/fhir/ValueSet/name-assembly-order
 */
export const HumanNameAssemblyOrderCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HumanNameAssemblyOrderCode =
  typeof HumanNameAssemblyOrderCode[keyof typeof HumanNameAssemblyOrderCode];
