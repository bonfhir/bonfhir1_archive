/**
 * **Definition:**A collection of concepts that identifies why a renewal prescription has been refused.
 * http://terminology.hl7.org/ValueSet/v3-PharmacySupplyRequestRenewalRefusalReasonCode
 */
export const PharmacySupplyRequestRenewalRefusalReasonCodeCode = {
  /**
   * pharmacy supply request renewal refusal reason
   */
  pharmacysupplyrequestrenewalrefusalreason:
    "_PharmacySupplyRequestRenewalRefusalReasonCode",

  /**
   * product discontinued
   */
  productdiscontinued: "DISCONT",

  /**
   * new prescription exists
   */
  newprescriptionexists: "ALREADYRX",

  /**
   * family physician must authorize further fills
   */
  familyphysicianmustauthorizefurtherfills: "FAMPHYS",

  /**
   * modified prescription exists
   */
  modifiedprescriptionexists: "MODIFY",

  /**
   * patient must make appointment
   */
  patientmustmakeappointment: "NEEDAPMT",

  /**
   * prescriber not available
   */
  prescribernotavailable: "NOTAVAIL",

  /**
   * patient no longer in this practice
   */
  patientnolongerinthispractice: "NOTPAT",

  /**
   * medication on hold
   */
  medicationonhold: "ONHOLD",

  /**
   * product not available
   */
  productnotavailable: "PRNA",

  /**
   * prescriber stopped medication for patient
   */
  prescriberstoppedmedicationforpatient: "STOPMED",

  /**
   * too early
   */
  tooearly: "TOOEARLY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyRequestRenewalRefusalReasonCodeCode =
  typeof PharmacySupplyRequestRenewalRefusalReasonCodeCode[keyof typeof PharmacySupplyRequestRenewalRefusalReasonCodeCode];
