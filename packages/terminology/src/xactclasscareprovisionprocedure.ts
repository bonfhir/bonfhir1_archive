/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActClassCareProvisionProcedure
 */
export const XActClassCareProvisionProcedureCode = {
  /**
   * care provision
   */
  PCPR: "PCPR",

  /**
   * procedure
   */
  PROC: "PROC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActClassCareProvisionProcedureCode =
  typeof XActClassCareProvisionProcedureCode[keyof typeof XActClassCareProvisionProcedureCode];
