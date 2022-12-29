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
  compounddruginvoicegroup: "CPNDDRGING",

  /**
   * compound ingredient invoice group
   */
  compoundingredientinvoicegroup: "CPNDINDING",

  /**
   * compound supply invoice group
   */
  compoundsupplyinvoicegroup: "CPNDSUPING",

  /**
   * drug invoice group
   */
  druginvoicegroup: "DRUGING",

  /**
   * frame invoice group
   */
  frameinvoicegroup: "FRAMEING",

  /**
   * lens invoice group
   */
  lensinvoicegroup: "LENSING",

  /**
   * product invoice group
   */
  productinvoicegroup: "PRDING",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceInterGroupCodeCode =
  typeof ActInvoiceInterGroupCodeCode[keyof typeof ActInvoiceInterGroupCodeCode];
