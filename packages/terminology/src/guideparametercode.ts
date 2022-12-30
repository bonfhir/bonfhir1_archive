/**
 * Code of parameter that is input to the guide.
 * http://terminology.hl7.org/ValueSet/guide-parameter-code
 */
export const GuideParameterCodeCode = {
  /**
   * Apply Metadata Value
   */
  apply: "apply",

  /**
   * Resource Path
   */
  "path-resource": "path-resource",

  /**
   * Pages Path
   */
  "path-pages": "path-pages",

  /**
   * Terminology Cache Path
   */
  "path-tx-cache": "path-tx-cache",

  /**
   * Expansion Profile
   */
  "expansion-parameter": "expansion-parameter",

  /**
   * Broken Links Rule
   */
  "rule-broken-links": "rule-broken-links",

  /**
   * Generate XML
   */
  "generate-xml": "generate-xml",

  /**
   * Generate JSON
   */
  "generate-json": "generate-json",

  /**
   * Generate Turtle
   */
  "generate-turtle": "generate-turtle",

  /**
   * HTML Template
   */
  "html-template": "html-template",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GuideParameterCodeCode =
  typeof GuideParameterCodeCode[keyof typeof GuideParameterCodeCode];
