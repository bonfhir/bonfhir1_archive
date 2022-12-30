/**
 * Relates a material as the content (player) to a container (scoper). Unlike ingredients, the content and a container remain separate (not mixed) and the content can be removed from the container. A content is not part of an empty container.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassContent
 */
export const RoleClassContentCode = {
  /**
   * content
   */
  CONT: "CONT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassContentCode =
  typeof RoleClassContentCode[keyof typeof RoleClassContentCode];
