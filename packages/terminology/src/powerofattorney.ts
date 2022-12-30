/**
 * A relationship between two people in which one person authorizes another to act for him in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts.
 * http://terminology.hl7.org/ValueSet/v3-PowerOfAttorney
 */
export const PowerOfAttorneyCode = {
  /**
   * power of attorney
   */
  POWATT: "POWATT",

  /**
   * durable power of attorney
   */
  DPOWATT: "DPOWATT",

  /**
   * healthcare power of attorney
   */
  HPOWATT: "HPOWATT",

  /**
   * special power of attorney
   */
  SPOWATT: "SPOWATT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PowerOfAttorneyCode =
  typeof PowerOfAttorneyCode[keyof typeof PowerOfAttorneyCode];
