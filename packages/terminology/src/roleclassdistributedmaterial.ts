/**
 * A material (player) distributed by a distributor (scoper) who functions between a manufacturer and a buyer or retailer.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassDistributedMaterial
 */
export const RoleClassDistributedMaterialCode = {
  /**
   * distributed material
   */
  distributedmaterial: "DST",

  /**
   * retailed material
   */
  retailedmaterial: "RET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassDistributedMaterialCode =
  typeof RoleClassDistributedMaterialCode[keyof typeof RoleClassDistributedMaterialCode];
