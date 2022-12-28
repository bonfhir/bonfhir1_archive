/**
 * The type of knowledge asset this library contains.
 * http://terminology.hl7.org/ValueSet/library-type
 */
export const LibraryTypeCode = {
  /**
   * Logic Library
   */
  "logic-library": "logic-library",

  /**
   * Model Definition
   */
  "model-definition": "model-definition",

  /**
   * Asset Collection
   */
  "asset-collection": "asset-collection",

  /**
   * Module Definition
   */
  "module-definition": "module-definition",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LibraryTypeCode =
  typeof LibraryTypeCode[keyof typeof LibraryTypeCode];
