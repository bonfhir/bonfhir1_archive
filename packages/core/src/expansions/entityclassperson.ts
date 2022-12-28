/**
 * A living subject of the species homo sapiens.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassPerson
 */
export const EntityClassPersonCode = {
  /**
   * person
   */
  PSN: "PSN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassPersonCode =
  typeof EntityClassPersonCode[keyof typeof EntityClassPersonCode];
