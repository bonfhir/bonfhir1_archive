/**
 * Direction in which lists of possible answers should be displayed.
 * http://terminology.hl7.org/ValueSet/choice-list-orientation
 */
export const ChoiceListOrientationCode = {
  /**
   * Horizontal
   */
  Horizontal: "horizontal",

  /**
   * Vertical
   */
  Vertical: "vertical",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChoiceListOrientationCode =
  typeof ChoiceListOrientationCode[keyof typeof ChoiceListOrientationCode];
