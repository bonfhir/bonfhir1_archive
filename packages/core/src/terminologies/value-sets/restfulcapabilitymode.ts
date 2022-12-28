/**
 * The mode of a RESTful capability statement.
 * http://hl7.org/fhir/ValueSet/restful-capability-mode
 */
export const RestfulCapabilityModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RestfulCapabilityModeCode =
  typeof RestfulCapabilityModeCode[keyof typeof RestfulCapabilityModeCode];
