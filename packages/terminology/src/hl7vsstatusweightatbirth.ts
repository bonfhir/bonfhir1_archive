/**
 * Value Set of codes that specify the status of the use of the weight at birth for diagnosis related group (DRG) determination.
 * http://terminology.hl7.org/ValueSet/v2-0755
 */
export const Hl7VSStatusWeightAtBirthCode = {
  /**
   * No weight reported at admission used for grouping
   */
  "0": "0",

  /**
   * Weight reported at admission used for grouping
   */
  "1": "1",

  /**
   * Default weight (>2499g) used for grouping
   */
  "2": "2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSStatusWeightAtBirthCode =
  typeof Hl7VSStatusWeightAtBirthCode[keyof typeof Hl7VSStatusWeightAtBirthCode];
