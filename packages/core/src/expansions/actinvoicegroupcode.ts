/**
 * Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.

Invoice elements of this type signify a grouping of one or more children (detail) invoice elements. They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceGroupCode
 */
export const ActInvoiceGroupCodeCode = {
  /**
   * ActInvoiceInterGroupCode
   */
  _ActInvoiceInterGroupCode: "_ActInvoiceInterGroupCode",

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

  /**
   * ActInvoiceRootGroupCode
   */
  _ActInvoiceRootGroupCode: "_ActInvoiceRootGroupCode",

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
export type ActInvoiceGroupCodeCode =
  typeof ActInvoiceGroupCodeCode[keyof typeof ActInvoiceGroupCodeCode];
