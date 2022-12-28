/**
 * Supply orders and deliveries are simple Acts that focus on the delivered product. The product is associated with the Supply Act via Participation.typeCode="product". With general Supply Acts, the precise identification of the Material (manufacturer, serial numbers, etc.) is important. Most of the detailed information about the Supply should be represented using the Material class. If delivery needs to be scheduled, tracked, and billed separately, one can associate a Transportation Act with the Supply Act. Pharmacy dispense services are represented as Supply Acts, associated with a SubstanceAdministration Act. The SubstanceAdministration class represents the administration of medication, while dispensing is supply.
 * http://terminology.hl7.org/ValueSet/v3-ActClassSupply
 */
export const ActClassSupplyCode = {
  /**
   * supply
   */
  SPLY: "SPLY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassSupplyCode =
  typeof ActClassSupplyCode[keyof typeof ActClassSupplyCode];
