/**
 * Value Set of codes that specify the military branch.  This field is defined by CMS or other regulatory agencies.
 * http://terminology.hl7.org/ValueSet/v2-0140
 */
export const Hl7VSMilitaryServiceCode = {
  /**
   * US Army
   */
  USArmy: "USA",

  /**
   * US Navy
   */
  USNavy: "USN",

  /**
   * US Air Force
   */
  USAirForce: "USAF",

  /**
   * US Marine Corps
   */
  USMarineCorps: "USMC",

  /**
   * US Coast Guard
   */
  USCoastGuard: "USCG",

  /**
   * US Public Health Service
   */
  USPublicHealthService: "USPHS",

  /**
   * National Oceanic and Atmospheric Administration
   */
  NationalOceanicandAtmosphericAdministration: "NOAA",

  /**
   * North Atlantic Treaty Organization
   */
  NorthAtlanticTreatyOrganization: "NATO",

  /**
   * Australian Army
   */
  AustralianArmy: "AUSA",

  /**
   * Australian Navy
   */
  AustralianNavy: "AUSN",

  /**
   * Australian Air Force
   */
  AustralianAirForce: "AUSAF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMilitaryServiceCode =
  typeof Hl7VSMilitaryServiceCode[keyof typeof Hl7VSMilitaryServiceCode];
