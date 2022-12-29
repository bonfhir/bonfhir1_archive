/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActClassCareProvisionProcedure
 */
export const XActClassCareProvisionProcedureCode = {
  /**
   * care provision
   */
  careprovision: "PCPR",

  /**
   * procedure
   */
  procedure: "PROC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActClassCareProvisionProcedureCode =
  typeof XActClassCareProvisionProcedureCode[keyof typeof XActClassCareProvisionProcedureCode];
