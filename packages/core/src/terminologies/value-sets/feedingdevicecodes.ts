/**
 * Materials used or needed to feed the patient.
 * http://hl7.org/fhir/ValueSet/feeding-device
 */
export const FeedingDeviceCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FeedingDeviceCodesCode =
  typeof FeedingDeviceCodesCode[keyof typeof FeedingDeviceCodesCode];
