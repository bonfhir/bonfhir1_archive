/**
 * A sterile solution intended to bathe or flush open wounds or body cavities; they're used topically, never parenterally.
 * http://terminology.hl7.org/ValueSet/v3-IrrigationSolution
 */
export const IrrigationSolutionCode = {
  /**
   * Irrigation Solution
   */
  IRSOL: "IRSOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IrrigationSolutionCode =
  typeof IrrigationSolutionCode[keyof typeof IrrigationSolutionCode];
