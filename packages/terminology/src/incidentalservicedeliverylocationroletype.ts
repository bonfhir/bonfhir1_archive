/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-IncidentalServiceDeliveryLocationRoleType
 */
export const IncidentalServiceDeliveryLocationRoleTypeCode = {
  /**
   * accident site
   */
  accidentsite: "ACC",

  /**
   * Community Location
   */
  CommunityLocation: "COMM",

  /**
   * community service center
   */
  communityservicecenter: "CSC",

  /**
   * Patient's Residence
   */
  PatientsResidence: "PTRES",

  /**
   * school
   */
  school: "SCHOOL",

  /**
   * underage protection center
   */
  underageprotectioncenter: "UPC",

  /**
   * work site
   */
  worksite: "WORK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IncidentalServiceDeliveryLocationRoleTypeCode =
  typeof IncidentalServiceDeliveryLocationRoleTypeCode[keyof typeof IncidentalServiceDeliveryLocationRoleTypeCode];
