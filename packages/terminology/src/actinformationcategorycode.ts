/**
 * **Definition:**Indicates the set of information types which may be manipulated or referenced, such as for recommending access restrictions.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationCategoryCode
 */
export const ActInformationCategoryCodeCode = {
  /**
   * allergy category
   */
  allergycategory: "ALLGCAT",

  /**
   * common observation category
   */
  commonobservationcategory: "COBSCAT",

  /**
   * demographics category
   */
  demographicscategory: "DEMOCAT",

  /**
   * diagnostic image category
   */
  diagnosticimagecategory: "DICAT",

  /**
   * immunization category
   */
  immunizationcategory: "IMMUCAT",

  /**
   * lab test category
   */
  labtestcategory: "LABCAT",

  /**
   * medical condition category
   */
  medicalconditioncategory: "MEDCCAT",

  /**
   * professional service category
   */
  professionalservicecategory: "PSVCCAT",

  /**
   * medication category
   */
  medicationcategory: "RXCAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationCategoryCodeCode =
  typeof ActInformationCategoryCodeCode[keyof typeof ActInformationCategoryCodeCode];
