/**
 * A code indicating whether the Act statement as a whole, with its subordinate components has been asserted to be uncertain in any way.

*Examples:* Patient might have had a cholecystectomy procedure in the past (but isn't sure).

*Constraints:* Uncertainty asserted using this attribute applies to the combined meaning of the Act statement established by all descriptive attributes (e.g., Act.code, Act.effectiveTime, Observation.value, SubstanceAdministration.doseQuantity, etc.), and the meanings of any components.

*Discussion:*This is not intended for use to replace or compete with uncertainty associated with a Observation.values alone or other individual attributes of the class. Such pointed indications of uncertainty should be specified by applying the PPD, UVP or UVN data type extensions to the specific attribute. Particularly if the uncertainty is uncertainty of a quantitative measurement value, this must still be represented by a PPD<PQ> in the value and NOT using the uncertaintyCode. Also, when differential diagnoses are enumerated or weighed for probability, the UVP<CD> or UVN<CD> must be used, not the uncertaintyCode. The use of the uncertaintyCode is appropriate only if the entirety of the Act and its dependent Acts is questioned.

Note that very vague uncertainty may be thought related to negationInd, however, the two concepts are really independent. One may be very uncertain about an event, but that does not mean that one is certain about the negation of the event.
 * http://terminology.hl7.org/ValueSet/v3-ActUncertainty
 */
export const ActUncertaintyCode = {
  /**
   * stated with no assertion of uncertainty
   */
  N: "N",

  /**
   * stated with uncertainty
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActUncertaintyCode =
  typeof ActUncertaintyCode[keyof typeof ActUncertaintyCode];
