/**
 * Conveys prohibited actions which an information custodian, receiver, or user is not permitted to perform unless otherwise authorized or permitted under specified circumstances.

**Examples:**

 *  prohibit redisclosure without consent directive
 * http://terminology.hl7.org/ValueSet/v3-RefrainPolicy
 */
export const RefrainPolicyCode = {
  /**
   * refrain policy
   */
  refrainpolicy: "RefrainPolicy",

  /**
   * no disclosure without subject authorization
   */
  nodisclosurewithoutsubjectauthorization: "NOAUTH",

  /**
   * no collection
   */
  nocollection: "NOCOLLECT",

  /**
   * no disclosure without consent directive
   */
  nodisclosurewithoutconsentdirective: "NODSCLCD",

  /**
   * no disclosure without information subject's consent directive
   */
  nodisclosurewithoutinformationsubjectsconsentdirective: "NODSCLCDS",

  /**
   * no integration
   */
  nointegration: "NOINTEGRATE",

  /**
   * no unlisted entity disclosure
   */
  nounlistedentitydisclosure: "NOLIST",

  /**
   * no disclosure without MOU
   */
  nodisclosurewithoutMOU: "NOMOU",

  /**
   * no disclosure without organizational authorization
   */
  nodisclosurewithoutorganizationalauthorization: "NOORGPOL",

  /**
   * no disclosure to patient, family or caregivers without attending provider's authorization
   */
  nodisclosuretopatientfamilyorcaregiverswithoutattendingprovidersauthorization:
    "NOPAT",

  /**
   * no collection beyond purpose of use
   */
  nocollectionbeyondpurposeofuse: "NOPERSISTP",

  /**
   * no redisclosure without consent directive
   */
  noredisclosurewithoutconsentdirective: "NORDSCLCD",

  /**
   * no redisclosure without consent directive
   */
  noredisclosurewithoutconsentdirective: "NORDSLCD",

  /**
   * no redisclosure without information subject's consent directive
   */
  noredisclosurewithoutinformationsubjectsconsentdirective: "NORDSCLCDS",

  /**
   * no disclosure without jurisdictional authorization
   */
  nodisclosurewithoutjurisdictionalauthorization: "NORDSCLW",

  /**
   * no relinking
   */
  norelinking: "NORELINK",

  /**
   * no reuse beyond purpose of use
   */
  noreusebeyondpurposeofuse: "NOREUSE",

  /**
   * no unauthorized VIP disclosure
   */
  nounauthorizedVIPdisclosure: "NOVIP",

  /**
   * no disclosure without originator authorization
   */
  nodisclosurewithoutoriginatorauthorization: "ORCON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RefrainPolicyCode =
  typeof RefrainPolicyCode[keyof typeof RefrainPolicyCode];
