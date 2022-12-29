/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ControlActNullificationRefusalReasonType
 */
export const ControlActNullificationRefusalReasonTypeCode = {
  /**
   * ControlActNullificationRefusalReasonType
   */
  ControlActNullificationRefusalReasonType:
    "_ControlActNullificationRefusalReasonType",

  /**
   * in requested state
   */
  inrequestedstate: "INRQSTATE",

  /**
   * no match
   */
  nomatch: "NOMATCH",

  /**
   * no record match
   */
  norecordmatch: "NORECMTCH",

  /**
   * no product match
   */
  noproductmatch: "NOPRODMTCH",

  /**
   * no service match
   */
  noservicematch: "NOSERMTCH",

  /**
   * no version match
   */
  noversionmatch: "NOVERMTCH",

  /**
   * no permission
   */
  nopermission: "NOPERM",

  /**
   * no user permission
   */
  nouserpermission: "NOUSERPERM",

  /**
   * no agent permission
   */
  noagentpermission: "NOAGNTPERM",

  /**
   * no user permission
   */
  nouserpermission: "NOUSRPERM",

  /**
   * wrong version
   */
  wrongversion: "WRNGVER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ControlActNullificationRefusalReasonTypeCode =
  typeof ControlActNullificationRefusalReasonTypeCode[keyof typeof ControlActNullificationRefusalReasonTypeCode];
