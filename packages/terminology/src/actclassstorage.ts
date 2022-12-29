/**
 * The act of putting something away for safe keeping. The "something" may be physical object such as a specimen, or information, such as observations regarding a specimen.
 * http://terminology.hl7.org/ValueSet/v3-ActClassStorage
 */
export const ActClassStorageCode = {
  /**
   * storage
   */
  storage: "STORE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassStorageCode =
  typeof ActClassStorageCode[keyof typeof ActClassStorageCode];
