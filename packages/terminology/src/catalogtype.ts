/**
 * The type of catalog.
 * http://terminology.hl7.org/ValueSet/catalogType
 */
export const CatalogTypeCode = {
  /**
   * Medication Catalog
   */
  MedicationCatalog: "medication",

  /**
   * Device Catalog
   */
  DeviceCatalog: "device",

  /**
   * Protocol List
   */
  ProtocolList: "protocol",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CatalogTypeCode =
  typeof CatalogTypeCode[keyof typeof CatalogTypeCode];
