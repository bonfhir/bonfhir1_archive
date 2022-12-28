/**
 * Codes specifying asset indicators used to assess or establish eligibility for coverage under a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-ObservationAssetValue
 */
export const ObservationAssetValueCode = {
  /**
   * asset
   */
  ASSET: "ASSET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationAssetValueCode =
  typeof ObservationAssetValueCode[keyof typeof ObservationAssetValueCode];
