/**
 * Value Set of codes that classify an observation definition as intended to measure a patient's state at a point in time.
 * http://terminology.hl7.org/ValueSet/v2-0255
 */
export const Hl7VSDurationCategoriesCode = {
  /**
   * (asterisk) Life of the "unit"
   */
  asteriskLifeoftheunit: "*",

  /**
   * 30 minutes
   */
  Thirtyminutes: "30M",

  /**
   * 1 hour
   */
  Onehour: "1H",

  /**
   * 2 hours
   */
  Twohours: "2H",

  /**
   * 2 1/2 hours
   */
  TwoHundredTwelvehours: "2.5H",

  /**
   * 3 hours
   */
  Threehours: "3H",

  /**
   * 4 hours
   */
  Fourhours: "4H",

  /**
   * 5 hours
   */
  Fivehours: "5H",

  /**
   * 6 hours
   */
  Sixhours: "6H",

  /**
   * 7 hours
   */
  Sevenhours: "7H",

  /**
   * 8 hours
   */
  Eighthours: "8H",

  /**
   * 12 hours
   */
  Twelvehours: "12H",

  /**
   * 24 hours
   */
  TwentyFourhours: "24H",

  /**
   * 2 days
   */
  Twodays: "2D",

  /**
   * 3 days
   */
  Threedays: "3D",

  /**
   * 4 days
   */
  Fourdays: "4D",

  /**
   * 5 days
   */
  Fivedays: "5D",

  /**
   * 6 days
   */
  Sixdays: "6D",

  /**
   * 1 week
   */
  Oneweek: "1W",

  /**
   * 2 weeks
   */
  Twoweeks: "2W",

  /**
   * 3 weeks
   */
  Threeweeks: "3W",

  /**
   * 4 weeks
   */
  Fourweeks: "4W",

  /**
   * 1 months (30 days)
   */
  Onemonths30days: "1L",

  /**
   * 2 months
   */
  Twomonths: "2L",

  /**
   * 3 months
   */
  Threemonths: "3L",

  /**
   * Life of the "unit"
   */
  Lifeoftheunit: "LU",

  /**
   * point in time
   */
  pointintime: "PT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDurationCategoriesCode =
  typeof Hl7VSDurationCategoriesCode[keyof typeof Hl7VSDurationCategoriesCode];
