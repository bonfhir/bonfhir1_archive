/**
 * Concepts that define if a test should be a specific event with no other tests to be performed with this test, or not, or other special circumstances.
 * http://terminology.hl7.org/ValueSet/v2-0919
 */
export const Hl7VSExclusiveTestCode = {
  /**
   * This test should be exclusive
   */
  Thistestshouldbeexclusive: "Y",

  /**
   * This test can be included with any number of other tests
   */
  Thistestcanbeincludedwithanynumberofothertests: "N",

  /**
   * In some cases, this test should be only exclusively with like tests (examples are cyto or pathology)
   */
  Insomecasesthistestshouldbeonlyexclusivelywithliketestsexamplesarecytoorpathology:
    "D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSExclusiveTestCode =
  typeof Hl7VSExclusiveTestCode[keyof typeof Hl7VSExclusiveTestCode];
