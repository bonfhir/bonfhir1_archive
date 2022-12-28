/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 * http://hl7.org/fhir/ValueSet/testscript-profile-destination-types
 */
export const TestScriptProfileDestinationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestScriptProfileDestinationTypeCode =
  typeof TestScriptProfileDestinationTypeCode[keyof typeof TestScriptProfileDestinationTypeCode];
