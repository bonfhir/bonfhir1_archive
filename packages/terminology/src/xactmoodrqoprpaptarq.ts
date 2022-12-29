/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActMoodRqoPrpAptArq
 */
export const XActMoodRqoPrpAptArqCode = {
  /**
   * appointment
   */
  appointment: "APT",

  /**
   * appointment request
   */
  appointmentrequest: "ARQ",

  /**
   * proposal
   */
  proposal: "PRP",

  /**
   * request
   */
  request: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodRqoPrpAptArqCode =
  typeof XActMoodRqoPrpAptArqCode[keyof typeof XActMoodRqoPrpAptArqCode];
