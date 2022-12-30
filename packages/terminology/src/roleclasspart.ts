/**
 * An association between two Entities where the playing Entity is considered in some way "part" of the scoping Entity, e.g., as a member, component, ingredient, or content. Being "part" in the broadest sense of the word can mean anything from being an integral structural component to a mere incidental temporary association of a playing Entity with a (generally larger) scoping Entity.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPart
 */
export const RoleClassPartCode = {
  /**
   * part
   */
  PART: "PART",

  /**
   * active moiety
   */
  ACTM: "ACTM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPartCode =
  typeof RoleClassPartCode[keyof typeof RoleClassPartCode];
