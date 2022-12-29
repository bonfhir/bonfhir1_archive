/**
 * Some services take place at multiple concurrent locations (e.g., telemedicine, telephone consultation). The location where the principal performing actor is located is taken as the primary location (LOC) while the other location(s) are considered "remote."
 * http://terminology.hl7.org/ValueSet/v3-ParticipationRemote
 */
export const ParticipationRemoteCode = {
  /**
   * remote
   */
  remote: "RML",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationRemoteCode =
  typeof ParticipationRemoteCode[keyof typeof ParticipationRemoteCode];
