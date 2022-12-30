/**
 * Used to capture the link between a potential service ("master" or plan) and an actual service, where the actual service instantiates the potential service. The instantiation may override the master's defaults.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipInstantiatesMaster
 */
export const ActRelationshipInstantiatesMasterCode = {
  /**
   * instantiates (master)
   */
  INST: "INST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipInstantiatesMasterCode =
  typeof ActRelationshipInstantiatesMasterCode[keyof typeof ActRelationshipInstantiatesMasterCode];
