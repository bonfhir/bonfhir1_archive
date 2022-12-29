/**
 * This value set includes a smattering of Service Place codes.
 * http://terminology.hl7.org/ValueSet/service-place
 */
export const ExampleServicePlaceCodesCode = {
  /**
   * Pharmacy
   */
  Pharmacy: "01",

  /**
   * School
   */
  School: "03",

  /**
   * Homeless Shelter
   */
  HomelessShelter: "04",

  /**
   * Indian Health Service Free-standing Facility
   */
  IndianHealthServiceFreestandingFacility: "05",

  /**
   * Indian Health Service Provider-based Facility
   */
  IndianHealthServiceProviderbasedFacility: "06",

  /**
   * Tribal 638 Free-Standing Facility
   */
  Tribal638FreeStandingFacility: "07",

  /**
   * Tribal 638 Provider-Based Facility
   */
  Tribal638ProviderBasedFacility: "08",

  /**
   * Prison/Correctional Facility
   */
  PrisonCorrectionalFacility: "09",

  /**
   * Office
   */
  Office: "11",

  /**
   * Home
   */
  Home: "12",

  /**
   * Assisted Living Fa
   */
  AssistedLivingFa: "13",

  /**
   * Group Home
   */
  GroupHome: "14",

  /**
   * Mobile Unit
   */
  MobileUnit: "15",

  /**
   * Off Campus-Outpatient Hospital
   */
  OffCampusOutpatientHospital: "19",

  /**
   * Urgent Care Facility
   */
  UrgentCareFacility: "20",

  /**
   * Inpatient Hospital
   */
  InpatientHospital: "21",

  /**
   * Ambulance—Land
   */
  AmbulanceLand: "41",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleServicePlaceCodesCode =
  typeof ExampleServicePlaceCodesCode[keyof typeof ExampleServicePlaceCodesCode];
