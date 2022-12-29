/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClassDiet
 */
export const ActClassDietCode = {
  /**
   * diet
   */
  diet: "DIET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassDietCode =
  typeof ActClassDietCode[keyof typeof ActClassDietCode];
