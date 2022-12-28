/**
 * **Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing individuals.
 * http://terminology.hl7.org/ValueSet/v3-ActCredentialedCareProvisionProgramCode
 */
export const ActCredentialedCareProvisionProgramCodeCode = {
  /**
   * act credentialed care provision program
   */
  _ActCredentialedCareProvisionProgramCode:
    "_ActCredentialedCareProvisionProgramCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCredentialedCareProvisionProgramCodeCode =
  typeof ActCredentialedCareProvisionProgramCodeCode[keyof typeof ActCredentialedCareProvisionProgramCodeCode];
