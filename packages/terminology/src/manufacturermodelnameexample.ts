/**
 * An example value set representing the ManufacturerModelName concept domain used  to convey a coded name for the software used to author content.
 * http://terminology.hl7.org/ValueSet/v3-ManufacturerModelNameExample
 */
export const ManufacturerModelNameExampleCode = {
  /**
   * example model name 1
   */
  examplemodelname1: "examplemodel1",

  /**
   * example model name 2
   */
  examplemodelname2: "examplemodel2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManufacturerModelNameExampleCode =
  typeof ManufacturerModelNameExampleCode[keyof typeof ManufacturerModelNameExampleCode];
