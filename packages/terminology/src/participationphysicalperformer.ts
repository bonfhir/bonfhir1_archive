/**
 * A person who actually and principally carries out the action. Need not be the principal responsible actor, e.g. a surgery resident operating under supervision of attending surgeon, and may be the patient in self-care, e.g. fingerstick blood sugar. The traditional order filler is a performer. This information should accompany every service event.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationPhysicalPerformer
 */
export const ParticipationPhysicalPerformerCode = {
  /**
   * performer
   */
  performer: "PRF",

  /**
   * distributor
   */
  distributor: "DIST",

  /**
   * primary performer
   */
  primaryperformer: "PPRF",

  /**
   * secondary performer
   */
  secondaryperformer: "SPRF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationPhysicalPerformerCode =
  typeof ParticipationPhysicalPerformerCode[keyof typeof ParticipationPhysicalPerformerCode];
