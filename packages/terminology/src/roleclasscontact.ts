/**
 * A person or an organization (player) which provides or receives information regarding another entity (scoper). Examples; patient NOK and emergency contacts; guarantor contact; employer contact.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassContact
 */
export const RoleClassContactCode = {
  /**
   * contact
   */
  contact: "CON",

  /**
   * emergency contact
   */
  emergencycontact: "ECON",

  /**
   * next of kin
   */
  nextofkin: "NOK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassContactCode =
  typeof RoleClassContactCode[keyof typeof RoleClassContactCode];
