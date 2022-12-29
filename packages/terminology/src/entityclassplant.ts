/**
 * A living subject from the order of plants.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassPlant
 */
export const EntityClassPlantCode = {
  /**
   * plant
   */
  plant: "PLNT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassPlantCode =
  typeof EntityClassPlantCode[keyof typeof EntityClassPlantCode];
