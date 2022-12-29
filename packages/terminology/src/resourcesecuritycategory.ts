/**
 * Provides general guidance around the kind of access Control to Read, Search, Create, Update, or Delete a resource.
 * http://terminology.hl7.org/ValueSet/resource-security-category
 */
export const ResourceSecurityCategoryCode = {
  /**
   * Anonymous READ Access Resource
   */
  AnonymousREADAccessResource: "anonymous",

  /**
   * Business Sensitive Resource
   */
  BusinessSensitiveResource: "business",

  /**
   * Individual Sensitive Resource
   */
  IndividualSensitiveResource: "individual",

  /**
   * Patient Sensitive
   */
  PatientSensitive: "patient",

  /**
   * Not classified
   */
  Notclassified: "not-classified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResourceSecurityCategoryCode =
  typeof ResourceSecurityCategoryCode[keyof typeof ResourceSecurityCategoryCode];
