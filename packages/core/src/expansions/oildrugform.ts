/**
 * An unctuous, combustible substance which is liquid, or easily liquefiable, on warming, and is soluble in ether but insoluble in water. Such substances, depending on their origin, are classified as animal, mineral, or vegetable oils.
 * http://terminology.hl7.org/ValueSet/v3-OilDrugForm
 */
export const OilDrugFormCode = {
  /**
   * Oil
   */
  OIL: "OIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OilDrugFormCode =
  typeof OilDrugFormCode[keyof typeof OilDrugFormCode];
