/**
 * **Definition:**Indicates why the request to transfer a prescription from one dispensing facility to another has been refused.
 * http://terminology.hl7.org/ValueSet/v3-PharmacySupplyRequestFulfillerRevisionRefusalReasonCode
 */
export const PharmacySupplyRequestFulfillerRevisionRefusalReasonCodeCode = {
  /**
   * PharmacySupplyRequestFulfillerRevisionRefusalReasonCode
   */
  _PharmacySupplyRequestFulfillerRevisionRefusalReasonCode:
    "_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyRequestFulfillerRevisionRefusalReasonCodeCode =
  typeof PharmacySupplyRequestFulfillerRevisionRefusalReasonCodeCode[keyof typeof PharmacySupplyRequestFulfillerRevisionRefusalReasonCodeCode];
