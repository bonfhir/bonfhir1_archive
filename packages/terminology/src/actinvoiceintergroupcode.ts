/**
 * Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.

Invoice elements of this type signify a grouping of one or more children (detail) invoice elements. They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.

The domain is only specified for an intermediate invoice element group (non-root or non-top level) for an Invoice.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceInterGroupCode
 */
export const ActInvoiceInterGroupCodeCode = {
  /**
   * compound drug invoice group
   */
  CPNDDRGING: "CPNDDRGING",

  /**
   * compound ingredient invoice group
   */
  CPNDINDING: "CPNDINDING",

  /**
   * compound supply invoice group
   */
  CPNDSUPING: "CPNDSUPING",

  /**
   * drug invoice group
   */
  DRUGING: "DRUGING",

  /**
   * frame invoice group
   */
  FRAMEING: "FRAMEING",

  /**
   * lens invoice group
   */
  LENSING: "LENSING",

  /**
   * product invoice group
   */
  PRDING: "PRDING",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceInterGroupCodeCode =
  typeof ActInvoiceInterGroupCodeCode[keyof typeof ActInvoiceInterGroupCodeCode];
