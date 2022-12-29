/**
 * **Description:**A value set of product related role classCodes
 * http://terminology.hl7.org/ValueSet/v3-RoleClassProductRelated
 */
export const RoleClassProductRelatedCode = {
  /**
   * distributed material
   */
  distributedmaterial: "DST",

  /**
   * manufactured product
   */
  manufacturedproduct: "MANU",

  /**
   * retailed material
   */
  retailedmaterial: "RET",

  /**
   * regulated product
   */
  regulatedproduct: "RGPR",

  /**
   * therapeutic agent
   */
  therapeuticagent: "THER",

  /**
   * warranted product
   */
  warrantedproduct: "WRTE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassProductRelatedCode =
  typeof RoleClassProductRelatedCode[keyof typeof RoleClassProductRelatedCode];
