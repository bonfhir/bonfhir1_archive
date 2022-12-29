/**
 * Concepts which are represented by codes identifying HL7Versions 2.x Master Files.
 * http://terminology.hl7.org/ValueSet/v2-0175
 */
export const Hl7VSMasterFileIdentifierCodeCode = {
  /**
   * Observation text master file segments (e.g., Lab)
   */
  ObservationtextmasterfilesegmentsegLab: "OM1",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  ObservationtextmasterfilesegmentsegLab: "OM2",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  ObservationtextmasterfilesegmentsegLab: "OM3",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  ObservationtextmasterfilesegmentsegLab: "OM4",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  ObservationtextmasterfilesegmentsegLab: "OM5",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  ObservationtextmasterfilesegmentsegLab: "OM6",

  /**
   * Clinical study master
   */
  Clinicalstudymaster: "CM0",

  /**
   * Clinical study phase master
   */
  Clinicalstudyphasemaster: "CM1",

  /**
   * Clinical study Data Schedule Master
   */
  ClinicalstudyDataScheduleMaster: "CM2",

  /**
   * Observation text master file segments (e.g., Lab)
   */
  ObservationtextmasterfilesegmentsegLab: "OM1-OM6",

  /**
   * Charge description master file
   */
  Chargedescriptionmasterfile: "CDM",

  /**
   * Clinical study with phases and scheduled master file
   */
  Clinicalstudywithphasesandscheduledmasterfile: "CMA",

  /**
   * Clinical study without phases but with scheduled master file
   */
  Clinicalstudywithoutphasesbutwithscheduledmasterfile: "CMB",

  /**
   * Location master file
   */
  Locationmasterfile: "LOC",

  /**
   * Numerical observation master file
   */
  Numericalobservationmasterfile: "OMA",

  /**
   * Categorical observation master file
   */
  Categoricalobservationmasterfile: "OMB",

  /**
   * Observation batteries master file
   */
  Observationbatteriesmasterfile: "OMC",

  /**
   * Calculated observations master file
   */
  Calculatedobservationsmasterfile: "OMD",

  /**
   * Mixed type observation master file
   */
  Mixedtypeobservationmasterfile: "OMM",

  /**
   * Practitioner master file
   */
  Practitionermasterfile: "PRA",

  /**
   * Staff master file
   */
  Staffmasterfile: "STF",

  /**
   * Clinic master file
   */
  Clinicmasterfile: "CLN",

  /**
   * Other Observation/Service Item master file
   */
  OtherObservationServiceItemmasterfile: "OME",

  /**
   * Inventory master file
   */
  Inventorymasterfile: "INV",

  /**
   * Medicare Limited Coverage Process
   */
  MedicareLimitedCoverageProcess: "MLCP",

  /**
   * Medicare Approved Coverage Process
   */
  MedicareApprovedCoverageProcess: "MACP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMasterFileIdentifierCodeCode =
  typeof Hl7VSMasterFileIdentifierCodeCode[keyof typeof Hl7VSMasterFileIdentifierCodeCode];
