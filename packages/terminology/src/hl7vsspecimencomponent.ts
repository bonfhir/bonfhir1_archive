/**
 * Value Set of codes that identify the specimen component, e.g., supernatant, sediment, etc.
 * http://terminology.hl7.org/ValueSet/v2-0372
 */
export const Hl7VSSpecimenComponentCode = {
  /**
   * Supernatant
   */
  Supernatant: "SUP",

  /**
   * Sediment
   */
  Sediment: "SED",

  /**
   * Whole blood, homogeneous
   */
  Wholebloodhomogeneous: "BLD",

  /**
   * Whole blood, separated
   */
  Wholebloodseparated: "BSEP",

  /**
   * Platelet rich plasma
   */
  Plateletrichplasma: "PRP",

  /**
   * Platelet poor plasma
   */
  Plateletpoorplasma: "PPP",

  /**
   * Serum, NOS (not otherwise specified)
   */
  SerumNOSnototherwisespecified: "SER",

  /**
   * Plasma, NOS (not otherwise specified)
   */
  PlasmaNOSnototherwisespecified: "PLAS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenComponentCode =
  typeof Hl7VSSpecimenComponentCode[keyof typeof Hl7VSSpecimenComponentCode];
