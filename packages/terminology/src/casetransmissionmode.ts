/**
 * Code for the mechanism by which disease was acquired by the living subject involved in the public health case. Includes sexually transmitted, airborne, bloodborne, vectorborne, foodborne, zoonotic, nosocomial, mechanical, dermal, congenital, environmental exposure, indeterminate.
 * http://terminology.hl7.org/ValueSet/v3-CaseTransmissionMode
 */
export const CaseTransmissionModeCode = {
  /**
   * case transmission mode
   */
  casetransmissionmode: "_CaseTransmissionMode",

  /**
   * airborne transmission
   */
  airbornetransmission: "AIRTRNS",

  /**
   * animal to animal transmission
   */
  animaltoanimaltransmission: "ANANTRNS",

  /**
   * animal to human transmission
   */
  animaltohumantransmission: "ANHUMTRNS",

  /**
   * body fluid contact transmission
   */
  bodyfluidcontacttransmission: "BDYFLDTRNS",

  /**
   * blood borne transmission
   */
  bloodbornetransmission: "BLDTRNS",

  /**
   * transdermal transmission
   */
  transdermaltransmission: "DERMTRNS",

  /**
   * environmental exposure transmission
   */
  environmentalexposuretransmission: "ENVTRNS",

  /**
   * fecal-oral transmission
   */
  fecaloraltransmission: "FECTRNS",

  /**
   * fomite transmission
   */
  fomitetransmission: "FOMTRNS",

  /**
   * food-borne transmission
   */
  foodbornetransmission: "FOODTRNS",

  /**
   * human to human transmission
   */
  humantohumantransmission: "HUMHUMTRNS",

  /**
   * indeterminate disease transmission mode
   */
  indeterminatediseasetransmissionmode: "INDTRNS",

  /**
   * lactation transmission
   */
  lactationtransmission: "LACTTRNS",

  /**
   * nosocomial transmission
   */
  nosocomialtransmission: "NOSTRNS",

  /**
   * parenteral transmission
   */
  parenteraltransmission: "PARTRNS",

  /**
   * transplacental transmission
   */
  transplacentaltransmission: "PLACTRNS",

  /**
   * sexual transmission
   */
  sexualtransmission: "SEXTRNS",

  /**
   * transfusion transmission
   */
  transfusiontransmission: "TRNSFTRNS",

  /**
   * vector-borne transmission
   */
  vectorbornetransmission: "VECTRNS",

  /**
   * water-borne transmission
   */
  waterbornetransmission: "WATTRNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CaseTransmissionModeCode =
  typeof CaseTransmissionModeCode[keyof typeof CaseTransmissionModeCode];
