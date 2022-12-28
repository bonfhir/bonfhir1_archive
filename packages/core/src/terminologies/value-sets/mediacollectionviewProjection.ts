/**
 * Codes defined in SNOMED CT that can be used to record Media Recording views.
 * http://hl7.org/fhir/ValueSet/media-view
 */
export const MediaCollectionViewProjectionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MediaCollectionViewProjectionCode =
  typeof MediaCollectionViewProjectionCode[keyof typeof MediaCollectionViewProjectionCode];
