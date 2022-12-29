/**
 * Confirmed supply action appropriate
 * http://terminology.hl7.org/ValueSet/v3-SupplyAppropriateManagementCode
 */
export const SupplyAppropriateManagementCodeCode = {
  /**
   * Supply Appropriate
   */
  SupplyAppropriate: "14",

  /**
   * Replacement
   */
  Replacement: "15",

  /**
   * Vacation Supply
   */
  VacationSupply: "16",

  /**
   * Weekend Supply
   */
  WeekendSupply: "17",

  /**
   * Leave of Absence
   */
  LeaveofAbsence: "18",

  /**
   * additional quantity on separate dispense
   */
  additionalquantityonseparatedispense: "20",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyAppropriateManagementCodeCode =
  typeof SupplyAppropriateManagementCodeCode[keyof typeof SupplyAppropriateManagementCodeCode];
