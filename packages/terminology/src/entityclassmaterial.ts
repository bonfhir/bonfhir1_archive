/**
 * Any thing that has extension in space and mass, may be of living or non-living origin.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassMaterial
 */
export const EntityClassMaterialCode = {
  /**
   * material
   */
  material: "MAT",

  /**
   * chemical substance
   */
  chemicalsubstance: "CHEM",

  /**
   * food
   */
  food: "FOOD",

  /**
   * manufactured material
   */
  manufacturedmaterial: "MMAT",

  /**
   * container
   */
  container: "CONT",

  /**
   * holder
   */
  holder: "HOLD",

  /**
   * device
   */
  device: "DEV",

  /**
   * certificate representation
   */
  certificaterepresentation: "CER",

  /**
   * imaging modality
   */
  imagingmodality: "MODDV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassMaterialCode =
  typeof EntityClassMaterialCode[keyof typeof EntityClassMaterialCode];
