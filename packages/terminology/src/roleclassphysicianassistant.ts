/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPhysicianAssistant
 */
export const RoleClassPhysicianAssistantCode = {
  /**
   * physician assistant
   */
  PA: "PA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPhysicianAssistantCode =
  typeof RoleClassPhysicianAssistantCode[keyof typeof RoleClassPhysicianAssistantCode];
