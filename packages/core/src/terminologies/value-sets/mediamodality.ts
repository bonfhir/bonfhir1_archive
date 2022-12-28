/**
 * Detailed information about the type of the image - its kind, purpose, or the kind of equipment used to generate it.
 * http://hl7.org/fhir/ValueSet/media-modality
 */
export const MediaModalityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MediaModalityCode =
  typeof MediaModalityCode[keyof typeof MediaModalityCode];
