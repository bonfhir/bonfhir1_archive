/**
 * Code for the mechanism by which disease was acquired by the living subject involved in the public health case. Includes sexually transmitted, airborne, bloodborne, vectorborne, foodborne, zoonotic, nosocomial, mechanical, dermal, congenital, environmental exposure, indeterminate.
 * http://terminology.hl7.org/ValueSet/v3-CaseTransmissionMode
 */
export const CaseTransmissionModeCode = {
  /**
   * case transmission mode
   */
  _CaseTransmissionMode: "_CaseTransmissionMode",

  /**
   * airborne transmission
   */
  AIRTRNS: "AIRTRNS",

  /**
   * animal to animal transmission
   */
  ANANTRNS: "ANANTRNS",

  /**
   * animal to human transmission
   */
  ANHUMTRNS: "ANHUMTRNS",

  /**
   * body fluid contact transmission
   */
  BDYFLDTRNS: "BDYFLDTRNS",

  /**
   * blood borne transmission
   */
  BLDTRNS: "BLDTRNS",

  /**
   * transdermal transmission
   */
  DERMTRNS: "DERMTRNS",

  /**
   * environmental exposure transmission
   */
  ENVTRNS: "ENVTRNS",

  /**
   * fecal-oral transmission
   */
  FECTRNS: "FECTRNS",

  /**
   * fomite transmission
   */
  FOMTRNS: "FOMTRNS",

  /**
   * food-borne transmission
   */
  FOODTRNS: "FOODTRNS",

  /**
   * human to human transmission
   */
  HUMHUMTRNS: "HUMHUMTRNS",

  /**
   * indeterminate disease transmission mode
   */
  INDTRNS: "INDTRNS",

  /**
   * lactation transmission
   */
  LACTTRNS: "LACTTRNS",

  /**
   * nosocomial transmission
   */
  NOSTRNS: "NOSTRNS",

  /**
   * parenteral transmission
   */
  PARTRNS: "PARTRNS",

  /**
   * transplacental transmission
   */
  PLACTRNS: "PLACTRNS",

  /**
   * sexual transmission
   */
  SEXTRNS: "SEXTRNS",

  /**
   * transfusion transmission
   */
  TRNSFTRNS: "TRNSFTRNS",

  /**
   * vector-borne transmission
   */
  VECTRNS: "VECTRNS",

  /**
   * water-borne transmission
   */
  WATTRNS: "WATTRNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CaseTransmissionModeCode =
  typeof CaseTransmissionModeCode[keyof typeof CaseTransmissionModeCode];
