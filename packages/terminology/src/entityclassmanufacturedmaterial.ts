/**
 * Corresponds to the ManufacturedMaterial class
 * http://terminology.hl7.org/ValueSet/v3-EntityClassManufacturedMaterial
 */
export const EntityClassManufacturedMaterialCode = {
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
export type EntityClassManufacturedMaterialCode =
  typeof EntityClassManufacturedMaterialCode[keyof typeof EntityClassManufacturedMaterialCode];
