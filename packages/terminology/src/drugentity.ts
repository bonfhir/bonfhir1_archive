/**
 * A value representing the specific kind of Drug Entity the instance represents.
 * http://terminology.hl7.org/ValueSet/v3-DrugEntity
 */
export const DrugEntityCode = {
  /**
   * DrugEntity
   */
  DrugEntity: "_DrugEntity",

  /**
   * ClinicalDrug
   */
  ClinicalDrug: "_ClinicalDrug",

  /**
   * ActiveIngredientDrugEntityType
   */
  ActiveIngredientDrugEntityType: "_ActiveIngredientDrugEntityType",

  /**
   * ManufacturedDrug
   */
  ManufacturedDrug: "_ManufacturedDrug",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DrugEntityCode = typeof DrugEntityCode[keyof typeof DrugEntityCode];
