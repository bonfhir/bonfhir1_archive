/**
 * The type of cap associated with a container
 * http://terminology.hl7.org/ValueSet/v3-ContainerCap
 */
export const ContainerCapCode = {
  /**
   * Film
   */
  Film: "FILM",

  /**
   * Foil
   */
  Foil: "FOIL",

  /**
   * Push Cap
   */
  PushCap: "PUSH",

  /**
   * Screw Cap
   */
  ScrewCap: "SCR",

  /**
   * ChildProof
   */
  ChildProof: "CHILD",

  /**
   * EasyOpen
   */
  EasyOpen: "EASY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContainerCapCode =
  typeof ContainerCapCode[keyof typeof ContainerCapCode];
