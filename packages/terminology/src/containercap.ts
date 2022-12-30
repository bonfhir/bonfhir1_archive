/**
 * The type of cap associated with a container
 * http://terminology.hl7.org/ValueSet/v3-ContainerCap
 */
export const ContainerCapCode = {
  /**
   * Film
   */
  FILM: "FILM",

  /**
   * Foil
   */
  FOIL: "FOIL",

  /**
   * Push Cap
   */
  PUSH: "PUSH",

  /**
   * Screw Cap
   */
  SCR: "SCR",

  /**
   * ChildProof
   */
  CHILD: "CHILD",

  /**
   * EasyOpen
   */
  EASY: "EASY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContainerCapCode =
  typeof ContainerCapCode[keyof typeof ContainerCapCode];
