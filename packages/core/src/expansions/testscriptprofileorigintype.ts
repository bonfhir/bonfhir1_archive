/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 * http://terminology.hl7.org/ValueSet/testscript-profile-origin-types
 */
export const TestScriptProfileOriginTypeCode = {
  /**
   * FHIR Client
   */
  "FHIR-Client": "FHIR-Client",

  /**
   * FHIR SDC FormFiller
   */
  "FHIR-SDC-FormFiller": "FHIR-SDC-FormFiller",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestScriptProfileOriginTypeCode =
  typeof TestScriptProfileOriginTypeCode[keyof typeof TestScriptProfileOriginTypeCode];
