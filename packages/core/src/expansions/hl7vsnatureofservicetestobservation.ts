/**
 * Concepts specifying an identification of a test battery, an entire functional procedure or study, a single test value (observation), multiple test batteries or functional procedures as an orderable unit (profile), or a single test value (observation) calculated from other independent observations, typically used as an indicator for Master Files.
 * http://terminology.hl7.org/ValueSet/v2-0174
 */
export const Hl7VSNatureOfServiceTestObservationCode = {
  /**
   * Profile or battery consisting of many independent atomic observations (e.g., SMA12, electrolytes), usually done at one instrument on one specimen
   */
  P: "P",

  /**
   * Functional procedure that may consist of one or more interrelated measures (e.g., glucose tolerance test, creatinine clearance), usually done at different times and/or on different specimens
   */
  F: "F",

  /**
   * Atomic service/test/observation (test code or treatment code)
   */
  A: "A",

  /**
   * Superset-a set of batteries or procedures ordered under a single code unit but processed as separate batteries (e.g., routines = CBC, UA, electrolytes)<p>This set indicates that the code being described is used to order multiple service/test/observation b
   */
  S: "S",

  /**
   * Single observation calculated via a rule or formula from other independent observations (e.g., Alveolar-arterial ratio, cardiac output)
   */
  C: "C",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNatureOfServiceTestObservationCode =
  typeof Hl7VSNatureOfServiceTestObservationCode[keyof typeof Hl7VSNatureOfServiceTestObservationCode];
