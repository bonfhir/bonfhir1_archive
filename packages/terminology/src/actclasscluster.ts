/**
 * A group of entries within a composition, topic or category that have a logical association with one another.

The representation of a single observation or action might itself be multi-part. The data might need to be represented as a nested set of values, as a table, list, or as a time series. The Cluster class permits such aggregation within an entry for such compound data.

Examples include "Haematology investigations" which might include two or more distinct batteries.

A cluster may contain batteries and/or individual entries
 * http://terminology.hl7.org/ValueSet/v3-ActClassCluster
 */
export const ActClassClusterCode = {
  /**
   * Cluster
   */
  CLUSTER: "CLUSTER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassClusterCode =
  typeof ActClassClusterCode[keyof typeof ActClassClusterCode];
