/**
 * Value Set of codes that specify the military branch.  This field is defined by CMS or other regulatory agencies.
 * http://terminology.hl7.org/ValueSet/v2-0140
 */
export const Hl7VSMilitaryServiceCode = {
  /**
   * US Army
   */
  USA: "USA",

  /**
   * US Navy
   */
  USN: "USN",

  /**
   * US Air Force
   */
  USAF: "USAF",

  /**
   * US Marine Corps
   */
  USMC: "USMC",

  /**
   * US Coast Guard
   */
  USCG: "USCG",

  /**
   * US Public Health Service
   */
  USPHS: "USPHS",

  /**
   * National Oceanic and Atmospheric Administration
   */
  NOAA: "NOAA",

  /**
   * North Atlantic Treaty Organization
   */
  NATO: "NATO",

  /**
   * Australian Army
   */
  AUSA: "AUSA",

  /**
   * Australian Navy
   */
  AUSN: "AUSN",

  /**
   * Australian Air Force
   */
  AUSAF: "AUSAF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMilitaryServiceCode =
  typeof Hl7VSMilitaryServiceCode[keyof typeof Hl7VSMilitaryServiceCode];
