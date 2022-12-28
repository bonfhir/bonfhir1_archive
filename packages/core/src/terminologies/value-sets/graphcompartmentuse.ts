/**
 * Defines how a compartment rule is used.
 * http://hl7.org/fhir/ValueSet/graph-compartment-use
 */
export const GraphCompartmentUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GraphCompartmentUseCode =
  typeof GraphCompartmentUseCode[keyof typeof GraphCompartmentUseCode];
