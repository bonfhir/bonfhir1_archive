/**
 * Example codes indicating the change that happened to the device during the procedure.  Note that these are in no way complete and might not even be appropriate for some uses.
 * http://hl7.org/fhir/ValueSet/device-action
 */
export const ProcedureDeviceActionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcedureDeviceActionCodesCode =
  typeof ProcedureDeviceActionCodesCode[keyof typeof ProcedureDeviceActionCodesCode];
