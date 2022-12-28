/**
 * Intratendinous
 * http://terminology.hl7.org/ValueSet/v3-IntratendinousRoute
 */
export const IntratendinousRouteCode = {
  /**
   * Injection, intratendinous
   */
  ITENDINJ: "ITENDINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntratendinousRouteCode =
  typeof IntratendinousRouteCode[keyof typeof IntratendinousRouteCode];
