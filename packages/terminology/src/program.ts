/**
 * This value set defines an example set of codes that could be can be used to classify groupings of service-types/specialties.
 * http://terminology.hl7.org/ValueSet/program
 */
export const ProgramCode = {
  /**
   * Acquired Brain Injury (ABI) Program
   */
  AcquiredBrainInjuryABIProgram: "1",

  /**
   * ABI Slow To Recover (ABI STR) Program
   */
  ABISlowToRecoverABISTRProgram: "2",

  /**
   * Access Programs
   */
  AccessPrograms: "3",

  /**
   * Adult and Further Education (ACFE) Program
   */
  AdultandFurtherEducationACFEProgram: "4",

  /**
   * Adult Day Activity and Support Services (ADASS) Program
   */
  AdultDayActivityandSupportServicesADASSProgram: "5",

  /**
   * Adult Day Care Program
   */
  AdultDayCareProgram: "6",

  /**
   * ATSS (Adult Training Support Service)
   */
  ATSSAdultTrainingSupportService: "7",

  /**
   * Community Aged Care Packages (CACP)
   */
  CommunityAgedCarePackagesCACP: "8",

  /**
   * Care Coordination & Supplementary Services (CCSS)
   */
  CareCoordinationSupplementaryServicesCCSS: "9",

  /**
   * Cognitive Dementia Memory Service (CDAMS)
   */
  CognitiveDementiaMemoryServiceCDAMS: "10",

  /**
   * ChildFIRST
   */
  ChildFIRST: "11",

  /**
   * Children's Contact Services
   */
  ChildrensContactServices: "12",

  /**
   * Community Visitors Scheme
   */
  CommunityVisitorsScheme: "13",

  /**
   * CPP (Community Partners Program)
   */
  CPPCommunityPartnersProgram: "14",

  /**
   * Closing the Gap (CTG)
   */
  ClosingtheGapCTG: "15",

  /**
   * Coordinated Veterans' Care (CVC) Program
   */
  CoordinatedVeteransCareCVCProgram: "16",

  /**
   * Day Program
   */
  DayProgram: "17",

  /**
   * Drop In Program
   */
  DropInProgram: "18",

  /**
   * Early Years Program
   */
  EarlyYearsProgram: "19",

  /**
   * Employee Assistance Program
   */
  EmployeeAssistanceProgram: "20",

  /**
   * Home And Community Care (HACC)
   */
  HomeAndCommunityCareHACC: "21",

  /**
   * Hospital Admission Risk Program (HARP)
   */
  HospitalAdmissionRiskProgramHARP: "22",

  /**
   * Hospital in the Home (HITH) Program
   */
  HospitalintheHomeHITHProgram: "23",

  /**
   * ICTP (Intensive Community Treatment Program)
   */
  ICTPIntensiveCommunityTreatmentProgram: "24",

  /**
   * IFSS (Intensive Family Support Program)
   */
  IFSSIntensiveFamilySupportProgram: "25",

  /**
   * JPET (Job Placement, Education and Training)
   */
  JPETJobPlacementEducationandTraining: "26",

  /**
   * Koori Juvenile Justice Program
   */
  KooriJuvenileJusticeProgram: "27",

  /**
   * Language Literacy and Numeracy Program
   */
  LanguageLiteracyandNumeracyProgram: "28",

  /**
   * Life Skills Program
   */
  LifeSkillsProgram: "29",

  /**
   * LMP (Lifestyle Modification Program)
   */
  LMPLifestyleModificationProgram: "30",

  /**
   * MedsCheck Program
   */
  MedsCheckProgram: "31",

  /**
   * Methadone/Buprenorphine Program
   */
  MethadoneBuprenorphineProgram: "32",

  /**
   * National Disabilities Insurance Scheme (NDIS)
   */
  NationalDisabilitiesInsuranceSchemeNDIS: "33",

  /**
   * National Diabetes Services Scheme (NDSS)
   */
  NationalDiabetesServicesSchemeNDSS: "34",

  /**
   * Needle/Syringe Program
   */
  NeedleSyringeProgram: "35",

  /**
   * nPEP Program
   */
  nPEPProgram: "36",

  /**
   * Personal Support Program
   */
  PersonalSupportProgram: "37",

  /**
   * Partners in Recovery (PIR) Program
   */
  PartnersinRecoveryPIRProgram: "38",

  /**
   * Pre-employment Program
   */
  PreemploymentProgram: "39",

  /**
   * Reconnect Program
   */
  ReconnectProgram: "40",

  /**
   * Sexual Abuse Counselling and Prevention Program (SACPP)
   */
  SexualAbuseCounsellingandPreventionProgramSACPP: "41",

  /**
   * Social Support Programs
   */
  SocialSupportPrograms: "42",

  /**
   * Supported Residential Service (SRS)
   */
  SupportedResidentialServiceSRS: "43",

  /**
   * Tasmanian Aboriginal Centre (TAC)
   */
  TasmanianAboriginalCentreTAC: "44",

  /**
   * Victim's Assistance Program
   */
  VictimsAssistanceProgram: "45",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProgramCode = typeof ProgramCode[keyof typeof ProgramCode];
