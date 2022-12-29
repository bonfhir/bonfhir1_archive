/**
 * Participations related, but not primary to an act. The Referring, Admitting, and Discharging practitioners must be the same person as those authoring the ControlAct event for their respective trigger events.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationAncillary
 */
export const ParticipationAncillaryCode = {
  /**
   * admitter
   */
  admitter: "ADM",

  /**
   * attender
   */
  attender: "ATND",

  /**
   * callback contact
   */
  callbackcontact: "CALLBCK",

  /**
   * consultant
   */
  consultant: "CON",

  /**
   * discharger
   */
  discharger: "DIS",

  /**
   * escort
   */
  escort: "ESC",

  /**
   * referrer
   */
  referrer: "REF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationAncillaryCode =
  typeof ParticipationAncillaryCode[keyof typeof ParticipationAncillaryCode];
