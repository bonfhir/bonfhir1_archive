/**
 * **Definition:**Indicates the set of information types which may be manipulated or referenced, such as for recommending access restrictions.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationCategoryCode
 */
export const ActInformationCategoryCodeCode = {
  /**
   * allergy category
   */
  ALLGCAT: "ALLGCAT",

  /**
   * common observation category
   */
  COBSCAT: "COBSCAT",

  /**
   * demographics category
   */
  DEMOCAT: "DEMOCAT",

  /**
   * diagnostic image category
   */
  DICAT: "DICAT",

  /**
   * immunization category
   */
  IMMUCAT: "IMMUCAT",

  /**
   * lab test category
   */
  LABCAT: "LABCAT",

  /**
   * medical condition category
   */
  MEDCCAT: "MEDCCAT",

  /**
   * professional service category
   */
  PSVCCAT: "PSVCCAT",

  /**
   * medication category
   */
  RXCAT: "RXCAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationCategoryCodeCode =
  typeof ActInformationCategoryCodeCode[keyof typeof ActInformationCategoryCodeCode];
