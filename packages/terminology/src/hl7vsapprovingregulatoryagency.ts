/**
 * Value Set of codes that specify the regulatory agency by which the item has been approved, such as the FDA or AMA.
 * http://terminology.hl7.org/ValueSet/v2-0790
 */
export const Hl7VSApprovingRegulatoryAgencyCode = {
  /**
   * Food and Drug Administration
   */
  FoodandDrugAdministration: "FDA",

  /**
   * American Medical Association
   */
  AmericanMedicalAssociation: "AMA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSApprovingRegulatoryAgencyCode =
  typeof Hl7VSApprovingRegulatoryAgencyCode[keyof typeof Hl7VSApprovingRegulatoryAgencyCode];
