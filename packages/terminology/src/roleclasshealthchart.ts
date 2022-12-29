/**
 * The role of a material (player) that is the physical health chart belonging to an organization (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassHealthChart
 */
export const RoleClassHealthChartCode = {
  /**
   * health chart
   */
  healthchart: "HLTHCHRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassHealthChartCode =
  typeof RoleClassHealthChartCode[keyof typeof RoleClassHealthChartCode];
