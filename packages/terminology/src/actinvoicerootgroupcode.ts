/**
 * Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.

Invoice elements of this type signify a grouping of one or more children (detail) invoice elements. They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.

Codes from this domain reflect the type of Invoice such as Pharmacy Dispense, Clinical Service and Clinical Product. The domain is only specified for the root (top level) invoice element group for an Invoice.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceRootGroupCode
 */
export const ActInvoiceRootGroupCodeCode = {
  /**
   * clinical product invoice
   */
  CPINV: "CPINV",

  /**
   * clinical product invoice
   */
  CP: "CP",

  /**
   * clinical service invoice
   */
  CSINV: "CSINV",

  /**
   * clinical service invoice
   */
  CS: "CS",

  /**
   * clinical service and product
   */
  CSPINV: "CSPINV",

  /**
   * financial invoice
   */
  FININV: "FININV",

  /**
   * oral health service
   */
  OHSINV: "OHSINV",

  /**
   * preferred accommodation invoice
   */
  PAINV: "PAINV",

  /**
   * preferred accommodation invoice
   */
  PA: "PA",

  /**
   * Rx compound invoice
   */
  RXCINV: "RXCINV",

  /**
   * Rx compound invoice
   */
  RXC: "RXC",

  /**
   * Rx dispense invoice
   */
  RXDINV: "RXDINV",

  /**
   * Rx dispense invoice
   */
  RXD: "RXD",

  /**
   * sessional or block fee invoice
   */
  SBFINV: "SBFINV",

  /**
   * vision dispense invoice
   */
  VRXINV: "VRXINV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceRootGroupCodeCode =
  typeof ActInvoiceRootGroupCodeCode[keyof typeof ActInvoiceRootGroupCodeCode];
