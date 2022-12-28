/**
 * This value set defines an example set of codes that could be can be used to classify groupings of service-types/specialties.
 * http://hl7.org/fhir/ValueSet/program
 */
export const ProgramCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProgramCode = typeof ProgramCode[keyof typeof ProgramCode];
