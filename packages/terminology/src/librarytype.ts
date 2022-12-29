/**
 * The type of knowledge asset this library contains.
 * http://terminology.hl7.org/ValueSet/library-type
 */
export const LibraryTypeCode = {
  /**
   * Logic Library
   */
  LogicLibrary: "logic-library",

  /**
   * Model Definition
   */
  ModelDefinition: "model-definition",

  /**
   * Asset Collection
   */
  AssetCollection: "asset-collection",

  /**
   * Module Definition
   */
  ModuleDefinition: "module-definition",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LibraryTypeCode =
  typeof LibraryTypeCode[keyof typeof LibraryTypeCode];
