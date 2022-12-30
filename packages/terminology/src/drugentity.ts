/**
 * A value representing the specific kind of Drug Entity the instance represents.
 * http://terminology.hl7.org/ValueSet/v3-DrugEntity
 */
export const DrugEntityCode = {
  /**
   * DrugEntity
   */
  _DrugEntity: "_DrugEntity",

  /**
   * ClinicalDrug
   */
  _ClinicalDrug: "_ClinicalDrug",

  /**
   * ActiveIngredientDrugEntityType
   */
  _ActiveIngredientDrugEntityType: "_ActiveIngredientDrugEntityType",

  /**
   * ManufacturedDrug
   */
  _ManufacturedDrug: "_ManufacturedDrug",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DrugEntityCode = typeof DrugEntityCode[keyof typeof DrugEntityCode];
