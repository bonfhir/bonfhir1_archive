/**
 * Value Set of codes that identify the specimen component, e.g., supernatant, sediment, etc.
 * http://terminology.hl7.org/ValueSet/v2-0372
 */
export const Hl7VSSpecimenComponentCode = {
  /**
   * Supernatant
   */
  SUP: "SUP",

  /**
   * Sediment
   */
  SED: "SED",

  /**
   * Whole blood, homogeneous
   */
  BLD: "BLD",

  /**
   * Whole blood, separated
   */
  BSEP: "BSEP",

  /**
   * Platelet rich plasma
   */
  PRP: "PRP",

  /**
   * Platelet poor plasma
   */
  PPP: "PPP",

  /**
   * Serum, NOS (not otherwise specified)
   */
  SER: "SER",

  /**
   * Plasma, NOS (not otherwise specified)
   */
  PLAS: "PLAS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenComponentCode =
  typeof Hl7VSSpecimenComponentCode[keyof typeof Hl7VSSpecimenComponentCode];
