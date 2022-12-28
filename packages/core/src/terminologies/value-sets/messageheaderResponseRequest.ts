/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 * http://hl7.org/fhir/ValueSet/messageheader-response-request
 */
export const messageheaderresponserequestCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type messageheaderresponserequestCode =
  typeof messageheaderresponserequestCode[keyof typeof messageheaderresponserequestCode];
