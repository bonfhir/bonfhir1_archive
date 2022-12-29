/**
 * This code is used to specify the exact function an actor is authorized to have in a service in all necessary detail.
 * http://terminology.hl7.org/ValueSet/v3-AuthorizedParticipationFunction
 */
export const AuthorizedParticipationFunctionCode = {
  /**
   * AuthorizedParticipationFunction
   */
  AuthorizedParticipationFunction: "_AuthorizedParticipationFunction",

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

  /**
   * ConsenterParticipationFunction
   */
  ConsenterParticipationFunction: "_ConsenterParticipationFunction",

  /**
   * legal guardian consent author
   */
  legalguardianconsentauthor: "GRDCON",

  /**
   * healthcare power of attorney consent author
   */
  healthcarepowerofattorneyconsentauthor: "POACON",

  /**
   * personal representative consent author
   */
  personalrepresentativeconsentauthor: "PRCON",

  /**
   * authorized provider masking author
   */
  authorizedprovidermaskingauthor: "PROMSK",

  /**
   * subject of consent author
   */
  subjectofconsentauthor: "SUBCON",

  /**
   * OverriderParticipationFunction
   */
  OverriderParticipationFunction: "_OverriderParticipationFunction",

  /**
   * consent overrider
   */
  consentoverrider: "AUCOV",

  /**
   * emergency overrider
   */
  emergencyoverrider: "AUEMROV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuthorizedParticipationFunctionCode =
  typeof AuthorizedParticipationFunctionCode[keyof typeof AuthorizedParticipationFunctionCode];
