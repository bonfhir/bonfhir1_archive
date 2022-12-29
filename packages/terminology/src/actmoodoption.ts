/**
 * An option is an alternative set of property-value bindings. Options specify alternative sets of values, typically used in definitions or orders to describe alternatives. An option can only be used as a group, that is, all assigned values must be used together.

Historical note: in HL7 v2.x option existed in the special case for alternative medication routes (RXR segment).
 * http://terminology.hl7.org/ValueSet/v3-ActMoodOption
 */
export const ActMoodOptionCode = {
  /**
   * option
   */
  option: "OPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodOptionCode =
  typeof ActMoodOptionCode[keyof typeof ActMoodOptionCode];
