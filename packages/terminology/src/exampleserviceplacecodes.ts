/**
 * This value set includes a smattering of Service Place codes.
 * http://terminology.hl7.org/ValueSet/service-place
 */
export const ExampleServicePlaceCodesCode = {
  /**
   * Pharmacy
   */
  "01": "01",

  /**
   * School
   */
  "03": "03",

  /**
   * Homeless Shelter
   */
  "04": "04",

  /**
   * Indian Health Service Free-standing Facility
   */
  "05": "05",

  /**
   * Indian Health Service Provider-based Facility
   */
  "06": "06",

  /**
   * Tribal 638 Free-Standing Facility
   */
  "07": "07",

  /**
   * Tribal 638 Provider-Based Facility
   */
  "08": "08",

  /**
   * Prison/Correctional Facility
   */
  "09": "09",

  /**
   * Office
   */
  "11": "11",

  /**
   * Home
   */
  "12": "12",

  /**
   * Assisted Living Fa
   */
  "13": "13",

  /**
   * Group Home
   */
  "14": "14",

  /**
   * Mobile Unit
   */
  "15": "15",

  /**
   * Off Campus-Outpatient Hospital
   */
  "19": "19",

  /**
   * Urgent Care Facility
   */
  "20": "20",

  /**
   * Inpatient Hospital
   */
  "21": "21",

  /**
   * Ambulance—Land
   */
  "41": "41",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleServicePlaceCodesCode =
  typeof ExampleServicePlaceCodesCode[keyof typeof ExampleServicePlaceCodesCode];
