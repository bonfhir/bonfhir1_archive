/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CompressionAlgorithm
 */
export const CompressionAlgorithmCode = {
  /**
   * bzip
   */
  bzip: "BZ",

  /**
   * deflate
   */
  deflate: "DF",

  /**
   * gzip
   */
  gzip: "GZ",

  /**
   * compress
   */
  compress: "Z",

  /**
   * Z7
   */
  Z7: "Z7",

  /**
   * zlib
   */
  zlib: "ZL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CompressionAlgorithmCode =
  typeof CompressionAlgorithmCode[keyof typeof CompressionAlgorithmCode];
