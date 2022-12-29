/**
 * **Definition:**Indicates why the request to transfer a prescription from one dispensing facility to another has been refused.
 * http://terminology.hl7.org/ValueSet/v3-PharmacySupplyRequestFulfillerRevisionRefusalReasonCode
 */
export const PharmacySupplyRequestFulfillerRevisionRefusalReasonCodeCode = {
  /**
   * PharmacySupplyRequestFulfillerRevisionRefusalReasonCode
   */
  PharmacySupplyRequestFulfillerRevisionRefusalReasonCode:
    "_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode",

  /**
   * locked
   */
  locked: "LOCKED",

  /**
   * no user permission
   */
  nouserpermission: "NOUSERPERM",

  /**
   * unknown target
   */
  unknowntarget: "UNKWNTARGET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyRequestFulfillerRevisionRefusalReasonCodeCode =
  typeof PharmacySupplyRequestFulfillerRevisionRefusalReasonCodeCode[keyof typeof PharmacySupplyRequestFulfillerRevisionRefusalReasonCodeCode];
