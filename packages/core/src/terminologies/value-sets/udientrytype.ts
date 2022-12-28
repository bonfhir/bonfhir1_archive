/**
 * Codes to identify how UDI data was entered.
 * http://hl7.org/fhir/ValueSet/udi-entry-type
 */
export const UDIEntryTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UDIEntryTypeCode =
  typeof UDIEntryTypeCode[keyof typeof UDIEntryTypeCode];
