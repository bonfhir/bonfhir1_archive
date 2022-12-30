/**
 * **Definition:**A collection of concepts that identifies why a renewal prescription has been refused.
 * http://terminology.hl7.org/ValueSet/v3-PharmacySupplyRequestRenewalRefusalReasonCode
 */
export const PharmacySupplyRequestRenewalRefusalReasonCodeCode = {
  /**
   * pharmacy supply request renewal refusal reason
   */
  _PharmacySupplyRequestRenewalRefusalReasonCode:
    "_PharmacySupplyRequestRenewalRefusalReasonCode",

  /**
   * product discontinued
   */
  DISCONT: "DISCONT",

  /**
   * new prescription exists
   */
  ALREADYRX: "ALREADYRX",

  /**
   * family physician must authorize further fills
   */
  FAMPHYS: "FAMPHYS",

  /**
   * modified prescription exists
   */
  MODIFY: "MODIFY",

  /**
   * patient must make appointment
   */
  NEEDAPMT: "NEEDAPMT",

  /**
   * prescriber not available
   */
  NOTAVAIL: "NOTAVAIL",

  /**
   * patient no longer in this practice
   */
  NOTPAT: "NOTPAT",

  /**
   * medication on hold
   */
  ONHOLD: "ONHOLD",

  /**
   * product not available
   */
  PRNA: "PRNA",

  /**
   * prescriber stopped medication for patient
   */
  STOPMED: "STOPMED",

  /**
   * too early
   */
  TOOEARLY: "TOOEARLY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyRequestRenewalRefusalReasonCodeCode =
  typeof PharmacySupplyRequestRenewalRefusalReasonCodeCode[keyof typeof PharmacySupplyRequestRenewalRefusalReasonCodeCode];
