/**
 * This code is used to specify the exact function an actor is authorized to have as a receiver of information that is the subject of a consent directive or consent override.
 * http://terminology.hl7.org/ValueSet/v3-AuthorizedReceiverParticipationFunction
 */
export const AuthorizedReceiverParticipationFunctionCode = {
  /**
   * AuthorizedReceiverParticipationFunction
   */
  AuthorizedReceiverParticipationFunction:
    "_AuthorizedReceiverParticipationFunction",

  /**
   * caregiver information receiver
   */
  caregiverinformationreceiver: "AUCG",

  /**
   * legitimate relationship information receiver
   */
  legitimaterelationshipinformationreceiver: "AULR",

  /**
   * care team information receiver
   */
  careteaminformationreceiver: "AUTM",

  /**
   * work area information receiver
   */
  workareainformationreceiver: "AUWA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuthorizedReceiverParticipationFunctionCode =
  typeof AuthorizedReceiverParticipationFunctionCode[keyof typeof AuthorizedReceiverParticipationFunctionCode];
