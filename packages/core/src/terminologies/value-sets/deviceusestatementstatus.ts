/**
 * A coded concept indicating the current status of the Device Usage.
 * http://hl7.org/fhir/ValueSet/device-statement-status
 */
export const DeviceUseStatementStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceUseStatementStatusCode =
  typeof DeviceUseStatementStatusCode[keyof typeof DeviceUseStatementStatusCode];
