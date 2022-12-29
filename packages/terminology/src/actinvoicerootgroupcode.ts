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
  clinicalproductinvoice: "CPINV",

  /**
   * clinical product invoice
   */
  clinicalproductinvoice: "CP",

  /**
   * clinical service invoice
   */
  clinicalserviceinvoice: "CSINV",

  /**
   * clinical service invoice
   */
  clinicalserviceinvoice: "CS",

  /**
   * clinical service and product
   */
  clinicalserviceandproduct: "CSPINV",

  /**
   * financial invoice
   */
  financialinvoice: "FININV",

  /**
   * oral health service
   */
  oralhealthservice: "OHSINV",

  /**
   * preferred accommodation invoice
   */
  preferredaccommodationinvoice: "PAINV",

  /**
   * preferred accommodation invoice
   */
  preferredaccommodationinvoice: "PA",

  /**
   * Rx compound invoice
   */
  Rxcompoundinvoice: "RXCINV",

  /**
   * Rx compound invoice
   */
  Rxcompoundinvoice: "RXC",

  /**
   * Rx dispense invoice
   */
  Rxdispenseinvoice: "RXDINV",

  /**
   * Rx dispense invoice
   */
  Rxdispenseinvoice: "RXD",

  /**
   * sessional or block fee invoice
   */
  sessionalorblockfeeinvoice: "SBFINV",

  /**
   * vision dispense invoice
   */
  visiondispenseinvoice: "VRXINV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceRootGroupCodeCode =
  typeof ActInvoiceRootGroupCodeCode[keyof typeof ActInvoiceRootGroupCodeCode];
