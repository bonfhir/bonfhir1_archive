/**
 * Any thing that has extension in space and mass, may be of living or non-living origin.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassMaterial
 */
export const EntityClassMaterialCode = {
  /**
   * material
   */
  MAT: "MAT",

  /**
   * chemical substance
   */
  CHEM: "CHEM",

  /**
   * food
   */
  FOOD: "FOOD",

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
export type EntityClassMaterialCode =
  typeof EntityClassMaterialCode[keyof typeof EntityClassMaterialCode];
