/**
 * ActConsentDirective codes are used to specify the type of Consent Directive to which a Consent Directive Act conforms.
 * http://terminology.hl7.org/ValueSet/v3-ActConsentDirective
 */
export const ActConsentDirectiveCode = {
  /**
   * ActConsentDirective
   */
  _ActConsentDirective: "_ActConsentDirective",

  /**
   * emergency only
   */
  EMRGONLY: "EMRGONLY",

  /**
   * grantor choice
   */
  GRANTORCHOICE: "GRANTORCHOICE",

  /**
   * implied consent
   */
  IMPLIED: "IMPLIED",

  /**
   * implied consent with opportunity to dissent
   */
  IMPLIEDD: "IMPLIEDD",

  /**
   * no consent
   */
  NOCONSENT: "NOCONSENT",

  /**
   * notice of privacy practices
   */
  NOPP: "NOPP",

  /**
   * opt-in
   */
  OPTIN: "OPTIN",

  /**
   * opt-in with restrictions
   */
  OPTINR: "OPTINR",

  /**
   * op-out
   */
  OPTOUT: "OPTOUT",

  /**
   * opt-out with exceptions
   */
  OPTOUTE: "OPTOUTE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConsentDirectiveCode =
  typeof ActConsentDirectiveCode[keyof typeof ActConsentDirectiveCode];
