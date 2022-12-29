/**
 * ActConsentDirective codes are used to specify the type of Consent Directive to which a Consent Directive Act conforms.
 * http://terminology.hl7.org/ValueSet/v3-ActConsentDirective
 */
export const ActConsentDirectiveCode = {
  /**
   * ActConsentDirective
   */
  ActConsentDirective: "_ActConsentDirective",

  /**
   * emergency only
   */
  emergencyonly: "EMRGONLY",

  /**
   * grantor choice
   */
  grantorchoice: "GRANTORCHOICE",

  /**
   * implied consent
   */
  impliedconsent: "IMPLIED",

  /**
   * implied consent with opportunity to dissent
   */
  impliedconsentwithopportunitytodissent: "IMPLIEDD",

  /**
   * no consent
   */
  noconsent: "NOCONSENT",

  /**
   * notice of privacy practices
   */
  noticeofprivacypractices: "NOPP",

  /**
   * opt-in
   */
  optin: "OPTIN",

  /**
   * opt-in with restrictions
   */
  optinwithrestrictions: "OPTINR",

  /**
   * op-out
   */
  opout: "OPTOUT",

  /**
   * opt-out with exceptions
   */
  optoutwithexceptions: "OPTOUTE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConsentDirectiveCode =
  typeof ActConsentDirectiveCode[keyof typeof ActConsentDirectiveCode];
