/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ControlActNullificationRefusalReasonType
 */
export const ControlActNullificationRefusalReasonTypeCode = {
  /**
   * ControlActNullificationRefusalReasonType
   */
  _ControlActNullificationRefusalReasonType:
    "_ControlActNullificationRefusalReasonType",

  /**
   * in requested state
   */
  INRQSTATE: "INRQSTATE",

  /**
   * no match
   */
  NOMATCH: "NOMATCH",

  /**
   * no record match
   */
  NORECMTCH: "NORECMTCH",

  /**
   * no product match
   */
  NOPRODMTCH: "NOPRODMTCH",

  /**
   * no service match
   */
  NOSERMTCH: "NOSERMTCH",

  /**
   * no version match
   */
  NOVERMTCH: "NOVERMTCH",

  /**
   * no permission
   */
  NOPERM: "NOPERM",

  /**
   * no user permission
   */
  NOUSERPERM: "NOUSERPERM",

  /**
   * no agent permission
   */
  NOAGNTPERM: "NOAGNTPERM",

  /**
   * no user permission
   */
  NOUSRPERM: "NOUSRPERM",

  /**
   * wrong version
   */
  WRNGVER: "WRNGVER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ControlActNullificationRefusalReasonTypeCode =
  typeof ControlActNullificationRefusalReasonTypeCode[keyof typeof ControlActNullificationRefusalReasonTypeCode];
