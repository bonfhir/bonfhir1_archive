/**
 * An example value set representing the SoftwareName concept domain used to convey a coded name for a device..
 * http://terminology.hl7.org/ValueSet/v3-SoftwareNameExample
 */
export const SoftwareNameExampleCode = {
  /**
   * example software name 1
   */
  examplesoftware1: "examplesoftware1",

  /**
   * example software name 2
   */
  examplesoftware2: "examplesoftware2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SoftwareNameExampleCode =
  typeof SoftwareNameExampleCode[keyof typeof SoftwareNameExampleCode];
