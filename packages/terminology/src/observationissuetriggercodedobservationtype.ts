/**
 * Distinguishes the kinds of coded observations that could be the trigger for clinical issue detection. These are observations that are not measurable, but instead can be defined with codes. Coded observation types include: Allergy, Intolerance, Medical Condition, Pregnancy status, etc.
 * http://terminology.hl7.org/ValueSet/v3-ObservationIssueTriggerCodedObservationType
 */
export const ObservationIssueTriggerCodedObservationTypeCode = {
  /**
   * ObservationIssueTriggerCodedObservationType
   */
  ObservationIssueTriggerCodedObservationType:
    "_ObservationIssueTriggerCodedObservationType",

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
export type ObservationIssueTriggerCodedObservationTypeCode =
  typeof ObservationIssueTriggerCodedObservationTypeCode[keyof typeof ObservationIssueTriggerCodedObservationTypeCode];
