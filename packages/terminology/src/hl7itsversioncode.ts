/**
 * HL7 implementation technology specification versions. These codes will document the ITS type and version for message encoding. The code will appear in the instances based upon rules expressed in the ITS, and do not appear in the abstract message, either as it is presented to received from the ITS.
 * http://terminology.hl7.org/ValueSet/v3-HL7ITSVersionCode
 */
export const HL7ITSVersionCodeCode = {
  /**
   * XMLV1PR1
   */
  XMLV1PR1: "XMLV1PR1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7ITSVersionCodeCode =
  typeof HL7ITSVersionCodeCode[keyof typeof HL7ITSVersionCodeCode];
