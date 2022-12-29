/**
 * Value Set of codes that describe the evaluation state of a product identified in an incident.
 * http://terminology.hl7.org/ValueSet/v2-0248
 */
export const Hl7VSProductSourceCode = {
  /**
   * Actual product involved in incident was evaluated
   */
  Actualproductinvolvedinincidentwasevaluated: "A",

  /**
   * A product from the same lot as the actual product involved was evaluated
   */
  Aproductfromthesamelotastheactualproductinvolvedwasevaluated: "L",

  /**
   * A product from a reserve sample was evaluated
   */
  Aproductfromareservesamplewasevaluated: "R",

  /**
   * A product from a controlled/non-related inventory was evaluated
   */
  Aproductfromacontrollednonrelatedinventorywasevaluated: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProductSourceCode =
  typeof Hl7VSProductSourceCode[keyof typeof Hl7VSProductSourceCode];
