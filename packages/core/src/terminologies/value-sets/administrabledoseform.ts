/**
 * Dose form for a medication, in the form suitable for administering to the patient, after mixing, where necessary.
 * http://hl7.org/fhir/ValueSet/administrable-dose-form
 */
export const AdministrableDoseFormCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdministrableDoseFormCode =
  typeof AdministrableDoseFormCode[keyof typeof AdministrableDoseFormCode];
