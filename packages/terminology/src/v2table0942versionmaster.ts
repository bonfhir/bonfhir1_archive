/**
 * Value Set of codes that specify the type of measurement of the state of an automated laboratory instrument.
 * http://terminology.hl7.org/ValueSet/v2-0942
 */
export const V2Table0942VersionMasterCode = {
  /**
   * Emergency input buffer current capacity
   */
  Emergencyinputbuffercurrentcapacity: "EB",

  /**
   * Input buffer current capacity
   */
  Inputbuffercurrentcapacity: "IB",

  /**
   * Instrument current processing capacity
   */
  Instrumentcurrentprocessingcapacity: "IC",

  /**
   * Output buffer current capacity
   */
  Outputbuffercurrentcapacity: "OB",

  /**
   * Current test availability
   */
  Currenttestavailability: "TA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type V2Table0942VersionMasterCode =
  typeof V2Table0942VersionMasterCode[keyof typeof V2Table0942VersionMasterCode];
