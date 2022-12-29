/**
 * Value Set of codes that specify the type of dispensing event that occurred.
 * http://terminology.hl7.org/ValueSet/v2-0484
 */
export const Hl7VSDispenseTypeCode = {
  /**
   * Trial Quantity Balance
   */
  TrialQuantityBalance: "B",

  /**
   * Compassionate Fill
   */
  CompassionateFill: "C",

  /**
   * New/Renew - Full Fill
   */
  NewRenewFullFill: "N",

  /**
   * New/Renew - Part Fill
   */
  NewRenewPartFill: "P",

  /**
   * Refill - Part Fill
   */
  RefillPartFill: "Q",

  /**
   * Refill - Full Fill
   */
  RefillFullFill: "R",

  /**
   * Manufacturer Sample
   */
  ManufacturerSample: "S",

  /**
   * Trial Quantity
   */
  TrialQuantity: "T",

  /**
   * Non-Prescription Fill
   */
  NonPrescriptionFill: "Z",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDispenseTypeCode =
  typeof Hl7VSDispenseTypeCode[keyof typeof Hl7VSDispenseTypeCode];
