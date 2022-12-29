/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClassFolder
 */
export const ActClassFolderCode = {
  /**
   * folder
   */
  folder: "FOLDER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassFolderCode =
  typeof ActClassFolderCode[keyof typeof ActClassFolderCode];
