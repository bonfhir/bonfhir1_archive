/**
 * Code of parameter that is input to the guide.
 * http://terminology.hl7.org/ValueSet/guide-parameter-code
 */
export const GuideParameterCodeCode = {
  /**
   * Apply Metadata Value
   */
  ApplyMetadataValue: "apply",

  /**
   * Resource Path
   */
  ResourcePath: "path-resource",

  /**
   * Pages Path
   */
  PagesPath: "path-pages",

  /**
   * Terminology Cache Path
   */
  TerminologyCachePath: "path-tx-cache",

  /**
   * Expansion Profile
   */
  ExpansionProfile: "expansion-parameter",

  /**
   * Broken Links Rule
   */
  BrokenLinksRule: "rule-broken-links",

  /**
   * Generate XML
   */
  GenerateXML: "generate-xml",

  /**
   * Generate JSON
   */
  GenerateJSON: "generate-json",

  /**
   * Generate Turtle
   */
  GenerateTurtle: "generate-turtle",

  /**
   * HTML Template
   */
  HTMLTemplate: "html-template",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GuideParameterCodeCode =
  typeof GuideParameterCodeCode[keyof typeof GuideParameterCodeCode];
