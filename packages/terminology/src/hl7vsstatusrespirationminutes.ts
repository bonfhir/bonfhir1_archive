/**
 * Value Set of codes that specify the status of the use of the respiration minutes information for diagnosis related group (DRG) determination.
 * http://terminology.hl7.org/ValueSet/v2-0757
 */
export const Hl7VSStatusRespirationMinutesCode = {
  /**
   * Respiration minutes not used for grouping
   */
  Respirationminutesnotusedforgrouping: "0",

  /**
   * Listed respiration minutes used for grouping
   */
  Listedrespirationminutesusedforgrouping: "1",

  /**
   * OPS code value used for grouping
   */
  OPScodevalueusedforgrouping: "2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSStatusRespirationMinutesCode =
  typeof Hl7VSStatusRespirationMinutesCode[keyof typeof Hl7VSStatusRespirationMinutesCode];
