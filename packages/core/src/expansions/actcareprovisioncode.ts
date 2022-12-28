/**
 * **Description:**The type and scope of responsibility taken-on by the performer of the Act for a specific subject of care.
 * http://terminology.hl7.org/ValueSet/v3-ActCareProvisionCode
 */
export const ActCareProvisionCodeCode = {
  /**
   * act care provision
   */
  _ActCareProvisionCode: "_ActCareProvisionCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCareProvisionCodeCode =
  typeof ActCareProvisionCodeCode[keyof typeof ActCareProvisionCodeCode];
