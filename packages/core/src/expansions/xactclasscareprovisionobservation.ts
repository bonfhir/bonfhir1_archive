/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActClassCareProvisionObservation
 */
export const XActClassCareProvisionObservationCode = {
  /**
   * observation
   */
  OBS: "OBS",

  /**
   * care provision
   */
  PCPR: "PCPR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActClassCareProvisionObservationCode =
  typeof XActClassCareProvisionObservationCode[keyof typeof XActClassCareProvisionObservationCode];
