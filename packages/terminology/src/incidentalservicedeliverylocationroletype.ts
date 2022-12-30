/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-IncidentalServiceDeliveryLocationRoleType
 */
export const IncidentalServiceDeliveryLocationRoleTypeCode = {
  /**
   * accident site
   */
  ACC: "ACC",

  /**
   * Community Location
   */
  COMM: "COMM",

  /**
   * community service center
   */
  CSC: "CSC",

  /**
   * Patient's Residence
   */
  PTRES: "PTRES",

  /**
   * school
   */
  SCHOOL: "SCHOOL",

  /**
   * underage protection center
   */
  UPC: "UPC",

  /**
   * work site
   */
  WORK: "WORK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IncidentalServiceDeliveryLocationRoleTypeCode =
  typeof IncidentalServiceDeliveryLocationRoleTypeCode[keyof typeof IncidentalServiceDeliveryLocationRoleTypeCode];
