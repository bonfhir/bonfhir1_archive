/**
 * A named tag set for metadata used to populate a security category label field that "segments" an IT resource per policy by indicating that access and use is restricted to members of a defined community or project. (HL7 Healthcare Privacy and Security Classification System)

*Usage Note:* This is the healthcare analog to the US Intelligence Community's concept of a Special Access Program. Compartment codes may be used in as a field value in an initiator's clearance to indicate permission to access and use an IT Resource with a security label having the same compartment value in security category label field.

Map: Aligns with ISO 2382-8 definition of Compartment - "A division of data into isolated blocks with separate security controls for the purpose of reducing risk."
 * http://terminology.hl7.org/ValueSet/v3-Compartment
 */
export const CompartmentCode = {
  /**
   * compartment
   */
  COMPT: "COMPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CompartmentCode =
  typeof CompartmentCode[keyof typeof CompartmentCode];
