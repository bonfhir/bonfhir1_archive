/**
 * Value Set of codes specifying any type of allergy alert device the patient may be carrying or wearing.
 * http://terminology.hl7.org/ValueSet/v2-0437
 */
export const Hl7VSAlertDeviceCodeCode = {
  /**
   * Bracelet
   */
  B: "B",

  /**
   * Necklace
   */
  N: "N",

  /**
   * Wallet Card
   */
  W: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAlertDeviceCodeCode =
  typeof Hl7VSAlertDeviceCodeCode[keyof typeof Hl7VSAlertDeviceCodeCode];
