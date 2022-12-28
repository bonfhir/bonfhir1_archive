/**
 * A material in a blood collection container that facilites the separation of of blood cells from serum or plasma
 * http://terminology.hl7.org/ValueSet/v3-ContainerSeparator
 */
export const ContainerSeparatorCode = {
  /**
   * Gel
   */
  GEL: "GEL",

  /**
   * None
   */
  NONE: "NONE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContainerSeparatorCode =
  typeof ContainerSeparatorCode[keyof typeof ContainerSeparatorCode];
