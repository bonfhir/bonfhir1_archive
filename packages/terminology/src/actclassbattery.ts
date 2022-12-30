/**
 * **Description:**A battery specifies a set of observations. These observations typically have a logical or practical grouping for generally accepted clinical or functional purposes, such as observations that are run together because of automation. A battery can define required and optional components and, in some cases, will define complex rules that determine whether or not a particular observation is made.

**Examples:** "Blood pressure", "Full blood count", "Chemistry panel".
 * http://terminology.hl7.org/ValueSet/v3-ActClassBattery
 */
export const ActClassBatteryCode = {
  /**
   * battery
   */
  BATTERY: "BATTERY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassBatteryCode =
  typeof ActClassBatteryCode[keyof typeof ActClassBatteryCode];
