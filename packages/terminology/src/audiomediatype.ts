/**
 * Audio media type.
 * http://terminology.hl7.org/ValueSet/v3-AudioMediaType
 */
export const AudioMediaTypeCode = {
  /**
   * Basic Audio
   */
  BasicAudio: "audio/basic",

  /**
   * K32ADPCM Audio
   */
  K32ADPCMAudio: "audio/k32adpcm",

  /**
   * MPEG audio layer 3
   */
  MPEGaudiolayer3: "audio/mpeg",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AudioMediaTypeCode =
  typeof AudioMediaTypeCode[keyof typeof AudioMediaTypeCode];
