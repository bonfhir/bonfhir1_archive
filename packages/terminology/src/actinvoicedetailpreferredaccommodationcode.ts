/**
 * An identifying data string for medical facility accommodations.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailPreferredAccommodationCode
 */
export const ActInvoiceDetailPreferredAccommodationCodeCode = {
  /**
   * ActEncounterAccommodationCode
   */
  _ActEncounterAccommodationCode: "_ActEncounterAccommodationCode",

  /**
   * HL7AccommodationCode
   */
  _HL7AccommodationCode: "_HL7AccommodationCode",

  /**
   * Isolation
   */
  I: "I",

  /**
   * Private
   */
  P: "P",

  /**
   * Suite
   */
  S: "S",

  /**
   * Semi-private
   */
  SP: "SP",

  /**
   * Ward
   */
  W: "W",

  /**
   * HCPCSAccommodationCode
   */
  _HCPCSAccommodationCode: "_HCPCSAccommodationCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailPreferredAccommodationCodeCode =
  typeof ActInvoiceDetailPreferredAccommodationCodeCode[keyof typeof ActInvoiceDetailPreferredAccommodationCodeCode];
