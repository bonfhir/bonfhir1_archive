/**
 * Value Set of codes that identify the specimen contaminant identifier associated with the specimen in the container.
 * http://terminology.hl7.org/ValueSet/v2-0374
 */
export const Hl7VSSystemInducedContaminantsCode = {
  /**
   * Present, type of contamination unspecified
   */
  Presenttypeofcontaminationunspecified: "CNTM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSystemInducedContaminantsCode =
  typeof Hl7VSSystemInducedContaminantsCode[keyof typeof Hl7VSSystemInducedContaminantsCode];
