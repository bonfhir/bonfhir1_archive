/**
 * **Description:**A code specifying the meaning and purpose of every TransmissionRelationship instance. Each of its values implies specific constraints to what kinds of Transmission objects can be related and in which way.
 * http://terminology.hl7.org/ValueSet/v3-TransmissionRelationshipTypeCode
 */
export const TransmissionRelationshipTypeCodeCode = {
  /**
   * sequence
   */
  sequence: "SEQL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TransmissionRelationshipTypeCodeCode =
  typeof TransmissionRelationshipTypeCodeCode[keyof typeof TransmissionRelationshipTypeCodeCode];
