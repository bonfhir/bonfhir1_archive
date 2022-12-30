/**
 * A supply action where there is no 'valid' order for the supplied medication. E.g. Emergency vacation supply, weekend supply (when prescriber is unavailable to provide a renewal prescription)
 * http://terminology.hl7.org/ValueSet/v3-EmergencyPharmacySupplyType
 */
export const EmergencyPharmacySupplyTypeCode = {
  /**
   * Emergency Supply
   */
  EM: "EM",

  /**
   * Script Owing
   */
  SO: "SO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EmergencyPharmacySupplyTypeCode =
  typeof EmergencyPharmacySupplyTypeCode[keyof typeof EmergencyPharmacySupplyTypeCode];
