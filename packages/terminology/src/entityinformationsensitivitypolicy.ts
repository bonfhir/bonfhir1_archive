/**
 * EntitySensitivity codes are used to convey a policy that is applicable to sensitive information conveyed by an entity attribute. May be used to bind a Role.confidentialityCode associated with an Entity per organizational policy. Role.confidentialityCode is defined in the RIM as "an indication of the appropriate disclosure of information about this Role with respect to the playing Entity."
 * http://terminology.hl7.org/ValueSet/v3-EntityInformationSensitivityPolicy
 */
export const EntityInformationSensitivityPolicyCode = {
  /**
   * EntityInformationSensitivityPolicy
   */
  _EntitySensitivityPolicyType: "_EntitySensitivityPolicyType",

  /**
   * all demographic information sensitivity
   */
  DEMO: "DEMO",

  /**
   * date of birth information sensitivity
   */
  DOB: "DOB",

  /**
   * gender and sexual orientation information sensitivity
   */
  GENDER: "GENDER",

  /**
   * living arrangement information sensitivity
   */
  LIVARG: "LIVARG",

  /**
   * marital status information sensitivity
   */
  MARST: "MARST",

  /**
   * patient location
   */
  PATLOC: "PATLOC",

  /**
   * race information sensitivity
   */
  RACE: "RACE",

  /**
   * religion information sensitivity
   */
  REL: "REL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityInformationSensitivityPolicyCode =
  typeof EntityInformationSensitivityPolicyCode[keyof typeof EntityInformationSensitivityPolicyCode];
