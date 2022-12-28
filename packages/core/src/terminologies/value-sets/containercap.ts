/**
 * Color of the container cap.
 * http://hl7.org/fhir/ValueSet/container-cap
 */
export const ContainerCapCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContainerCapCode =
  typeof ContainerCapCode[keyof typeof ContainerCapCode];
