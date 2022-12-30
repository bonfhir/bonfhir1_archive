/**
 * Defines how concepts are processed into the expansion when it's for UI presentation.
 * http://terminology.hl7.org/ValueSet/expansion-processing-rule
 */
export const ExpansionProcessingRuleCode = {
  /**
   * All Codes
   */
  "all-codes": "all-codes",

  /**
   * Groups + Ungrouped codes
   */
  ungrouped: "ungrouped",

  /**
   * Groups Only
   */
  "groups-only": "groups-only",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExpansionProcessingRuleCode =
  typeof ExpansionProcessingRuleCode[keyof typeof ExpansionProcessingRuleCode];
