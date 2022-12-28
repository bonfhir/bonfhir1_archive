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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyRequestRenewalRefusalReasonCodeCode =
  typeof PharmacySupplyRequestRenewalRefusalReasonCodeCode[keyof typeof PharmacySupplyRequestRenewalRefusalReasonCodeCode];
