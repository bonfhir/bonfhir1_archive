/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CompressionAlgorithm
 */
export const CompressionAlgorithmCode = {
  /**
   * bzip
   */
  BZ: "BZ",

  /**
   * deflate
   */
  DF: "DF",

  /**
   * gzip
   */
  GZ: "GZ",

  /**
   * compress
   */
  Z: "Z",

  /**
   * Z7
   */
  Z7: "Z7",

  /**
   * zlib
   */
  ZL: "ZL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CompressionAlgorithmCode =
  typeof CompressionAlgorithmCode[keyof typeof CompressionAlgorithmCode];
