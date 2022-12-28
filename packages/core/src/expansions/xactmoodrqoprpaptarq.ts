/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActMoodRqoPrpAptArq
 */
export const XActMoodRqoPrpAptArqCode = {
  /**
   * appointment
   */
  APT: "APT",

  /**
   * appointment request
   */
  ARQ: "ARQ",

  /**
   * proposal
   */
  PRP: "PRP",

  /**
   * request
   */
  RQO: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodRqoPrpAptArqCode =
  typeof XActMoodRqoPrpAptArqCode[keyof typeof XActMoodRqoPrpAptArqCode];
