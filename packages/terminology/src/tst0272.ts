/**
 * Testing to measure the minimum concentration of the antibacterial agent in a given culture medium below which bacterial growth is not inhibited.
 * http://terminology.hl7.org/ValueSet/v3-tst0272
 */
export const Tst0272Code = {
  /**
   * Minimum Inhibitory Concentration
   */
  MinimumInhibitoryConcentration: "0272",

  /**
   * Minimum Inhibitory Concentration, macrodilution
   */
  MinimumInhibitoryConcentrationmacrodilution: "0245",

  /**
   * Minimum Inhibitory Concentration, microdilution
   */
  MinimumInhibitoryConcentrationmicrodilution: "0246",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Tst0272Code = typeof Tst0272Code[keyof typeof Tst0272Code];
