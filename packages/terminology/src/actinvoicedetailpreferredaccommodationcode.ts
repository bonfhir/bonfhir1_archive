/**
 * An identifying data string for medical facility accommodations.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailPreferredAccommodationCode
 */
export const ActInvoiceDetailPreferredAccommodationCodeCode = {
  /**
   * ActEncounterAccommodationCode
   */
  ActEncounterAccommodationCode: "_ActEncounterAccommodationCode",

  /**
   * HL7AccommodationCode
   */
  HL7AccommodationCode: "_HL7AccommodationCode",

  /**
   * Isolation
   */
  Isolation: "I",

  /**
   * Private
   */
  Private: "P",

  /**
   * Suite
   */
  Suite: "S",

  /**
   * Semi-private
   */
  Semiprivate: "SP",

  /**
   * Ward
   */
  Ward: "W",

  /**
   * HCPCSAccommodationCode
   */
  HCPCSAccommodationCode: "_HCPCSAccommodationCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailPreferredAccommodationCodeCode =
  typeof ActInvoiceDetailPreferredAccommodationCodeCode[keyof typeof ActInvoiceDetailPreferredAccommodationCodeCode];
