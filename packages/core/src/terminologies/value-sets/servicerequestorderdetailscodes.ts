/**
 * An example value set of Codified order entry details concepts.  These concepts only make sense in the context of what is being ordered.  This example is for a patient ventilation order
 * http://hl7.org/fhir/ValueSet/servicerequest-orderdetail
 */
export const ServiceRequestOrderDetailsCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ServiceRequestOrderDetailsCodesCode =
  typeof ServiceRequestOrderDetailsCodesCode[keyof typeof ServiceRequestOrderDetailsCodesCode];
