/**
 * A code specifying the extent to which the Entity playing the participating Role (usually as a target Participation) is aware of the associated Act.

*Examples:* For diagnostic observations, is the patient, family member or other participant aware of his terminal illness?

*Discussion:* If the awareness, denial, unconsciousness, etc. is the subject of medical considerations (e.g., part of the problem list), one should use explicit observations in these matters as well, and should not solely rely on this simple attribute in the Participation.
 * http://terminology.hl7.org/ValueSet/v3-TargetAwareness
 */
export const TargetAwarenessCode = {
  /**
   * denying
   */
  denying: "D",

  /**
   * full awareness
   */
  fullawareness: "F",

  /**
   * incapable
   */
  incapable: "I",

  /**
   * marginal
   */
  marginal: "M",

  /**
   * partial
   */
  partial: "P",

  /**
   * uninformed
   */
  uninformed: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TargetAwarenessCode =
  typeof TargetAwarenessCode[keyof typeof TargetAwarenessCode];
