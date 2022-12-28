/**
 * Codes used to identify medical devices. Includes concepts from SNOMED CT (http://www.snomed.org/) where concept is-a 49062001 (Device)  and is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/device-kind
 */
export const FHIRDeviceTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRDeviceTypesCode =
  typeof FHIRDeviceTypesCode[keyof typeof FHIRDeviceTypesCode];
