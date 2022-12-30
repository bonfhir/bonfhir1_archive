/**
 * **Description:**A value set of product related role classCodes
 * http://terminology.hl7.org/ValueSet/v3-RoleClassProductRelated
 */
export const RoleClassProductRelatedCode = {
  /**
   * distributed material
   */
  DST: "DST",

  /**
   * manufactured product
   */
  MANU: "MANU",

  /**
   * retailed material
   */
  RET: "RET",

  /**
   * regulated product
   */
  RGPR: "RGPR",

  /**
   * therapeutic agent
   */
  THER: "THER",

  /**
   * warranted product
   */
  WRTE: "WRTE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassProductRelatedCode =
  typeof RoleClassProductRelatedCode[keyof typeof RoleClassProductRelatedCode];
