/**
 * **Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing individuals.
 * http://terminology.hl7.org/ValueSet/v3-ActCredentialedCareProvisionPersonCode
 */
export const ActCredentialedCareProvisionPersonCodeCode = {
  /**
   * act credentialed care provision peron
   */
  _ActCredentialedCareProvisionPersonCode:
    "_ActCredentialedCareProvisionPersonCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCredentialedCareProvisionPersonCodeCode =
  typeof ActCredentialedCareProvisionPersonCodeCode[keyof typeof ActCredentialedCareProvisionPersonCodeCode];
