/**
 * Corresponds to the ManufacturedMaterial class
 * http://terminology.hl7.org/ValueSet/v3-EntityClassManufacturedMaterial
 */
export const EntityClassManufacturedMaterialCode = {
  /**
   * manufactured material
   */
  MMAT: "MMAT",

  /**
   * container
   */
  CONT: "CONT",

  /**
   * holder
   */
  HOLD: "HOLD",

  /**
   * device
   */
  DEV: "DEV",

  /**
   * certificate representation
   */
  CER: "CER",

  /**
   * imaging modality
   */
  MODDV: "MODDV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassManufacturedMaterialCode =
  typeof EntityClassManufacturedMaterialCode[keyof typeof EntityClassManufacturedMaterialCode];
