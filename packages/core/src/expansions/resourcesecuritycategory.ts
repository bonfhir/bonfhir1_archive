/**
 * Provides general guidance around the kind of access Control to Read, Search, Create, Update, or Delete a resource.
 * http://terminology.hl7.org/ValueSet/resource-security-category
 */
export const ResourceSecurityCategoryCode = {
  /**
   * Anonymous READ Access Resource
   */
  anonymous: "anonymous",

  /**
   * Business Sensitive Resource
   */
  business: "business",

  /**
   * Individual Sensitive Resource
   */
  individual: "individual",

  /**
   * Patient Sensitive
   */
  patient: "patient",

  /**
   * Not classified
   */
  "not-classified": "not-classified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResourceSecurityCategoryCode =
  typeof ResourceSecurityCategoryCode[keyof typeof ResourceSecurityCategoryCode];
