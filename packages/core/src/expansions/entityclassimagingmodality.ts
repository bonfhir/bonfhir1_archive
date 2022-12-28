/**
 * Class to contain unique attributes of diagnostic imaging equipment.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassImagingModality
 */
export const EntityClassImagingModalityCode = {
  /**
   * imaging modality
   */
  MODDV: "MODDV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassImagingModalityCode =
  typeof EntityClassImagingModalityCode[keyof typeof EntityClassImagingModalityCode];
