/**
 * **Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by a credentialing agency, i.e. government or non-government agency. Failure in executing this Act may result in loss of credential to the person or organization who participates as performer of the Act. Excludes employment agreements.

**Example:**Hospital license; physician license; clinic accreditation.
 * http://terminology.hl7.org/ValueSet/v3-ActCredentialedCareCode
 */
export const ActCredentialedCareCodeCode = {
  /**
   * act credentialed care
   */
  _ActCredentialedCareCode: "_ActCredentialedCareCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCredentialedCareCodeCode =
  typeof ActCredentialedCareCodeCode[keyof typeof ActCredentialedCareCodeCode];
