/**
 * In the absence of an all-encompassing Provider Classification System, both X12N and the National Provider System Workgroup from the Centers for Medicare and Medicaid Services (CMS) commenced work on identifying and coding an external provider table that would be able to codify provider type and provider area of specialization for all medical related providers. CMS' intent was to provide a single coding structure to support work on the National Provider System, while X12N needed a single common table for trading partner use. The two projects worked independently to some extent until April 1996 when the lists were coordinated and a single taxonomy was proposed. A sub-group of the X12N TG2 WG 15 was charged with resolving differences in the two proposed taxonomies. Their work resulted in a single taxonomy that both CMS and members of X12N found meaningful, easy to use, and functional for electronic transactions.

The sub-group initially started with the CMS draft taxonomy. This list incorporated all types of providers associated with medical care in various ways. Many of the providers listed, such as technologists or technicians, support or repair equipment/machinery. A number of the providers offer medical services, in concert with others, and do not or cannot bill independently for their portion. The amount of research to validate and classify all providers using the proposed hierarchical structure was enormous. The X12N sub-group focused on medical providers who are licensed practitioners, those who bill for health-related services rendered, and those who appeared on the Medicare CMS Provider Specialty listing. This included providers who were licensed to practice medicine via state licensure agencies. In addition, a very broad definition of "areas of specialization" was used, which included nationally recognized specialties, provider self-designated specialties, areas of practice focus, and any request by any agency or trading partner submitted before the first taxonomy release. This level of detail captured specialty information in categories detailed enough to support those trading credentialing information, yet broad enough to support those wishing to trade directory level specialization information.

In 2001, ANSI ASC X12N asked the NUCC to become the official maintainer of the Health Care Provider Taxonomy List. The NUCC has a formal operating protocol and its membership includes representation from key provider and payer organizations, as well as state and federal agencies, standard development organizations and the National Uniform Billing Committee (NUBC). Criteria for membership includes a national scope and representation of a unique constituency affected by health care electronic commerce, with an emphasis on maintaining a provider/payer balance.
 * http://terminology.hl7.org/ValueSet/v3-NUCCProviderCodes
 */
export const NUCCProviderCodesCode = {
  /**
   * Drama Therapist
   */
  DramaTherapist: "101200000X",

  /**
   * Counselor
   */
  Counselor: "101Y00000X",

  /**
   * Addiction (Substance Use Disorder) Counselor
   */
  AddictionSubstanceUseDisorderCounselor: "101YA0400X",

  /**
   * Mental Health Counselor
   */
  MentalHealthCounselor: "101YM0800X",

  /**
   * Pastoral Counselor
   */
  PastoralCounselor: "101YP1600X",

  /**
   * Professional Counselor
   */
  ProfessionalCounselor: "101YP2500X",

  /**
   * School Counselor
   */
  SchoolCounselor: "101YS0200X",

  /**
   * Psychoanalyst
   */
  Psychoanalyst: "102L00000X",

  /**
   * Poetry Therapist
   */
  PoetryTherapist: "102X00000X",

  /**
   * Clinical Neuropsychologist
   */
  ClinicalNeuropsychologist: "103G00000X",

  /**
   * Deactivated - Clinical Neuropsychologist
   */
  DeactivatedClinicalNeuropsychologist: "103GC0700X",

  /**
   * Behavioral Analyst
   */
  BehavioralAnalyst: "103K00000X",

  /**
   * Psychologist
   */
  Psychologist: "103T00000X",

  /**
   * Addiction (Substance Use Disorder) Psychologist
   */
  AddictionSubstanceUseDisorderPsychologist: "103TA0400X",

  /**
   * Adult Development & Aging Psychologist
   */
  AdultDevelopmentAgingPsychologist: "103TA0700X",

  /**
   * Cognitive & Behavioral Psychologist
   */
  CognitiveBehavioralPsychologist: "103TB0200X",

  /**
   * Clinical Psychologist
   */
  ClinicalPsychologist: "103TC0700X",

  /**
   * Counseling Psychologist
   */
  CounselingPsychologist: "103TC1900X",

  /**
   * Clinical Child & Adolescent Psychologist
   */
  ClinicalChildAdolescentPsychologist: "103TC2200X",

  /**
   * Deactivated - Psychologist
   */
  DeactivatedPsychologist: "103TE1000X",

  /**
   * Exercise & Sports Psychologist
   */
  ExerciseSportsPsychologist: "103TE1100X",

  /**
   * Family Psychologist
   */
  FamilyPsychologist: "103TF0000X",

  /**
   * Forensic Psychologist
   */
  ForensicPsychologist: "103TF0200X",

  /**
   * Health Psychologist
   */
  HealthPsychologist: "103TH0004X",

  /**
   * Health Service Psychologist
   */
  HealthServicePsychologist: "103TH0100X",

  /**
   * Deactivated - Psychologist Men & Masculinity
   */
  DeactivatedPsychologistMenMasculinity: "103TM1700X",

  /**
   * Intellectual & Developmental Disabilities Psychologist
   */
  IntellectualDevelopmentalDisabilitiesPsychologist: "103TM1800X",

  /**
   * Prescribing (Medical) Psychologist
   */
  PrescribingMedicalPsychologist: "103TP0016X",

  /**
   * Psychoanalysis Psychologist
   */
  PsychoanalysisPsychologist: "103TP0814X",

  /**
   * Deactivated - Psychologist Psychotherapy
   */
  DeactivatedPsychologistPsychotherapy: "103TP2700X",

  /**
   * Group Psychotherapy Psychologist
   */
  GroupPsychotherapyPsychologist: "103TP2701X",

  /**
   * Rehabilitation Psychologist
   */
  RehabilitationPsychologist: "103TR0400X",

  /**
   * School Psychologist
   */
  SchoolPsychologist: "103TS0200X",

  /**
   * Deactivated - Psychotherapy Women
   */
  DeactivatedPsychotherapyWomen: "103TW0100X",

  /**
   * Social Worker
   */
  SocialWorker: "104100000X",

  /**
   * Clinical Social Worker
   */
  ClinicalSocialWorker: "1041C0700X",

  /**
   * School Social Worker
   */
  SchoolSocialWorker: "1041S0200X",

  /**
   * Assistant Behavior Analyst
   */
  AssistantBehaviorAnalyst: "106E00000X",

  /**
   * Marriage & Family Therapist
   */
  MarriageFamilyTherapist: "106H00000X",

  /**
   * Behavior Technician
   */
  BehaviorTechnician: "106S00000X",

  /**
   * Chiropractor
   */
  Chiropractor: "111N00000X",

  /**
   * Independent Medical Examiner Chiropractor
   */
  IndependentMedicalExaminerChiropractor: "111NI0013X",

  /**
   * Internist Chiropractor
   */
  InternistChiropractor: "111NI0900X",

  /**
   * Neurology Chiropractor
   */
  NeurologyChiropractor: "111NN0400X",

  /**
   * Nutrition Chiropractor
   */
  NutritionChiropractor: "111NN1001X",

  /**
   * Pediatric Chiropractor
   */
  PediatricChiropractor: "111NP0017X",

  /**
   * Radiology Chiropractor
   */
  RadiologyChiropractor: "111NR0200X",

  /**
   * Rehabilitation Chiropractor
   */
  RehabilitationChiropractor: "111NR0400X",

  /**
   * Sports Physician Chiropractor
   */
  SportsPhysicianChiropractor: "111NS0005X",

  /**
   * Thermography Chiropractor
   */
  ThermographyChiropractor: "111NT0100X",

  /**
   * Occupational Health Chiropractor
   */
  OccupationalHealthChiropractor: "111NX0100X",

  /**
   * Orthopedic Chiropractor
   */
  OrthopedicChiropractor: "111NX0800X",

  /**
   * Dentist
   */
  Dentist: "122300000X",

  /**
   * Public Health Dentist
   */
  PublicHealthDentist: "1223D0001X",

  /**
   * Dentist Anesthesiologist
   */
  DentistAnesthesiologist: "1223D0004X",

  /**
   * Endodontist
   */
  Endodontist: "1223E0200X",

  /**
   * General Practice Dentistry
   */
  GeneralPracticeDentistry: "1223G0001X",

  /**
   * Oral and Maxillofacial Pathology Dentist
   */
  OralandMaxillofacialPathologyDentist: "1223P0106X",

  /**
   * Pediatric Dentist
   */
  PediatricDentist: "1223P0221X",

  /**
   * Periodontist
   */
  Periodontist: "1223P0300X",

  /**
   * Prosthodontist
   */
  Prosthodontist: "1223P0700X",

  /**
   * Oral and Maxillofacial Surgery (Dentist)
   */
  OralandMaxillofacialSurgeryDentist: "1223S0112X",

  /**
   * Oral and Maxillofacial Radiology Dentist
   */
  OralandMaxillofacialRadiologyDentist: "1223X0008X",

  /**
   * Orthodontics and Dentofacial Orthopedic Dentist
   */
  OrthodonticsandDentofacialOrthopedicDentist: "1223X0400X",

  /**
   * Orofacial Pain Dentist
   */
  OrofacialPainDentist: "1223X2210X",

  /**
   * Denturist
   */
  Denturist: "122400000X",

  /**
   * Dental Hygienist
   */
  DentalHygienist: "124Q00000X",

  /**
   * Dental Therapist
   */
  DentalTherapist: "125J00000X",

  /**
   * Advanced Practice Dental Therapist
   */
  AdvancedPracticeDentalTherapist: "125K00000X",

  /**
   * Oral Medicinist
   */
  OralMedicinist: "125Q00000X",

  /**
   * Dental Assistant
   */
  DentalAssistant: "126800000X",

  /**
   * Dental Laboratory Technician
   */
  DentalLaboratoryTechnician: "126900000X",

  /**
   * Dietary Manager
   */
  DietaryManager: "132700000X",

  /**
   * Nutritionist
   */
  Nutritionist: "133N00000X",

  /**
   * Nutrition Education Nutritionist
   */
  NutritionEducationNutritionist: "133NN1002X",

  /**
   * Registered Dietitian
   */
  RegisteredDietitian: "133V00000X",

  /**
   * Pediatric Nutrition Registered Dietitian
   */
  PediatricNutritionRegisteredDietitian: "133VN1004X",

  /**
   * Renal Nutrition Registered Dietitian
   */
  RenalNutritionRegisteredDietitian: "133VN1005X",

  /**
   * Metabolic Nutrition Registered Dietitian
   */
  MetabolicNutritionRegisteredDietitian: "133VN1006X",

  /**
   * Gerontological Nutrition Registered Dietitian
   */
  GerontologicalNutritionRegisteredDietitian: "133VN1101X",

  /**
   * Obesity and Weight Management Nutrition Registered Dietitian
   */
  ObesityandWeightManagementNutritionRegisteredDietitian: "133VN1201X",

  /**
   * Oncology Nutrition Registered Dietitian
   */
  OncologyNutritionRegisteredDietitian: "133VN1301X",

  /**
   * Pediatric Critical Care Nutrition Registered Dietitian
   */
  PediatricCriticalCareNutritionRegisteredDietitian: "133VN1401X",

  /**
   * Sports Dietetics Nutrition Registered Dietitian
   */
  SportsDieteticsNutritionRegisteredDietitian: "133VN1501X",

  /**
   * Registered Dietetic Technician
   */
  RegisteredDieteticTechnician: "136A00000X",

  /**
   * Personal Emergency Response Attendant
   */
  PersonalEmergencyResponseAttendant: "146D00000X",

  /**
   * Paramedic
   */
  Paramedic: "146L00000X",

  /**
   * Intermediate Emergency Medical Technician
   */
  IntermediateEmergencyMedicalTechnician: "146M00000X",

  /**
   * Basic Emergency Medical Technician
   */
  BasicEmergencyMedicalTechnician: "146N00000X",

  /**
   * Optometrist
   */
  Optometrist: "152W00000X",

  /**
   * Corneal and Contact Management Optometrist
   */
  CornealandContactManagementOptometrist: "152WC0802X",

  /**
   * Low Vision Rehabilitation Optometrist
   */
  LowVisionRehabilitationOptometrist: "152WL0500X",

  /**
   * Pediatric Optometrist
   */
  PediatricOptometrist: "152WP0200X",

  /**
   * Sports Vision Optometrist
   */
  SportsVisionOptometrist: "152WS0006X",

  /**
   * Vision Therapy Optometrist
   */
  VisionTherapyOptometrist: "152WV0400X",

  /**
   * Occupational Vision Optometrist
   */
  OccupationalVisionOptometrist: "152WX0102X",

  /**
   * Technician/Technologist
   */
  TechnicianTechnologist: "156F00000X",

  /**
   * Contact Lens Technician/Technologist
   */
  ContactLensTechnicianTechnologist: "156FC0800X",

  /**
   * Contact Lens Fitter
   */
  ContactLensFitter: "156FC0801X",

  /**
   * Ophthalmic Technician/Technologist
   */
  OphthalmicTechnicianTechnologist: "156FX1100X",

  /**
   * Ophthalmic Assistant
   */
  OphthalmicAssistant: "156FX1101X",

  /**
   * Optometric Assistant Technician
   */
  OptometricAssistantTechnician: "156FX1201X",

  /**
   * Optometric Technician
   */
  OptometricTechnician: "156FX1202X",

  /**
   * Ocularist
   */
  Ocularist: "156FX1700X",

  /**
   * Optician
   */
  Optician: "156FX1800X",

  /**
   * Orthoptist
   */
  Orthoptist: "156FX1900X",

  /**
   * Registered Nurse
   */
  RegisteredNurse: "163W00000X",

  /**
   * Addiction (Substance Use Disorder) Registered Nurse
   */
  AddictionSubstanceUseDisorderRegisteredNurse: "163WA0400X",

  /**
   * Administrator Registered Nurse
   */
  AdministratorRegisteredNurse: "163WA2000X",

  /**
   * Critical Care Medicine Registered Nurse
   */
  CriticalCareMedicineRegisteredNurse: "163WC0200X",

  /**
   * Case Management Registered Nurse
   */
  CaseManagementRegisteredNurse: "163WC0400X",

  /**
   * College Health Registered Nurse
   */
  CollegeHealthRegisteredNurse: "163WC1400X",

  /**
   * Community Health Registered Nurse
   */
  CommunityHealthRegisteredNurse: "163WC1500X",

  /**
   * Continuing Education/Staff Development Registered Nurse
   */
  ContinuingEducationStaffDevelopmentRegisteredNurse: "163WC1600X",

  /**
   * Continence Care Registered Nurse
   */
  ContinenceCareRegisteredNurse: "163WC2100X",

  /**
   * Cardiac Rehabilitation Registered Nurse
   */
  CardiacRehabilitationRegisteredNurse: "163WC3500X",

  /**
   * Diabetes Educator Registered Nurse
   */
  DiabetesEducatorRegisteredNurse: "163WD0400X",

  /**
   * Peritoneal Dialysis Registered Nurse
   */
  PeritonealDialysisRegisteredNurse: "163WD1100X",

  /**
   * Emergency Registered Nurse
   */
  EmergencyRegisteredNurse: "163WE0003X",

  /**
   * Enterostomal Therapy Registered Nurse
   */
  EnterostomalTherapyRegisteredNurse: "163WE0900X",

  /**
   * Flight Registered Nurse
   */
  FlightRegisteredNurse: "163WF0300X",

  /**
   * General Practice Registered Nurse
   */
  GeneralPracticeRegisteredNurse: "163WG0000X",

  /**
   * Gastroenterology Registered Nurse
   */
  GastroenterologyRegisteredNurse: "163WG0100X",

  /**
   * Gerontology Registered Nurse
   */
  GerontologyRegisteredNurse: "163WG0600X",

  /**
   * Home Health Registered Nurse
   */
  HomeHealthRegisteredNurse: "163WH0200X",

  /**
   * Hemodialysis Registered Nurse
   */
  HemodialysisRegisteredNurse: "163WH0500X",

  /**
   * Hospice Registered Nurse
   */
  HospiceRegisteredNurse: "163WH1000X",

  /**
   * Infusion Therapy Registered Nurse
   */
  InfusionTherapyRegisteredNurse: "163WI0500X",

  /**
   * Infection Control Registered Nurse
   */
  InfectionControlRegisteredNurse: "163WI0600X",

  /**
   * Lactation Consultant (Registered Nurse)
   */
  LactationConsultantRegisteredNurse: "163WL0100X",

  /**
   * Maternal Newborn Registered Nurse
   */
  MaternalNewbornRegisteredNurse: "163WM0102X",

  /**
   * Medical-Surgical Registered Nurse
   */
  MedicalSurgicalRegisteredNurse: "163WM0705X",

  /**
   * Nurse Massage Therapist (NMT)
   */
  NurseMassageTherapistNMT: "163WM1400X",

  /**
   * Neonatal Intensive Care Registered Nurse
   */
  NeonatalIntensiveCareRegisteredNurse: "163WN0002X",

  /**
   * Low-Risk Neonatal Registered Nurse
   */
  LowRiskNeonatalRegisteredNurse: "163WN0003X",

  /**
   * Nephrology Registered Nurse
   */
  NephrologyRegisteredNurse: "163WN0300X",

  /**
   * Neuroscience Registered Nurse
   */
  NeuroscienceRegisteredNurse: "163WN0800X",

  /**
   * Nutrition Support Registered Nurse
   */
  NutritionSupportRegisteredNurse: "163WN1003X",

  /**
   * Pain Management Registered Nurse
   */
  PainManagementRegisteredNurse: "163WP0000X",

  /**
   * Pediatric Registered Nurse
   */
  PediatricRegisteredNurse: "163WP0200X",

  /**
   * Pediatric Oncology Registered Nurse
   */
  PediatricOncologyRegisteredNurse: "163WP0218X",

  /**
   * Child & Adolescent Psychiatric/Mental Health Registered Nurse
   */
  ChildAdolescentPsychiatricMentalHealthRegisteredNurse: "163WP0807X",

  /**
   * Psychiatric/Mental Health Registered Nurse
   */
  PsychiatricMentalHealthRegisteredNurse: "163WP0808X",

  /**
   * Adult Psychiatric/Mental Health Registered Nurse
   */
  AdultPsychiatricMentalHealthRegisteredNurse: "163WP0809X",

  /**
   * Perinatal Registered Nurse
   */
  PerinatalRegisteredNurse: "163WP1700X",

  /**
   * Ambulatory Care Registered Nurse
   */
  AmbulatoryCareRegisteredNurse: "163WP2201X",

  /**
   * Registered Nurse First Assistant
   */
  RegisteredNurseFirstAssistant: "163WR0006X",

  /**
   * Rehabilitation Registered Nurse
   */
  RehabilitationRegisteredNurse: "163WR0400X",

  /**
   * Reproductive Endocrinology/Infertility Registered Nurse
   */
  ReproductiveEndocrinologyInfertilityRegisteredNurse: "163WR1000X",

  /**
   * Plastic Surgery Registered Nurse
   */
  PlasticSurgeryRegisteredNurse: "163WS0121X",

  /**
   * School Registered Nurse
   */
  SchoolRegisteredNurse: "163WS0200X",

  /**
   * Urology Registered Nurse
   */
  UrologyRegisteredNurse: "163WU0100X",

  /**
   * Wound Care Registered Nurse
   */
  WoundCareRegisteredNurse: "163WW0000X",

  /**
   * Ambulatory Women's Health Care Registered Nurse
   */
  AmbulatoryWomensHealthCareRegisteredNurse: "163WW0101X",

  /**
   * High-Risk Obstetric Registered Nurse
   */
  HighRiskObstetricRegisteredNurse: "163WX0002X",

  /**
   * Inpatient Obstetric Registered Nurse
   */
  InpatientObstetricRegisteredNurse: "163WX0003X",

  /**
   * Occupational Health Registered Nurse
   */
  OccupationalHealthRegisteredNurse: "163WX0106X",

  /**
   * Oncology Registered Nurse
   */
  OncologyRegisteredNurse: "163WX0200X",

  /**
   * Otorhinolaryngology & Head-Neck Registered Nurse
   */
  OtorhinolaryngologyHeadNeckRegisteredNurse: "163WX0601X",

  /**
   * Orthopedic Registered Nurse
   */
  OrthopedicRegisteredNurse: "163WX0800X",

  /**
   * Ophthalmic Registered Nurse
   */
  OphthalmicRegisteredNurse: "163WX1100X",

  /**
   * Ostomy Care Registered Nurse
   */
  OstomyCareRegisteredNurse: "163WX1500X",

  /**
   * Licensed Practical Nurse
   */
  LicensedPracticalNurse: "164W00000X",

  /**
   * Licensed Vocational Nurse
   */
  LicensedVocationalNurse: "164X00000X",

  /**
   * Licensed Psychiatric Technician
   */
  LicensedPsychiatricTechnician: "167G00000X",

  /**
   * Ph.D. Medical Genetics
   */
  PhDMedicalGenetics: "170100000X",

  /**
   * Genetic Counselor (M.S.)
   */
  GeneticCounselorMS: "170300000X",

  /**
   * Military Health Care Provider
   */
  MilitaryHealthCareProvider: "171000000X",

  /**
   * Independent Duty Corpsman
   */
  IndependentDutyCorpsman: "1710I1002X",

  /**
   * Independent Duty Medical Technicians
   */
  IndependentDutyMedicalTechnicians: "1710I1003X",

  /**
   * Acupuncturist
   */
  Acupuncturist: "171100000X",

  /**
   * Health & Wellness Coach
   */
  HealthWellnessCoach: "171400000X",

  /**
   * Case Manager/Care Coordinator
   */
  CaseManagerCareCoordinator: "171M00000X",

  /**
   * Interpreter
   */
  Interpreter: "171R00000X",

  /**
   * Contractor
   */
  Contractor: "171W00000X",

  /**
   * Home Modifications Contractor
   */
  HomeModificationsContractor: "171WH0202X",

  /**
   * Vehicle Modifications Contractor
   */
  VehicleModificationsContractor: "171WV0202X",

  /**
   * Driver
   */
  Driver: "172A00000X",

  /**
   * Mechanotherapist
   */
  Mechanotherapist: "172M00000X",

  /**
   * Naprapath
   */
  Naprapath: "172P00000X",

  /**
   * Community Health Worker
   */
  CommunityHealthWorker: "172V00000X",

  /**
   * Legal Medicine
   */
  LegalMedicine: "173000000X",

  /**
   * Reflexologist
   */
  Reflexologist: "173C00000X",

  /**
   * Sleep Specialist (PhD)
   */
  SleepSpecialistPhD: "173F00000X",

  /**
   * Meals Provider
   */
  MealsProvider: "174200000X",

  /**
   * Specialist
   */
  Specialist: "174400000X",

  /**
   * Graphics Designer
   */
  GraphicsDesigner: "1744G0900X",

  /**
   * Prosthetics Case Management
   */
  ProstheticsCaseManagement: "1744P3200X",

  /**
   * Research Study Specialist
   */
  ResearchStudySpecialist: "1744R1102X",

  /**
   * Research Study Abstracter/Coder
   */
  ResearchStudyAbstracterCoder: "1744R1103X",

  /**
   * Health Educator
   */
  HealthEducator: "174H00000X",

  /**
   * Veterinarian
   */
  Veterinarian: "174M00000X",

  /**
   * Medical Research Veterinarian
   */
  MedicalResearchVeterinarian: "174MM1900X",

  /**
   * Lactation Consultant (Non-RN)
   */
  LactationConsultantNonRN: "174N00000X",

  /**
   * Clinical Ethicist
   */
  ClinicalEthicist: "174V00000X",

  /**
   * Naturopath
   */
  Naturopath: "175F00000X",

  /**
   * Homeopath
   */
  Homeopath: "175L00000X",

  /**
   * Lay Midwife
   */
  LayMidwife: "175M00000X",

  /**
   * Peer Specialist
   */
  PeerSpecialist: "175T00000X",

  /**
   * Midwife
   */
  Midwife: "176B00000X",

  /**
   * Funeral Director
   */
  FuneralDirector: "176P00000X",

  /**
   * Lodging Provider
   */
  LodgingProvider: "177F00000X",

  /**
   * Pharmacist
   */
  Pharmacist: "183500000X",

  /**
   * Critical Care Pharmacist
   */
  CriticalCarePharmacist: "1835C0205X",

  /**
   * Deactivated - Pharmacist
   */
  DeactivatedPharmacist: "1835G0000X",

  /**
   * Geriatric Pharmacist
   */
  GeriatricPharmacist: "1835G0303X",

  /**
   * Nuclear Pharmacist
   */
  NuclearPharmacist: "1835N0905X",

  /**
   * Nutrition Support Pharmacist
   */
  NutritionSupportPharmacist: "1835N1003X",

  /**
   * Pharmacist Clinician (PhC)/ Clinical Pharmacy Specialist
   */
  PharmacistClinicianPhCClinicalPharmacySpecialist: "1835P0018X",

  /**
   * Pediatric Pharmacist
   */
  PediatricPharmacist: "1835P0200X",

  /**
   * Pharmacotherapy Pharmacist
   */
  PharmacotherapyPharmacist: "1835P1200X",

  /**
   * Psychiatric Pharmacist
   */
  PsychiatricPharmacist: "1835P1300X",

  /**
   * Ambulatory Care Pharmacist
   */
  AmbulatoryCarePharmacist: "1835P2201X",

  /**
   * Oncology Pharmacist
   */
  OncologyPharmacist: "1835X0200X",

  /**
   * Pharmacy Technician
   */
  PharmacyTechnician: "183700000X",

  /**
   * Multi-Specialty Group
   */
  MultiSpecialtyGroup: "193200000X",

  /**
   * Single Specialty Group
   */
  SingleSpecialtyGroup: "193400000X",

  /**
   * Independent Medical Examiner Physician
   */
  IndependentMedicalExaminerPhysician: "202C00000X",

  /**
   * Integrative Medicine
   */
  IntegrativeMedicine: "202D00000X",

  /**
   * Phlebology Physician
   */
  PhlebologyPhysician: "202K00000X",

  /**
   * Sports Medicine (Neuromusculoskeletal Medicine) Physician
   */
  SportsMedicineNeuromusculoskeletalMedicinePhysician: "204C00000X",

  /**
   * Neuromusculoskeletal Medicine & OMM Physician
   */
  NeuromusculoskeletalMedicineOMMPhysician: "204D00000X",

  /**
   * Oral & Maxillofacial Surgery (D.M.D.)
   */
  OralMaxillofacialSurgeryDMD: "204E00000X",

  /**
   * Transplant Surgery Physician
   */
  TransplantSurgeryPhysician: "204F00000X",

  /**
   * Electrodiagnostic Medicine Physician
   */
  ElectrodiagnosticMedicinePhysician: "204R00000X",

  /**
   * Allergy & Immunology Physician
   */
  AllergyImmunologyPhysician: "207K00000X",

  /**
   * Allergy Physician
   */
  AllergyPhysician: "207KA0200X",

  /**
   * Clinical & Laboratory Immunology (Allergy & Immunology) Physician
   */
  ClinicalLaboratoryImmunologyAllergyImmunologyPhysician: "207KI0005X",

  /**
   * Anesthesiology Physician
   */
  AnesthesiologyPhysician: "207L00000X",

  /**
   * Addiction Medicine (Anesthesiology) Physician
   */
  AddictionMedicineAnesthesiologyPhysician: "207LA0401X",

  /**
   * Critical Care Medicine (Anesthesiology) Physician
   */
  CriticalCareMedicineAnesthesiologyPhysician: "207LC0200X",

  /**
   * Hospice and Palliative Medicine (Anesthesiology) Physician
   */
  HospiceandPalliativeMedicineAnesthesiologyPhysician: "207LH0002X",

  /**
   * Pain Medicine (Anesthesiology) Physician
   */
  PainMedicineAnesthesiologyPhysician: "207LP2900X",

  /**
   * Pediatric Anesthesiology Physician
   */
  PediatricAnesthesiologyPhysician: "207LP3000X",

  /**
   * Dermatology Physician
   */
  DermatologyPhysician: "207N00000X",

  /**
   * MOHS-Micrographic Surgery Physician
   */
  MOHSMicrographicSurgeryPhysician: "207ND0101X",

  /**
   * Dermatopathology Physician
   */
  DermatopathologyPhysician: "207ND0900X",

  /**
   * Clinical & Laboratory Dermatological Immunology Physician
   */
  ClinicalLaboratoryDermatologicalImmunologyPhysician: "207NI0002X",

  /**
   * Pediatric Dermatology Physician
   */
  PediatricDermatologyPhysician: "207NP0225X",

  /**
   * Procedural Dermatology Physician
   */
  ProceduralDermatologyPhysician: "207NS0135X",

  /**
   * Emergency Medicine Physician
   */
  EmergencyMedicinePhysician: "207P00000X",

  /**
   * Emergency Medical Services (Emergency Medicine) Physician
   */
  EmergencyMedicalServicesEmergencyMedicinePhysician: "207PE0004X",

  /**
   * Undersea and Hyperbaric Medicine (Emergency Medicine) Physician
   */
  UnderseaandHyperbaricMedicineEmergencyMedicinePhysician: "207PE0005X",

  /**
   * Hospice and Palliative Medicine (Emergency Medicine) Physician
   */
  HospiceandPalliativeMedicineEmergencyMedicinePhysician: "207PH0002X",

  /**
   * Pediatric Emergency Medicine (Emergency Medicine) Physician
   */
  PediatricEmergencyMedicineEmergencyMedicinePhysician: "207PP0204X",

  /**
   * Sports Medicine (Emergency Medicine) Physician
   */
  SportsMedicineEmergencyMedicinePhysician: "207PS0010X",

  /**
   * Medical Toxicology (Emergency Medicine) Physician
   */
  MedicalToxicologyEmergencyMedicinePhysician: "207PT0002X",

  /**
   * Family Medicine Physician
   */
  FamilyMedicinePhysician: "207Q00000X",

  /**
   * Adolescent Medicine (Family Medicine) Physician
   */
  AdolescentMedicineFamilyMedicinePhysician: "207QA0000X",

  /**
   * Addiction Medicine (Family Medicine) Physician
   */
  AddictionMedicineFamilyMedicinePhysician: "207QA0401X",

  /**
   * Adult Medicine Physician
   */
  AdultMedicinePhysician: "207QA0505X",

  /**
   * Obesity Medicine (Family Medicine) Physician
   */
  ObesityMedicineFamilyMedicinePhysician: "207QB0002X",

  /**
   * Geriatric Medicine (Family Medicine) Physician
   */
  GeriatricMedicineFamilyMedicinePhysician: "207QG0300X",

  /**
   * Hospice and Palliative Medicine (Family Medicine) Physician
   */
  HospiceandPalliativeMedicineFamilyMedicinePhysician: "207QH0002X",

  /**
   * Sports Medicine (Family Medicine) Physician
   */
  SportsMedicineFamilyMedicinePhysician: "207QS0010X",

  /**
   * Sleep Medicine (Family Medicine) Physician
   */
  SleepMedicineFamilyMedicinePhysician: "207QS1201X",

  /**
   * Internal Medicine Physician
   */
  InternalMedicinePhysician: "207R00000X",

  /**
   * Adolescent Medicine (Internal Medicine) Physician
   */
  AdolescentMedicineInternalMedicinePhysician: "207RA0000X",

  /**
   * Advanced Heart Failure and Transplant Cardiology Physician
   */
  AdvancedHeartFailureandTransplantCardiologyPhysician: "207RA0001X",

  /**
   * Adult Congenital Heart Disease Physician
   */
  AdultCongenitalHeartDiseasePhysician: "207RA0002X",

  /**
   * Allergy & Immunology (Internal Medicine) Physician
   */
  AllergyImmunologyInternalMedicinePhysician: "207RA0201X",

  /**
   * Addiction Medicine (Internal Medicine) Physician
   */
  AddictionMedicineInternalMedicinePhysician: "207RA0401X",

  /**
   * Obesity Medicine (Internal Medicine) Physician
   */
  ObesityMedicineInternalMedicinePhysician: "207RB0002X",

  /**
   * Cardiovascular Disease Physician
   */
  CardiovascularDiseasePhysician: "207RC0000X",

  /**
   * Clinical Cardiac Electrophysiology Physician
   */
  ClinicalCardiacElectrophysiologyPhysician: "207RC0001X",

  /**
   * Critical Care Medicine (Internal Medicine) Physician
   */
  CriticalCareMedicineInternalMedicinePhysician: "207RC0200X",

  /**
   * Endocrinology, Diabetes & Metabolism Physician
   */
  EndocrinologyDiabetesMetabolismPhysician: "207RE0101X",

  /**
   * Gastroenterology Physician
   */
  GastroenterologyPhysician: "207RG0100X",

  /**
   * Geriatric Medicine (Internal Medicine) Physician
   */
  GeriatricMedicineInternalMedicinePhysician: "207RG0300X",

  /**
   * Hematology (Internal Medicine) Physician
   */
  HematologyInternalMedicinePhysician: "207RH0000X",

  /**
   * Hospice and Palliative Medicine (Internal Medicine) Physician
   */
  HospiceandPalliativeMedicineInternalMedicinePhysician: "207RH0002X",

  /**
   * Hematology & Oncology Physician
   */
  HematologyOncologyPhysician: "207RH0003X",

  /**
   * Hypertension Specialist Physician
   */
  HypertensionSpecialistPhysician: "207RH0005X",

  /**
   * Clinical & Laboratory Immunology (Internal Medicine) Physician
   */
  ClinicalLaboratoryImmunologyInternalMedicinePhysician: "207RI0001X",

  /**
   * Hepatology Physician
   */
  HepatologyPhysician: "207RI0008X",

  /**
   * Interventional Cardiology Physician
   */
  InterventionalCardiologyPhysician: "207RI0011X",

  /**
   * Infectious Disease Physician
   */
  InfectiousDiseasePhysician: "207RI0200X",

  /**
   * Magnetic Resonance Imaging (MRI) Internal Medicine Physician
   */
  MagneticResonanceImagingMRIInternalMedicinePhysician: "207RM1200X",

  /**
   * Nephrology Physician
   */
  NephrologyPhysician: "207RN0300X",

  /**
   * Pulmonary Disease Physician
   */
  PulmonaryDiseasePhysician: "207RP1001X",

  /**
   * Rheumatology Physician
   */
  RheumatologyPhysician: "207RR0500X",

  /**
   * Sports Medicine (Internal Medicine) Physician
   */
  SportsMedicineInternalMedicinePhysician: "207RS0010X",

  /**
   * Sleep Medicine (Internal Medicine) Physician
   */
  SleepMedicineInternalMedicinePhysician: "207RS0012X",

  /**
   * Transplant Hepatology Physician
   */
  TransplantHepatologyPhysician: "207RT0003X",

  /**
   * Medical Oncology Physician
   */
  MedicalOncologyPhysician: "207RX0202X",

  /**
   * Clinical Cytogenetics Physician
   */
  ClinicalCytogeneticsPhysician: "207SC0300X",

  /**
   * Clinical Genetics (M.D.) Physician
   */
  ClinicalGeneticsMDPhysician: "207SG0201X",

  /**
   * Clinical Biochemical Genetics Physician
   */
  ClinicalBiochemicalGeneticsPhysician: "207SG0202X",

  /**
   * Clinical Molecular Genetics Physician
   */
  ClinicalMolecularGeneticsPhysician: "207SG0203X",

  /**
   * Ph.D. Medical Genetics Physician
   */
  PhDMedicalGeneticsPhysician: "207SG0205X",

  /**
   * Molecular Genetic Pathology (Medical Genetics) Physician
   */
  MolecularGeneticPathologyMedicalGeneticsPhysician: "207SM0001X",

  /**
   * Neurological Surgery Physician
   */
  NeurologicalSurgeryPhysician: "207T00000X",

  /**
   * Nuclear Medicine Physician
   */
  NuclearMedicinePhysician: "207U00000X",

  /**
   * Nuclear Cardiology Physician
   */
  NuclearCardiologyPhysician: "207UN0901X",

  /**
   * Nuclear Imaging & Therapy Physician
   */
  NuclearImagingTherapyPhysician: "207UN0902X",

  /**
   * In Vivo & In Vitro Nuclear Medicine Physician
   */
  InVivoInVitroNuclearMedicinePhysician: "207UN0903X",

  /**
   * Obstetrics & Gynecology Physician
   */
  ObstetricsGynecologyPhysician: "207V00000X",

  /**
   * Obesity Medicine (Obstetrics & Gynecology) Physician
   */
  ObesityMedicineObstetricsGynecologyPhysician: "207VB0002X",

  /**
   * Critical Care Medicine (Obstetrics & Gynecology) Physician
   */
  CriticalCareMedicineObstetricsGynecologyPhysician: "207VC0200X",

  /**
   * Complex Family Planning
   */
  ComplexFamilyPlanning: "207VC0300X",

  /**
   * Reproductive Endocrinology Physician
   */
  ReproductiveEndocrinologyPhysician: "207VE0102X",

  /**
   * Female Pelvic Medicine and Reconstructive Surgery (Obstetrics & Gynecology) Physician
   */
  FemalePelvicMedicineandReconstructiveSurgeryObstetricsGynecologyPhysician:
    "207VF0040X",

  /**
   * Gynecology Physician
   */
  GynecologyPhysician: "207VG0400X",

  /**
   * Hospice and Palliative Medicine (Obstetrics & Gynecology) Physician
   */
  HospiceandPalliativeMedicineObstetricsGynecologyPhysician: "207VH0002X",

  /**
   * Maternal & Fetal Medicine Physician
   */
  MaternalFetalMedicinePhysician: "207VM0101X",

  /**
   * Obstetrics Physician
   */
  ObstetricsPhysician: "207VX0000X",

  /**
   * Gynecologic Oncology Physician
   */
  GynecologicOncologyPhysician: "207VX0201X",

  /**
   * Ophthalmology Physician
   */
  OphthalmologyPhysician: "207W00000X",

  /**
   * Glaucoma Specialist (Ophthalmology) Physician
   */
  GlaucomaSpecialistOphthalmologyPhysician: "207WX0009X",

  /**
   * Retina Specialist (Ophthalmology) Physician
   */
  RetinaSpecialistOphthalmologyPhysician: "207WX0107X",

  /**
   * Uveitis and Ocular Inflammatory Disease (Ophthalmology) Physician
   */
  UveitisandOcularInflammatoryDiseaseOphthalmologyPhysician: "207WX0108X",

  /**
   * Neuro-ophthalmology Physician
   */
  NeuroophthalmologyPhysician: "207WX0109X",

  /**
   * Pediatric Ophthalmology and Strabismus Specialist Physician Physician
   */
  PediatricOphthalmologyandStrabismusSpecialistPhysicianPhysician: "207WX0110X",

  /**
   * Cornea and External Diseases Specialist Physician
   */
  CorneaandExternalDiseasesSpecialistPhysician: "207WX0120X",

  /**
   * Ophthalmic Plastic and Reconstructive Surgery Physician
   */
  OphthalmicPlasticandReconstructiveSurgeryPhysician: "207WX0200X",

  /**
   * Orthopaedic Surgery Physician
   */
  OrthopaedicSurgeryPhysician: "207X00000X",

  /**
   * Pediatric Orthopaedic Surgery Physician
   */
  PediatricOrthopaedicSurgeryPhysician: "207XP3100X",

  /**
   * Orthopaedic Hand Surgery Physician
   */
  OrthopaedicHandSurgeryPhysician: "207XS0106X",

  /**
   * Adult Reconstructive Orthopaedic Surgery Physician
   */
  AdultReconstructiveOrthopaedicSurgeryPhysician: "207XS0114X",

  /**
   * Orthopaedic Surgery of the Spine Physician
   */
  OrthopaedicSurgeryoftheSpinePhysician: "207XS0117X",

  /**
   * Orthopaedic Foot and Ankle Surgery Physician
   */
  OrthopaedicFootandAnkleSurgeryPhysician: "207XX0004X",

  /**
   * Sports Medicine (Orthopaedic Surgery) Physician
   */
  SportsMedicineOrthopaedicSurgeryPhysician: "207XX0005X",

  /**
   * Orthopaedic Trauma Physician
   */
  OrthopaedicTraumaPhysician: "207XX0801X",

  /**
   * Otolaryngology Physician
   */
  OtolaryngologyPhysician: "207Y00000X",

  /**
   * Pediatric Otolaryngology Physician
   */
  PediatricOtolaryngologyPhysician: "207YP0228X",

  /**
   * Sleep Medicine (Otolaryngology) Physician
   */
  SleepMedicineOtolaryngologyPhysician: "207YS0012X",

  /**
   * Facial Plastic Surgery Physician
   */
  FacialPlasticSurgeryPhysician: "207YS0123X",

  /**
   * Plastic Surgery within the Head & Neck (Otolaryngology) Physician
   */
  PlasticSurgerywithintheHeadNeckOtolaryngologyPhysician: "207YX0007X",

  /**
   * Otolaryngic Allergy Physician
   */
  OtolaryngicAllergyPhysician: "207YX0602X",

  /**
   * Otology & Neurotology Physician
   */
  OtologyNeurotologyPhysician: "207YX0901X",

  /**
   * Otolaryngology/Facial Plastic Surgery Physician
   */
  OtolaryngologyFacialPlasticSurgeryPhysician: "207YX0905X",

  /**
   * Blood Banking & Transfusion Medicine Physician
   */
  BloodBankingTransfusionMedicinePhysician: "207ZB0001X",

  /**
   * Clinical Pathology Physician
   */
  ClinicalPathologyPhysician: "207ZC0006X",

  /**
   * Clinical Informatics (Pathology) Physician
   */
  ClinicalInformaticsPathologyPhysician: "207ZC0008X",

  /**
   * Cytopathology Physician
   */
  CytopathologyPhysician: "207ZC0500X",

  /**
   * Dermatopathology (Pathology) Physician
   */
  DermatopathologyPathologyPhysician: "207ZD0900X",

  /**
   * Forensic Pathology Physician
   */
  ForensicPathologyPhysician: "207ZF0201X",

  /**
   * Hematology (Pathology) Physician
   */
  HematologyPathologyPhysician: "207ZH0000X",

  /**
   * Immunopathology Physician
   */
  ImmunopathologyPhysician: "207ZI0100X",

  /**
   * Medical Microbiology Physician
   */
  MedicalMicrobiologyPhysician: "207ZM0300X",

  /**
   * Neuropathology Physician
   */
  NeuropathologyPhysician: "207ZN0500X",

  /**
   * Molecular Genetic Pathology (Pathology) Physician
   */
  MolecularGeneticPathologyPathologyPhysician: "207ZP0007X",

  /**
   * Anatomic Pathology Physician
   */
  AnatomicPathologyPhysician: "207ZP0101X",

  /**
   * Anatomic Pathology & Clinical Pathology Physician
   */
  AnatomicPathologyClinicalPathologyPhysician: "207ZP0102X",

  /**
   * Chemical Pathology Physician
   */
  ChemicalPathologyPhysician: "207ZP0104X",

  /**
   * Clinical Pathology/Laboratory Medicine Physician
   */
  ClinicalPathologyLaboratoryMedicinePhysician: "207ZP0105X",

  /**
   * Pediatric Pathology Physician
   */
  PediatricPathologyPhysician: "207ZP0213X",

  /**
   * Pediatrics Physician
   */
  PediatricsPhysician: "208000000X",

  /**
   * Pediatric Adolescent Medicine Physician
   */
  PediatricAdolescentMedicinePhysician: "2080A0000X",

  /**
   * Pediatric Obesity Medicine Physician
   */
  PediatricObesityMedicinePhysician: "2080B0002X",

  /**
   * Child Abuse Pediatrics Physician
   */
  ChildAbusePediatricsPhysician: "2080C0008X",

  /**
   * Pediatric Hospice and Palliative Medicine Physician
   */
  PediatricHospiceandPalliativeMedicinePhysician: "2080H0002X",

  /**
   * Pediatric Clinical & Laboratory Immunology Physician
   */
  PediatricClinicalLaboratoryImmunologyPhysician: "2080I0007X",

  /**
   * Neonatal-Perinatal Medicine Physician
   */
  NeonatalPerinatalMedicinePhysician: "2080N0001X",

  /**
   * Developmental - Behavioral Pediatrics Physician
   */
  DevelopmentalBehavioralPediatricsPhysician: "2080P0006X",

  /**
   * Pediatric Neurodevelopmental Disabilities Physician
   */
  PediatricNeurodevelopmentalDisabilitiesPhysician: "2080P0008X",

  /**
   * Pediatric Allergy/Immunology Physician
   */
  PediatricAllergyImmunologyPhysician: "2080P0201X",

  /**
   * Pediatric Cardiology Physician
   */
  PediatricCardiologyPhysician: "2080P0202X",

  /**
   * Pediatric Critical Care Medicine Physician
   */
  PediatricCriticalCareMedicinePhysician: "2080P0203X",

  /**
   * Pediatric Emergency Medicine (Pediatrics) Physician
   */
  PediatricEmergencyMedicinePediatricsPhysician: "2080P0204X",

  /**
   * Pediatric Endocrinology Physician
   */
  PediatricEndocrinologyPhysician: "2080P0205X",

  /**
   * Pediatric Gastroenterology Physician
   */
  PediatricGastroenterologyPhysician: "2080P0206X",

  /**
   * Pediatric Hematology & Oncology Physician
   */
  PediatricHematologyOncologyPhysician: "2080P0207X",

  /**
   * Pediatric Infectious Diseases Physician
   */
  PediatricInfectiousDiseasesPhysician: "2080P0208X",

  /**
   * Pediatric Nephrology Physician
   */
  PediatricNephrologyPhysician: "2080P0210X",

  /**
   * Pediatric Pulmonology Physician
   */
  PediatricPulmonologyPhysician: "2080P0214X",

  /**
   * Pediatric Rheumatology Physician
   */
  PediatricRheumatologyPhysician: "2080P0216X",

  /**
   * Pediatric Sports Medicine Physician
   */
  PediatricSportsMedicinePhysician: "2080S0010X",

  /**
   * Pediatric Sleep Medicine Physician
   */
  PediatricSleepMedicinePhysician: "2080S0012X",

  /**
   * Pediatric Medical Toxicology Physician
   */
  PediatricMedicalToxicologyPhysician: "2080T0002X",

  /**
   * Pediatric Transplant Hepatology Physician
   */
  PediatricTransplantHepatologyPhysician: "2080T0004X",

  /**
   * Physical Medicine & Rehabilitation Physician
   */
  PhysicalMedicineRehabilitationPhysician: "208100000X",

  /**
   * Hospice and Palliative Medicine (Physical Medicine & Rehabilitation) Physician
   */
  HospiceandPalliativeMedicinePhysicalMedicineRehabilitationPhysician:
    "2081H0002X",

  /**
   * Neuromuscular Medicine (Physical Medicine & Rehabilitation) Physician
   */
  NeuromuscularMedicinePhysicalMedicineRehabilitationPhysician: "2081N0008X",

  /**
   * Spinal Cord Injury Medicine Physician
   */
  SpinalCordInjuryMedicinePhysician: "2081P0004X",

  /**
   * Pediatric Rehabilitation Medicine Physician
   */
  PediatricRehabilitationMedicinePhysician: "2081P0010X",

  /**
   * Brain Injury Medicine (Physical Medicine & Rehabilitation) Physician
   */
  BrainInjuryMedicinePhysicalMedicineRehabilitationPhysician: "2081P0301X",

  /**
   * Pain Medicine (Physical Medicine & Rehabilitation) Physician
   */
  PainMedicinePhysicalMedicineRehabilitationPhysician: "2081P2900X",

  /**
   * Sports Medicine (Physical Medicine & Rehabilitation) Physician
   */
  SportsMedicinePhysicalMedicineRehabilitationPhysician: "2081S0010X",

  /**
   * Plastic Surgery Physician
   */
  PlasticSurgeryPhysician: "208200000X",

  /**
   * Plastic Surgery Within the Head and Neck (Plastic Surgery) Physician
   */
  PlasticSurgeryWithintheHeadandNeckPlasticSurgeryPhysician: "2082S0099X",

  /**
   * Surgery of the Hand (Plastic Surgery) Physician
   */
  SurgeryoftheHandPlasticSurgeryPhysician: "2082S0105X",

  /**
   * Aerospace Medicine Physician
   */
  AerospaceMedicinePhysician: "2083A0100X",

  /**
   * Addiction Medicine (Preventive Medicine) Physician
   */
  AddictionMedicinePreventiveMedicinePhysician: "2083A0300X",

  /**
   * Obesity Medicine (Preventive Medicine) Physician
   */
  ObesityMedicinePreventiveMedicinePhysician: "2083B0002X",

  /**
   * Clinical Informatics Physician
   */
  ClinicalInformaticsPhysician: "2083C0008X",

  /**
   * Undersea and Hyperbaric Medicine (Preventive Medicine) Physician
   */
  UnderseaandHyperbaricMedicinePreventiveMedicinePhysician: "2083P0011X",

  /**
   * Preventive Medicine/Occupational Environmental Medicine Physician
   */
  PreventiveMedicineOccupationalEnvironmentalMedicinePhysician: "2083P0500X",

  /**
   * Public Health & General Preventive Medicine Physician
   */
  PublicHealthGeneralPreventiveMedicinePhysician: "2083P0901X",

  /**
   * Sports Medicine (Preventive Medicine) Physician
   */
  SportsMedicinePreventiveMedicinePhysician: "2083S0010X",

  /**
   * Medical Toxicology (Preventive Medicine) Physician
   */
  MedicalToxicologyPreventiveMedicinePhysician: "2083T0002X",

  /**
   * Occupational Medicine Physician
   */
  OccupationalMedicinePhysician: "2083X0100X",

  /**
   * Addiction Medicine (Psychiatry & Neurology) Physician
   */
  AddictionMedicinePsychiatryNeurologyPhysician: "2084A0401X",

  /**
   * Neurocritical Care Physician
   */
  NeurocriticalCarePhysician: "2084A2900X",

  /**
   * Obesity Medicine (Psychiatry & Neurology) Physician
   */
  ObesityMedicinePsychiatryNeurologyPhysician: "2084B0002X",

  /**
   * Behavioral Neurology & Neuropsychiatry Physician
   */
  BehavioralNeurologyNeuropsychiatryPhysician: "2084B0040X",

  /**
   * Diagnostic Neuroimaging (Psychiatry & Neurology) Physician
   */
  DiagnosticNeuroimagingPsychiatryNeurologyPhysician: "2084D0003X",

  /**
   * Epilepsy Physician
   */
  EpilepsyPhysician: "2084E0001X",

  /**
   * Forensic Psychiatry Physician
   */
  ForensicPsychiatryPhysician: "2084F0202X",

  /**
   * Hospice and Palliative Medicine (Psychiatry & Neurology) Physician
   */
  HospiceandPalliativeMedicinePsychiatryNeurologyPhysician: "2084H0002X",

  /**
   * Neuromuscular Medicine (Psychiatry & Neurology) Physician
   */
  NeuromuscularMedicinePsychiatryNeurologyPhysician: "2084N0008X",

  /**
   * Neurology Physician
   */
  NeurologyPhysician: "2084N0400X",

  /**
   * Neurology with Special Qualifications in Child Neurology Physician
   */
  NeurologywithSpecialQualificationsinChildNeurologyPhysician: "2084N0402X",

  /**
   * Clinical Neurophysiology Physician
   */
  ClinicalNeurophysiologyPhysician: "2084N0600X",

  /**
   * Neurodevelopmental Disabilities Physician Physician
   */
  NeurodevelopmentalDisabilitiesPhysicianPhysician: "2084P0005X",

  /**
   * Psychosomatic Medicine Physician
   */
  PsychosomaticMedicinePhysician: "2084P0015X",

  /**
   * Brain Injury Medicine (Psychiatry & Neurology) Physician
   */
  BrainInjuryMedicinePsychiatryNeurologyPhysician: "2084P0301X",

  /**
   * Psychiatry Physician
   */
  PsychiatryPhysician: "2084P0800X",

  /**
   * Addiction Psychiatry Physician
   */
  AddictionPsychiatryPhysician: "2084P0802X",

  /**
   * Child & Adolescent Psychiatry Physician
   */
  ChildAdolescentPsychiatryPhysician: "2084P0804X",

  /**
   * Geriatric Psychiatry Physician
   */
  GeriatricPsychiatryPhysician: "2084P0805X",

  /**
   * Pain Medicine (Psychiatry & Neurology) Physician
   */
  PainMedicinePsychiatryNeurologyPhysician: "2084P2900X",

  /**
   * Sports Medicine (Psychiatry & Neurology) Physician
   */
  SportsMedicinePsychiatryNeurologyPhysician: "2084S0010X",

  /**
   * Sleep Medicine (Psychiatry & Neurology) Physician
   */
  SleepMedicinePsychiatryNeurologyPhysician: "2084S0012X",

  /**
   * Vascular Neurology Physician
   */
  VascularNeurologyPhysician: "2084V0102X",

  /**
   * Body Imaging Physician
   */
  BodyImagingPhysician: "2085B0100X",

  /**
   * Diagnostic Neuroimaging (Radiology) Physician
   */
  DiagnosticNeuroimagingRadiologyPhysician: "2085D0003X",

  /**
   * Hospice and Palliative Medicine (Radiology) Physician
   */
  HospiceandPalliativeMedicineRadiologyPhysician: "2085H0002X",

  /**
   * Neuroradiology Physician
   */
  NeuroradiologyPhysician: "2085N0700X",

  /**
   * Nuclear Radiology Physician
   */
  NuclearRadiologyPhysician: "2085N0904X",

  /**
   * Pediatric Radiology Physician
   */
  PediatricRadiologyPhysician: "2085P0229X",

  /**
   * Radiation Oncology Physician
   */
  RadiationOncologyPhysician: "2085R0001X",

  /**
   * Diagnostic Radiology Physician
   */
  DiagnosticRadiologyPhysician: "2085R0202X",

  /**
   * Therapeutic Radiology Physician
   */
  TherapeuticRadiologyPhysician: "2085R0203X",

  /**
   * Vascular & Interventional Radiology Physician
   */
  VascularInterventionalRadiologyPhysician: "2085R0204X",

  /**
   * Radiological Physics Physician
   */
  RadiologicalPhysicsPhysician: "2085R0205X",

  /**
   * Diagnostic Ultrasound Physician
   */
  DiagnosticUltrasoundPhysician: "2085U0001X",

  /**
   * Surgery Physician
   */
  SurgeryPhysician: "208600000X",

  /**
   * Hospice and Palliative Medicine (Surgery) Physician
   */
  HospiceandPalliativeMedicineSurgeryPhysician: "2086H0002X",

  /**
   * Surgical Critical Care Physician
   */
  SurgicalCriticalCarePhysician: "2086S0102X",

  /**
   * Surgery of the Hand (Surgery) Physician
   */
  SurgeryoftheHandSurgeryPhysician: "2086S0105X",

  /**
   * Pediatric Surgery Physician
   */
  PediatricSurgeryPhysician: "2086S0120X",

  /**
   * Plastic and Reconstructive Surgery Physician
   */
  PlasticandReconstructiveSurgeryPhysician: "2086S0122X",

  /**
   * Trauma Surgery Physician
   */
  TraumaSurgeryPhysician: "2086S0127X",

  /**
   * Vascular Surgery Physician
   */
  VascularSurgeryPhysician: "2086S0129X",

  /**
   * Surgical Oncology Physician
   */
  SurgicalOncologyPhysician: "2086X0206X",

  /**
   * Urology Physician
   */
  UrologyPhysician: "208800000X",

  /**
   * Female Pelvic Medicine and Reconstructive Surgery (Urology) Physician
   */
  FemalePelvicMedicineandReconstructiveSurgeryUrologyPhysician: "2088F0040X",

  /**
   * Pediatric Urology Physician
   */
  PediatricUrologyPhysician: "2088P0231X",

  /**
   * Colon & Rectal Surgery Physician
   */
  ColonRectalSurgeryPhysician: "208C00000X",

  /**
   * General Practice Physician
   */
  GeneralPracticePhysician: "208D00000X",

  /**
   * Thoracic Surgery (Cardiothoracic Vascular Surgery) Physician
   */
  ThoracicSurgeryCardiothoracicVascularSurgeryPhysician: "208G00000X",

  /**
   * Hospitalist Physician
   */
  HospitalistPhysician: "208M00000X",

  /**
   * Clinical Pharmacology Physician
   */
  ClinicalPharmacologyPhysician: "208U00000X",

  /**
   * Pain Medicine Physician
   */
  PainMedicinePhysician: "208VP0000X",

  /**
   * Interventional Pain Medicine Physician
   */
  InterventionalPainMedicinePhysician: "208VP0014X",

  /**
   * Legal Medicine (M.D./D.O.) Physician
   */
  LegalMedicineMDDOPhysician: "209800000X",

  /**
   * Podiatric Assistant
   */
  PodiatricAssistant: "211D00000X",

  /**
   * Podiatrist
   */
  Podiatrist: "213E00000X",

  /**
   * Deactivated - Podiatrist
   */
  DeactivatedPodiatrist: "213EG0000X",

  /**
   * Public Medicine Podiatrist
   */
  PublicMedicinePodiatrist: "213EP0504X",

  /**
   * Primary Podiatric Medicine Podiatrist
   */
  PrimaryPodiatricMedicinePodiatrist: "213EP1101X",

  /**
   * Radiology Podiatrist
   */
  RadiologyPodiatrist: "213ER0200X",

  /**
   * Sports Medicine Podiatrist
   */
  SportsMedicinePodiatrist: "213ES0000X",

  /**
   * Foot & Ankle Surgery Podiatrist
   */
  FootAnkleSurgeryPodiatrist: "213ES0103X",

  /**
   * Foot Surgery Podiatrist
   */
  FootSurgeryPodiatrist: "213ES0131X",

  /**
   * Art Therapist
   */
  ArtTherapist: "221700000X",

  /**
   * Developmental Therapist
   */
  DevelopmentalTherapist: "222Q00000X",

  /**
   * Orthotist
   */
  Orthotist: "222Z00000X",

  /**
   * Mastectomy Fitter
   */
  MastectomyFitter: "224900000X",

  /**
   * Pedorthist
   */
  Pedorthist: "224L00000X",

  /**
   * Prosthetist
   */
  Prosthetist: "224P00000X",

  /**
   * Clinical Exercise Physiologist
   */
  ClinicalExercisePhysiologist: "224Y00000X",

  /**
   * Occupational Therapy Assistant
   */
  OccupationalTherapyAssistant: "224Z00000X",

  /**
   * Environmental Modification Occupational Therapy Assistant
   */
  EnvironmentalModificationOccupationalTherapyAssistant: "224ZE0001X",

  /**
   * Feeding, Eating & Swallowing Occupational Therapy Assistant
   */
  FeedingEatingSwallowingOccupationalTherapyAssistant: "224ZF0002X",

  /**
   * Low Vision Occupational Therapy Assistant
   */
  LowVisionOccupationalTherapyAssistant: "224ZL0004X",

  /**
   * Driving and Community Mobility Occupational Therapy Assistant
   */
  DrivingandCommunityMobilityOccupationalTherapyAssistant: "224ZR0403X",

  /**
   * Orthotic Fitter
   */
  OrthoticFitter: "225000000X",

  /**
   * Physical Therapist
   */
  PhysicalTherapist: "225100000X",

  /**
   * Cardiopulmonary Physical Therapist
   */
  CardiopulmonaryPhysicalTherapist: "2251C2600X",

  /**
   * Ergonomics Physical Therapist
   */
  ErgonomicsPhysicalTherapist: "2251E1200X",

  /**
   * Clinical Electrophysiology Physical Therapist
   */
  ClinicalElectrophysiologyPhysicalTherapist: "2251E1300X",

  /**
   * Geriatric Physical Therapist
   */
  GeriatricPhysicalTherapist: "2251G0304X",

  /**
   * Hand Physical Therapist
   */
  HandPhysicalTherapist: "2251H1200X",

  /**
   * Human Factors Physical Therapist
   */
  HumanFactorsPhysicalTherapist: "2251H1300X",

  /**
   * Neurology Physical Therapist
   */
  NeurologyPhysicalTherapist: "2251N0400X",

  /**
   * Pediatric Physical Therapist
   */
  PediatricPhysicalTherapist: "2251P0200X",

  /**
   * Sports Physical Therapist
   */
  SportsPhysicalTherapist: "2251S0007X",

  /**
   * Orthopedic Physical Therapist
   */
  OrthopedicPhysicalTherapist: "2251X0800X",

  /**
   * Physical Therapy Assistant
   */
  PhysicalTherapyAssistant: "225200000X",

  /**
   * Rehabilitation Practitioner
   */
  RehabilitationPractitioner: "225400000X",

  /**
   * Respiratory/Developmental/Rehabilitative Specialist/Technologist
   */
  RespiratoryDevelopmentalRehabilitativeSpecialistTechnologist: "225500000X",

  /**
   * Athletic Trainer
   */
  AthleticTrainer: "2255A2300X",

  /**
   * Blind Rehabilitation Specialist/Technologist
   */
  BlindRehabilitationSpecialistTechnologist: "2255R0406X",

  /**
   * Dance Therapist
   */
  DanceTherapist: "225600000X",

  /**
   * Massage Therapist
   */
  MassageTherapist: "225700000X",

  /**
   * Recreation Therapist
   */
  RecreationTherapist: "225800000X",

  /**
   * Music Therapist
   */
  MusicTherapist: "225A00000X",

  /**
   * Pulmonary Function Technologist
   */
  PulmonaryFunctionTechnologist: "225B00000X",

  /**
   * Rehabilitation Counselor
   */
  RehabilitationCounselor: "225C00000X",

  /**
   * Assistive Technology Practitioner Rehabilitation Counselor
   */
  AssistiveTechnologyPractitionerRehabilitationCounselor: "225CA2400X",

  /**
   * Assistive Technology Supplier Rehabilitation Counselor
   */
  AssistiveTechnologySupplierRehabilitationCounselor: "225CA2500X",

  /**
   * Orientation and Mobility Training Rehabilitation Counselor
   */
  OrientationandMobilityTrainingRehabilitationCounselor: "225CX0006X",

  /**
   * Occupational Therapist
   */
  OccupationalTherapist: "225X00000X",

  /**
   * Environmental Modification Occupational Therapist
   */
  EnvironmentalModificationOccupationalTherapist: "225XE0001X",

  /**
   * Ergonomics Occupational Therapist
   */
  ErgonomicsOccupationalTherapist: "225XE1200X",

  /**
   * Feeding, Eating & Swallowing Occupational Therapist
   */
  FeedingEatingSwallowingOccupationalTherapist: "225XF0002X",

  /**
   * Gerontology Occupational Therapist
   */
  GerontologyOccupationalTherapist: "225XG0600X",

  /**
   * Hand Occupational Therapist
   */
  HandOccupationalTherapist: "225XH1200X",

  /**
   * Human Factors Occupational Therapist
   */
  HumanFactorsOccupationalTherapist: "225XH1300X",

  /**
   * Low Vision Occupational Therapist
   */
  LowVisionOccupationalTherapist: "225XL0004X",

  /**
   * Mental Health Occupational Therapist
   */
  MentalHealthOccupationalTherapist: "225XM0800X",

  /**
   * Neurorehabilitation Occupational Therapist
   */
  NeurorehabilitationOccupationalTherapist: "225XN1300X",

  /**
   * Physical Rehabilitation Occupational Therapist
   */
  PhysicalRehabilitationOccupationalTherapist: "225XP0019X",

  /**
   * Pediatric Occupational Therapist
   */
  PediatricOccupationalTherapist: "225XP0200X",

  /**
   * Driving and Community Mobility Occupational Therapist
   */
  DrivingandCommunityMobilityOccupationalTherapist: "225XR0403X",

  /**
   * Recreational Therapist Assistant
   */
  RecreationalTherapistAssistant: "226000000X",

  /**
   * Kinesiotherapist
   */
  Kinesiotherapist: "226300000X",

  /**
   * Certified Respiratory Therapist
   */
  CertifiedRespiratoryTherapist: "227800000X",

  /**
   * Critical Care Certified Respiratory Therapist
   */
  CriticalCareCertifiedRespiratoryTherapist: "2278C0205X",

  /**
   * Emergency Care Certified Respiratory Therapist
   */
  EmergencyCareCertifiedRespiratoryTherapist: "2278E0002X",

  /**
   * Educational Certified Respiratory Therapist
   */
  EducationalCertifiedRespiratoryTherapist: "2278E1000X",

  /**
   * Geriatric Care Certified Respiratory Therapist
   */
  GeriatricCareCertifiedRespiratoryTherapist: "2278G0305X",

  /**
   * General Care Certified Respiratory Therapist
   */
  GeneralCareCertifiedRespiratoryTherapist: "2278G1100X",

  /**
   * Home Health Certified Respiratory Therapist
   */
  HomeHealthCertifiedRespiratoryTherapist: "2278H0200X",

  /**
   * Pulmonary Diagnostics Certified Respiratory Therapist
   */
  PulmonaryDiagnosticsCertifiedRespiratoryTherapist: "2278P1004X",

  /**
   * Pulmonary Rehabilitation Certified Respiratory Therapist
   */
  PulmonaryRehabilitationCertifiedRespiratoryTherapist: "2278P1005X",

  /**
   * Pulmonary Function Technologist Certified Respiratory Therapist
   */
  PulmonaryFunctionTechnologistCertifiedRespiratoryTherapist: "2278P1006X",

  /**
   * Palliative/Hospice Certified Respiratory Therapist
   */
  PalliativeHospiceCertifiedRespiratoryTherapist: "2278P3800X",

  /**
   * Neonatal/Pediatric Certified Respiratory Therapist
   */
  NeonatalPediatricCertifiedRespiratoryTherapist: "2278P3900X",

  /**
   * Patient Transport Certified Respiratory Therapist
   */
  PatientTransportCertifiedRespiratoryTherapist: "2278P4000X",

  /**
   * SNF/Subacute Care Certified Respiratory Therapist
   */
  SNFSubacuteCareCertifiedRespiratoryTherapist: "2278S1500X",

  /**
   * Registered Respiratory Therapist
   */
  RegisteredRespiratoryTherapist: "227900000X",

  /**
   * Critical Care Registered Respiratory Therapist
   */
  CriticalCareRegisteredRespiratoryTherapist: "2279C0205X",

  /**
   * Emergency Care Registered Respiratory Therapist
   */
  EmergencyCareRegisteredRespiratoryTherapist: "2279E0002X",

  /**
   * Educational Registered Respiratory Therapist
   */
  EducationalRegisteredRespiratoryTherapist: "2279E1000X",

  /**
   * Geriatric Care Registered Respiratory Therapist
   */
  GeriatricCareRegisteredRespiratoryTherapist: "2279G0305X",

  /**
   * General Care Registered Respiratory Therapist
   */
  GeneralCareRegisteredRespiratoryTherapist: "2279G1100X",

  /**
   * Home Health Registered Respiratory Therapist
   */
  HomeHealthRegisteredRespiratoryTherapist: "2279H0200X",

  /**
   * Pulmonary Diagnostics Registered Respiratory Therapist
   */
  PulmonaryDiagnosticsRegisteredRespiratoryTherapist: "2279P1004X",

  /**
   * Pulmonary Rehabilitation Registered Respiratory Therapist
   */
  PulmonaryRehabilitationRegisteredRespiratoryTherapist: "2279P1005X",

  /**
   * Pulmonary Function Technologist Registered Respiratory Therapist
   */
  PulmonaryFunctionTechnologistRegisteredRespiratoryTherapist: "2279P1006X",

  /**
   * Palliative/Hospice Registered Respiratory Therapist
   */
  PalliativeHospiceRegisteredRespiratoryTherapist: "2279P3800X",

  /**
   * Neonatal/Pediatric Registered Respiratory Therapist
   */
  NeonatalPediatricRegisteredRespiratoryTherapist: "2279P3900X",

  /**
   * Patient Transport Registered Respiratory Therapist
   */
  PatientTransportRegisteredRespiratoryTherapist: "2279P4000X",

  /**
   * SNF/Subacute Care Registered Respiratory Therapist
   */
  SNFSubacuteCareRegisteredRespiratoryTherapist: "2279S1500X",

  /**
   * Anaplastologist
   */
  Anaplastologist: "229N00000X",

  /**
   * Audiologist
   */
  Audiologist: "231H00000X",

  /**
   * Assistive Technology Practitioner Audiologist
   */
  AssistiveTechnologyPractitionerAudiologist: "231HA2400X",

  /**
   * Assistive Technology Supplier Audiologist
   */
  AssistiveTechnologySupplierAudiologist: "231HA2500X",

  /**
   * Speech/Language/Hearing Specialist/Technologist
   */
  SpeechLanguageHearingSpecialistTechnologist: "235500000X",

  /**
   * Audiology Assistant
   */
  AudiologyAssistant: "2355A2700X",

  /**
   * Speech-Language Assistant
   */
  SpeechLanguageAssistant: "2355S0801X",

  /**
   * Speech-Language Pathologist
   */
  SpeechLanguagePathologist: "235Z00000X",

  /**
   * Audiologist-Hearing Aid Fitter
   */
  AudiologistHearingAidFitter: "237600000X",

  /**
   * Hearing Instrument Specialist
   */
  HearingInstrumentSpecialist: "237700000X",

  /**
   * Perfusionist
   */
  Perfusionist: "242T00000X",

  /**
   * Radiology Practitioner Assistant
   */
  RadiologyPractitionerAssistant: "243U00000X",

  /**
   * Pathology Specialist/Technologist
   */
  PathologySpecialistTechnologist: "246Q00000X",

  /**
   * Blood Banking Specialist/Technologist
   */
  BloodBankingSpecialistTechnologist: "246QB0000X",

  /**
   * Chemistry Pathology Specialist/Technologist
   */
  ChemistryPathologySpecialistTechnologist: "246QC1000X",

  /**
   * Cytotechnology Specialist/Technologist
   */
  CytotechnologySpecialistTechnologist: "246QC2700X",

  /**
   * Hematology Specialist/Technologist
   */
  HematologySpecialistTechnologist: "246QH0000X",

  /**
   * Hemapheresis Practitioner
   */
  HemapheresisPractitioner: "246QH0401X",

  /**
   * Histology Specialist/Technologist
   */
  HistologySpecialistTechnologist: "246QH0600X",

  /**
   * Immunology Pathology Specialist/Technologist
   */
  ImmunologyPathologySpecialistTechnologist: "246QI0000X",

  /**
   * Laboratory Management Specialist/Technologist
   */
  LaboratoryManagementSpecialistTechnologist: "246QL0900X",

  /**
   * Diplomate Laboratory Management Specialist/Technologist
   */
  DiplomateLaboratoryManagementSpecialistTechnologist: "246QL0901X",

  /**
   * Medical Technologist
   */
  MedicalTechnologist: "246QM0706X",

  /**
   * Microbiology Specialist/Technologist
   */
  MicrobiologySpecialistTechnologist: "246QM0900X",

  /**
   * Pathology Technician
   */
  PathologyTechnician: "246R00000X",

  /**
   * Histology Technician
   */
  HistologyTechnician: "246RH0600X",

  /**
   * Medical Laboratory Technician
   */
  MedicalLaboratoryTechnician: "246RM2200X",

  /**
   * Phlebotomy Technician
   */
  PhlebotomyTechnician: "246RP1900X",

  /**
   * Cardiology Technician
   */
  CardiologyTechnician: "246W00000X",

  /**
   * Cardiovascular Specialist/Technologist
   */
  CardiovascularSpecialistTechnologist: "246X00000X",

  /**
   * Cardiovascular Invasive Specialist/Technologist
   */
  CardiovascularInvasiveSpecialistTechnologist: "246XC2901X",

  /**
   * Vascular Specialist/Technologist
   */
  VascularSpecialistTechnologist: "246XC2903X",

  /**
   * Sonography Specialist/Technologist
   */
  SonographySpecialistTechnologist: "246XS1301X",

  /**
   * Health Information Specialist/Technologist
   */
  HealthInformationSpecialistTechnologist: "246Y00000X",

  /**
   * Hospital Based Coding Specialist
   */
  HospitalBasedCodingSpecialist: "246YC3301X",

  /**
   * Physician Office Based Coding Specialist
   */
  PhysicianOfficeBasedCodingSpecialist: "246YC3302X",

  /**
   * Registered Record Administrator
   */
  RegisteredRecordAdministrator: "246YR1600X",

  /**
   * Other Specialist/Technologist
   */
  OtherSpecialistTechnologist: "246Z00000X",

  /**
   * Medical Art  Specialist/Technologist
   */
  MedicalArtSpecialistTechnologist: "246ZA2600X",

  /**
   * Biomedical Engineer
   */
  BiomedicalEngineer: "246ZB0301X",

  /**
   * Biomedical Photographer
   */
  BiomedicalPhotographer: "246ZB0302X",

  /**
   * Biochemist
   */
  Biochemist: "246ZB0500X",

  /**
   * Biostatiscian
   */
  Biostatiscian: "246ZB0600X",

  /**
   * Surgical Assistant
   */
  SurgicalAssistant: "246ZC0007X",

  /**
   * EEG Specialist/Technologist
   */
  EEGSpecialistTechnologist: "246ZE0500X",

  /**
   * Electroneurodiagnostic Specialist/Technologist
   */
  ElectroneurodiagnosticSpecialistTechnologist: "246ZE0600X",

  /**
   * Graphics Methods Specialist/Technologist
   */
  GraphicsMethodsSpecialistTechnologist: "246ZG0701X",

  /**
   * Medical Geneticist (PhD) Specialist/Technologist
   */
  MedicalGeneticistPhDSpecialistTechnologist: "246ZG1000X",

  /**
   * Medical Illustrator
   */
  MedicalIllustrator: "246ZI1000X",

  /**
   * Nephrology Specialist/Technologist
   */
  NephrologySpecialistTechnologist: "246ZN0300X",

  /**
   * Surgical Technologist
   */
  SurgicalTechnologist: "246ZS0410X",

  /**
   * Orthopedic Assistant
   */
  OrthopedicAssistant: "246ZX2200X",

  /**
   * Health Information Technician
   */
  HealthInformationTechnician: "247000000X",

  /**
   * Assistant Health Information Record Technician
   */
  AssistantHealthInformationRecordTechnician: "2470A2800X",

  /**
   * Radiologic Technologist
   */
  RadiologicTechnologist: "247100000X",

  /**
   * Bone Densitometry Radiologic Technologist
   */
  BoneDensitometryRadiologicTechnologist: "2471B0102X",

  /**
   * Cardiovascular-Interventional Technology Radiologic Technologist
   */
  CardiovascularInterventionalTechnologyRadiologicTechnologist: "2471C1101X",

  /**
   * Cardiac-Interventional Technology Radiologic Technologist
   */
  CardiacInterventionalTechnologyRadiologicTechnologist: "2471C1106X",

  /**
   * Computed Tomography Radiologic Technologist
   */
  ComputedTomographyRadiologicTechnologist: "2471C3401X",

  /**
   * Radiography Radiologic Technologist
   */
  RadiographyRadiologicTechnologist: "2471C3402X",

  /**
   * Magnetic Resonance Imaging Radiologic Technologist
   */
  MagneticResonanceImagingRadiologicTechnologist: "2471M1202X",

  /**
   * Mammography Radiologic Technologist
   */
  MammographyRadiologicTechnologist: "2471M2300X",

  /**
   * Nuclear Medicine Technology Radiologic Technologist
   */
  NuclearMedicineTechnologyRadiologicTechnologist: "2471N0900X",

  /**
   * Quality Management Radiologic Technologist
   */
  QualityManagementRadiologicTechnologist: "2471Q0001X",

  /**
   * Radiation Therapy Radiologic Technologist
   */
  RadiationTherapyRadiologicTechnologist: "2471R0002X",

  /**
   * Sonography Radiologic Technologist
   */
  SonographyRadiologicTechnologist: "2471S1302X",

  /**
   * Vascular Sonography Radiologic Technologist
   */
  VascularSonographyRadiologicTechnologist: "2471V0105X",

  /**
   * Vascular-Interventional Technology Radiologic Technologist
   */
  VascularInterventionalTechnologyRadiologicTechnologist: "2471V0106X",

  /**
   * Other Technician
   */
  OtherTechnician: "247200000X",

  /**
   * Biomedical Engineering Technician
   */
  BiomedicalEngineeringTechnician: "2472B0301X",

  /**
   * Darkroom Technician
   */
  DarkroomTechnician: "2472D0500X",

  /**
   * EEG Technician
   */
  EEGTechnician: "2472E0500X",

  /**
   * Renal Dialysis Technician
   */
  RenalDialysisTechnician: "2472R0900X",

  /**
   * Veterinary Technician
   */
  VeterinaryTechnician: "2472V0600X",

  /**
   * Clinical Laboratory Director (Non-physician)
   */
  ClinicalLaboratoryDirectorNonphysician: "247ZC0005X",

  /**
   * Local Education Agency (LEA)
   */
  LocalEducationAgencyLEA: "251300000X",

  /**
   * Case Management Agency
   */
  CaseManagementAgency: "251B00000X",

  /**
   * Developmentally Disabled Services Day Training Agency
   */
  DevelopmentallyDisabledServicesDayTrainingAgency: "251C00000X",

  /**
   * Home Health Agency
   */
  HomeHealthAgency: "251E00000X",

  /**
   * Home Infusion Agency
   */
  HomeInfusionAgency: "251F00000X",

  /**
   * Community Based Hospice Care Agency
   */
  CommunityBasedHospiceCareAgency: "251G00000X",

  /**
   * Nursing Care Agency
   */
  NursingCareAgency: "251J00000X",

  /**
   * Public Health or Welfare Agency
   */
  PublicHealthorWelfareAgency: "251K00000X",

  /**
   * Community/Behavioral Health Agency
   */
  CommunityBehavioralHealthAgency: "251S00000X",

  /**
   * PACE Provider Organization
   */
  PACEProviderOrganization: "251T00000X",

  /**
   * Voluntary or Charitable Agency
   */
  VoluntaryorCharitableAgency: "251V00000X",

  /**
   * Supports Brokerage Agency
   */
  SupportsBrokerageAgency: "251X00000X",

  /**
   * Early Intervention Provider Agency
   */
  EarlyInterventionProviderAgency: "252Y00000X",

  /**
   * Foster Care Agency
   */
  FosterCareAgency: "253J00000X",

  /**
   * In Home Supportive Care Agency
   */
  InHomeSupportiveCareAgency: "253Z00000X",

  /**
   * Clinic/Center
   */
  ClinicCenter: "261Q00000X",

  /**
   * Ambulatory Family Planning Facility
   */
  AmbulatoryFamilyPlanningFacility: "261QA0005X",

  /**
   * Ambulatory Fertility Facility
   */
  AmbulatoryFertilityFacility: "261QA0006X",

  /**
   * Adult Day Care Clinic/Center
   */
  AdultDayCareClinicCenter: "261QA0600X",

  /**
   * Amputee Clinic/Center
   */
  AmputeeClinicCenter: "261QA0900X",

  /**
   * Ambulatory Surgical Clinic/Center
   */
  AmbulatorySurgicalClinicCenter: "261QA1903X",

  /**
   * Augmentative Communication Clinic/Center
   */
  AugmentativeCommunicationClinicCenter: "261QA3000X",

  /**
   * Birthing Clinic/Center
   */
  BirthingClinicCenter: "261QB0400X",

  /**
   * Critical Access Hospital Clinic/Center
   */
  CriticalAccessHospitalClinicCenter: "261QC0050X",

  /**
   * Community Health Clinic/Center
   */
  CommunityHealthClinicCenter: "261QC1500X",

  /**
   * Corporate Health Clinic/Center
   */
  CorporateHealthClinicCenter: "261QC1800X",

  /**
   * Dental Clinic/Center
   */
  DentalClinicCenter: "261QD0000X",

  /**
   * Developmental Disabilities Clinic/Center
   */
  DevelopmentalDisabilitiesClinicCenter: "261QD1600X",

  /**
   * Emergency Care Clinic/Center
   */
  EmergencyCareClinicCenter: "261QE0002X",

  /**
   * End-Stage Renal Disease (ESRD) Treatment Clinic/Center
   */
  EndStageRenalDiseaseESRDTreatmentClinicCenter: "261QE0700X",

  /**
   * Endoscopy Clinic/Center
   */
  EndoscopyClinicCenter: "261QE0800X",

  /**
   * Non-Surgical Family Planning Clinic/Center
   */
  NonSurgicalFamilyPlanningClinicCenter: "261QF0050X",

  /**
   * Federally Qualified Health Center (FQHC)
   */
  FederallyQualifiedHealthCenterFQHC: "261QF0400X",

  /**
   * Genetics Clinic/Center
   */
  GeneticsClinicCenter: "261QG0250X",

  /**
   * Health Service Clinic/Center
   */
  HealthServiceClinicCenter: "261QH0100X",

  /**
   * Hearing and Speech Clinic/Center
   */
  HearingandSpeechClinicCenter: "261QH0700X",

  /**
   * Infusion Therapy Clinic/Center
   */
  InfusionTherapyClinicCenter: "261QI0500X",

  /**
   * Lithotripsy Clinic/Center
   */
  LithotripsyClinicCenter: "261QL0400X",

  /**
   * Mental Health Clinic/Center (Including Community Mental Health Center)
   */
  MentalHealthClinicCenterIncludingCommunityMentalHealthCenter: "261QM0801X",

  /**
   * Adult Mental Health Clinic/Center
   */
  AdultMentalHealthClinicCenter: "261QM0850X",

  /**
   * Adolescent and Children Mental Health Clinic/Center
   */
  AdolescentandChildrenMentalHealthClinicCenter: "261QM0855X",

  /**
   * Migrant Health Clinic/Center
   */
  MigrantHealthClinicCenter: "261QM1000X",

  /**
   * Military/U.S. Coast Guard Outpatient Clinic/Center
   */
  MilitaryUSCoastGuardOutpatientClinicCenter: "261QM1100X",

  /**
   * Military and U.S. Coast Guard Ambulatory Procedure Clinic/Center
   */
  MilitaryandUSCoastGuardAmbulatoryProcedureClinicCenter: "261QM1101X",

  /**
   * Military Outpatient Operational (Transportable) Component Clinic/Center
   */
  MilitaryOutpatientOperationalTransportableComponentClinicCenter: "261QM1102X",

  /**
   * Military Ambulatory Procedure Visits Operational (Transportable) Clinic/Center
   */
  MilitaryAmbulatoryProcedureVisitsOperationalTransportableClinicCenter:
    "261QM1103X",

  /**
   * Magnetic Resonance Imaging (MRI) Clinic/Center
   */
  MagneticResonanceImagingMRIClinicCenter: "261QM1200X",

  /**
   * Multi-Specialty Clinic/Center
   */
  MultiSpecialtyClinicCenter: "261QM1300X",

  /**
   * Medical Specialty Clinic/Center
   */
  MedicalSpecialtyClinicCenter: "261QM2500X",

  /**
   * Methadone Clinic
   */
  MethadoneClinic: "261QM2800X",

  /**
   * Medically Fragile Infants and Children Day Care
   */
  MedicallyFragileInfantsandChildrenDayCare: "261QM3000X",

  /**
   * Federal Public Health Clinic/Center
   */
  FederalPublicHealthClinicCenter: "261QP0904X",

  /**
   * State or Local Public Health Clinic/Center
   */
  StateorLocalPublicHealthClinicCenter: "261QP0905X",

  /**
   * Podiatric Clinic/Center
   */
  PodiatricClinicCenter: "261QP1100X",

  /**
   * Physical Therapy Clinic/Center
   */
  PhysicalTherapyClinicCenter: "261QP2000X",

  /**
   * Primary Care Clinic/Center
   */
  PrimaryCareClinicCenter: "261QP2300X",

  /**
   * Prison Health Clinic/Center
   */
  PrisonHealthClinicCenter: "261QP2400X",

  /**
   * Pain Clinic/Center
   */
  PainClinicCenter: "261QP3300X",

  /**
   * Radiology Clinic/Center
   */
  RadiologyClinicCenter: "261QR0200X",

  /**
   * Mammography Clinic/Center
   */
  MammographyClinicCenter: "261QR0206X",

  /**
   * Mobile Mammography Clinic/Center
   */
  MobileMammographyClinicCenter: "261QR0207X",

  /**
   * Mobile Radiology Clinic/Center
   */
  MobileRadiologyClinicCenter: "261QR0208X",

  /**
   * Rehabilitation Clinic/Center
   */
  RehabilitationClinicCenter: "261QR0400X",

  /**
   * Comprehensive Outpatient Rehabilitation Facility (CORF)
   */
  ComprehensiveOutpatientRehabilitationFacilityCORF: "261QR0401X",

  /**
   * Cardiac Rehabilitation Clinic/Center
   */
  CardiacRehabilitationClinicCenter: "261QR0404X",

  /**
   * Substance Use Disorder Rehabilitation Clinic/Center
   */
  SubstanceUseDisorderRehabilitationClinicCenter: "261QR0405X",

  /**
   * Recovery Care Clinic/Center
   */
  RecoveryCareClinicCenter: "261QR0800X",

  /**
   * Research Clinic/Center
   */
  ResearchClinicCenter: "261QR1100X",

  /**
   * Rural Health Clinic/Center
   */
  RuralHealthClinicCenter: "261QR1300X",

  /**
   * Oral and Maxillofacial Surgery Clinic/Center
   */
  OralandMaxillofacialSurgeryClinicCenter: "261QS0112X",

  /**
   * Ophthalmologic Surgery Clinic/Center
   */
  OphthalmologicSurgeryClinicCenter: "261QS0132X",

  /**
   * Student Health Clinic/Center
   */
  StudentHealthClinicCenter: "261QS1000X",

  /**
   * Sleep Disorder Diagnostic Clinic/Center
   */
  SleepDisorderDiagnosticClinicCenter: "261QS1200X",

  /**
   * Urgent Care Clinic/Center
   */
  UrgentCareClinicCenter: "261QU0200X",

  /**
   * VA Clinic/Center
   */
  VAClinicCenter: "261QV0200X",

  /**
   * Occupational Medicine Clinic/Center
   */
  OccupationalMedicineClinicCenter: "261QX0100X",

  /**
   * Oncology Clinic/Center
   */
  OncologyClinicCenter: "261QX0200X",

  /**
   * Radiation Oncology Clinic/Center
   */
  RadiationOncologyClinicCenter: "261QX0203X",

  /**
   * Epilepsy Hospital Unit
   */
  EpilepsyHospitalUnit: "273100000X",

  /**
   * Psychiatric Hospital Unit
   */
  PsychiatricHospitalUnit: "273R00000X",

  /**
   * Rehabilitation Hospital Unit
   */
  RehabilitationHospitalUnit: "273Y00000X",

  /**
   * Medicare Defined Swing Bed Hospital Unit
   */
  MedicareDefinedSwingBedHospitalUnit: "275N00000X",

  /**
   * Substance Use Disorder Rehabilitation Hospital Unit
   */
  SubstanceUseDisorderRehabilitationHospitalUnit: "276400000X",

  /**
   * Chronic Disease Hospital
   */
  ChronicDiseaseHospital: "281P00000X",

  /**
   * Children' s Chronic Disease Hospital
   */
  ChildrensChronicDiseaseHospital: "281PC2000X",

  /**
   * Long Term Care Hospital
   */
  LongTermCareHospital: "282E00000X",

  /**
   * Religious Nonmedical Health Care Institution
   */
  ReligiousNonmedicalHealthCareInstitution: "282J00000X",

  /**
   * General Acute Care Hospital
   */
  GeneralAcuteCareHospital: "282N00000X",

  /**
   * Critical Access Hospital
   */
  CriticalAccessHospital: "282NC0060X",

  /**
   * Children's Hospital
   */
  ChildrensHospital: "282NC2000X",

  /**
   * Rural Acute Care Hospital
   */
  RuralAcuteCareHospital: "282NR1301X",

  /**
   * Women's Hospital
   */
  WomensHospital: "282NW0100X",

  /**
   * Psychiatric Hospital
   */
  PsychiatricHospital: "283Q00000X",

  /**
   * Rehabilitation Hospital
   */
  RehabilitationHospital: "283X00000X",

  /**
   * Children's Rehabilitation Hospital
   */
  ChildrensRehabilitationHospital: "283XC2000X",

  /**
   * Special Hospital
   */
  SpecialHospital: "284300000X",

  /**
   * Military Hospital
   */
  MilitaryHospital: "286500000X",

  /**
   * Deactivated - Military Hospital
   */
  DeactivatedMilitaryHospital: "2865C1500X",

  /**
   * Military General Acute Care Hospital
   */
  MilitaryGeneralAcuteCareHospital: "2865M2000X",

  /**
   * Operational (Transportable) Military General Acute Care Hospital
   */
  OperationalTransportableMilitaryGeneralAcuteCareHospital: "2865X1600X",

  /**
   * Deactivated - Christian Science Sanitorium
   */
  DeactivatedChristianScienceSanitorium: "287300000X",

  /**
   * Military Clinical Medical Laboratory
   */
  MilitaryClinicalMedicalLaboratory: "291900000X",

  /**
   * Clinical Medical Laboratory
   */
  ClinicalMedicalLaboratory: "291U00000X",

  /**
   * Dental Laboratory
   */
  DentalLaboratory: "292200000X",

  /**
   * Physiological Laboratory
   */
  PhysiologicalLaboratory: "293D00000X",

  /**
   * Exclusive Provider Organization
   */
  ExclusiveProviderOrganization: "302F00000X",

  /**
   * Health Maintenance Organization
   */
  HealthMaintenanceOrganization: "302R00000X",

  /**
   * Preferred Provider Organization
   */
  PreferredProviderOrganization: "305R00000X",

  /**
   * Point of Service
   */
  PointofService: "305S00000X",

  /**
   * Assisted Living Facility
   */
  AssistedLivingFacility: "310400000X",

  /**
   * Assisted Living Facility (Mental Illness)
   */
  AssistedLivingFacilityMentalIllness: "3104A0625X",

  /**
   * Assisted Living Facility (Behavioral Disturbances)
   */
  AssistedLivingFacilityBehavioralDisturbances: "3104A0630X",

  /**
   * Mental Illness Intermediate Care Facility
   */
  MentalIllnessIntermediateCareFacility: "310500000X",

  /**
   * Alzheimer Center (Dementia Center)
   */
  AlzheimerCenterDementiaCenter: "311500000X",

  /**
   * Custodial Care Facility
   */
  CustodialCareFacility: "311Z00000X",

  /**
   * Adult Care Home Facility
   */
  AdultCareHomeFacility: "311ZA0620X",

  /**
   * Nursing Facility/Intermediate Care Facility
   */
  NursingFacilityIntermediateCareFacility: "313M00000X",

  /**
   * Skilled Nursing Facility
   */
  SkilledNursingFacility: "314000000X",

  /**
   * Pediatric Skilled Nursing Facility
   */
  PediatricSkilledNursingFacility: "3140N1450X",

  /**
   * Inpatient Hospice
   */
  InpatientHospice: "315D00000X",

  /**
   * Intellectual Disabilities Intermediate Care Facility
   */
  IntellectualDisabilitiesIntermediateCareFacility: "315P00000X",

  /**
   * Deactivated - Christian Science Facility
   */
  DeactivatedChristianScienceFacility: "317400000X",

  /**
   * Intellectual and/or Developmental Disabilities Residential Treatment Facility
   */
  IntellectualandorDevelopmentalDisabilitiesResidentialTreatmentFacility:
    "320600000X",

  /**
   * Physical Disabilities Residential Treatment Facility
   */
  PhysicalDisabilitiesResidentialTreatmentFacility: "320700000X",

  /**
   * Mental Illness Community Based Residential Treatment Facility
   */
  MentalIllnessCommunityBasedResidentialTreatmentFacility: "320800000X",

  /**
   * Intellectual and/or Developmental Disabilities Community Based Residential Treatment Facility
   */
  IntellectualandorDevelopmentalDisabilitiesCommunityBasedResidentialTreatmentFacility:
    "320900000X",

  /**
   * Emotionally Disturbed Childrens' Residential Treatment Facility
   */
  EmotionallyDisturbedChildrensResidentialTreatmentFacility: "322D00000X",

  /**
   * Psychiatric Residential Treatment Facility
   */
  PsychiatricResidentialTreatmentFacility: "323P00000X",

  /**
   * Substance Abuse Rehabilitation Facility
   */
  SubstanceAbuseRehabilitationFacility: "324500000X",

  /**
   * Children's Substance Abuse Rehabilitation Facility
   */
  ChildrensSubstanceAbuseRehabilitationFacility: "3245S0500X",

  /**
   * Blood Bank
   */
  BloodBank: "331L00000X",

  /**
   * Military/U.S. Coast Guard Pharmacy
   */
  MilitaryUSCoastGuardPharmacy: "332000000X",

  /**
   * Department of Veterans Affairs (VA) Pharmacy
   */
  DepartmentofVeteransAffairsVAPharmacy: "332100000X",

  /**
   * Indian Health Service/Tribal/Urban Indian Health (I/T/U) Pharmacy
   */
  IndianHealthServiceTribalUrbanIndianHealthITUPharmacy: "332800000X",

  /**
   * Non-Pharmacy Dispensing Site
   */
  NonPharmacyDispensingSite: "332900000X",

  /**
   * Durable Medical Equipment & Medical Supplies
   */
  DurableMedicalEquipmentMedicalSupplies: "332B00000X",

  /**
   * Customized Equipment (DME)
   */
  CustomizedEquipmentDME: "332BC3200X",

  /**
   * Dialysis Equipment & Supplies (DME)
   */
  DialysisEquipmentSuppliesDME: "332BD1200X",

  /**
   * Nursing Facility Supplies (DME)
   */
  NursingFacilitySuppliesDME: "332BN1400X",

  /**
   * Parenteral & Enteral Nutrition Supplies (DME)
   */
  ParenteralEnteralNutritionSuppliesDME: "332BP3500X",

  /**
   * Oxygen Equipment & Supplies (DME)
   */
  OxygenEquipmentSuppliesDME: "332BX2000X",

  /**
   * Eye Bank
   */
  EyeBank: "332G00000X",

  /**
   * Eyewear Supplier
   */
  EyewearSupplier: "332H00000X",

  /**
   * Hearing  Aid Equipment
   */
  HearingAidEquipment: "332S00000X",

  /**
   * Home Delivered Meals
   */
  HomeDeliveredMeals: "332U00000X",

  /**
   * Emergency Response System Companies
   */
  EmergencyResponseSystemCompanies: "333300000X",

  /**
   * Pharmacy
   */
  Pharmacy: "333600000X",

  /**
   * Clinic Pharmacy
   */
  ClinicPharmacy: "3336C0002X",

  /**
   * Community/Retail Pharmacy
   */
  CommunityRetailPharmacy: "3336C0003X",

  /**
   * Compounding Pharmacy
   */
  CompoundingPharmacy: "3336C0004X",

  /**
   * Home Infusion Therapy Pharmacy
   */
  HomeInfusionTherapyPharmacy: "3336H0001X",

  /**
   * Institutional Pharmacy
   */
  InstitutionalPharmacy: "3336I0012X",

  /**
   * Long Term Care Pharmacy
   */
  LongTermCarePharmacy: "3336L0003X",

  /**
   * Mail Order Pharmacy
   */
  MailOrderPharmacy: "3336M0002X",

  /**
   * Managed Care Organization Pharmacy
   */
  ManagedCareOrganizationPharmacy: "3336M0003X",

  /**
   * Nuclear Pharmacy
   */
  NuclearPharmacy: "3336N0007X",

  /**
   * Specialty Pharmacy
   */
  SpecialtyPharmacy: "3336S0011X",

  /**
   * Prosthetic/Orthotic Supplier
   */
  ProstheticOrthoticSupplier: "335E00000X",

  /**
   * Medical Foods Supplier
   */
  MedicalFoodsSupplier: "335G00000X",

  /**
   * Organ Procurement Organization
   */
  OrganProcurementOrganization: "335U00000X",

  /**
   * Portable X-ray and/or Other Portable Diagnostic Imaging Supplier
   */
  PortableXrayandorOtherPortableDiagnosticImagingSupplier: "335V00000X",

  /**
   * Ambulance
   */
  Ambulance: "341600000X",

  /**
   * Air Ambulance
   */
  AirAmbulance: "3416A0800X",

  /**
   * Land Ambulance
   */
  LandAmbulance: "3416L0300X",

  /**
   * Water Ambulance
   */
  WaterAmbulance: "3416S0300X",

  /**
   * Military/U.S. Coast Guard Transport,
   */
  MilitaryUSCoastGuardTransport: "341800000X",

  /**
   * Military or U.S. Coast Guard Ground Transport Ambulance
   */
  MilitaryorUSCoastGuardGroundTransportAmbulance: "3418M1110X",

  /**
   * Military or U.S. Coast Guard Air Transport Ambulance
   */
  MilitaryorUSCoastGuardAirTransportAmbulance: "3418M1120X",

  /**
   * Military or U.S. Coast Guard Water Transport Ambulance
   */
  MilitaryorUSCoastGuardWaterTransportAmbulance: "3418M1130X",

  /**
   * Transportation Network Company
   */
  TransportationNetworkCompany: "342000000X",

  /**
   * Secured Medical Transport (VAN)
   */
  SecuredMedicalTransportVAN: "343800000X",

  /**
   * Non-emergency Medical Transport (VAN)
   */
  NonemergencyMedicalTransportVAN: "343900000X",

  /**
   * Taxi
   */
  Taxi: "344600000X",

  /**
   * Air Carrier
   */
  AirCarrier: "344800000X",

  /**
   * Bus
   */
  Bus: "347B00000X",

  /**
   * Private Vehicle
   */
  PrivateVehicle: "347C00000X",

  /**
   * Train
   */
  Train: "347D00000X",

  /**
   * Transportation Broker
   */
  TransportationBroker: "347E00000X",

  /**
   * Physician Assistant
   */
  PhysicianAssistant: "363A00000X",

  /**
   * Medical Physician Assistant
   */
  MedicalPhysicianAssistant: "363AM0700X",

  /**
   * Surgical Physician Assistant
   */
  SurgicalPhysicianAssistant: "363AS0400X",

  /**
   * Nurse Practitioner
   */
  NursePractitioner: "363L00000X",

  /**
   * Acute Care Nurse Practitioner
   */
  AcuteCareNursePractitioner: "363LA2100X",

  /**
   * Adult Health Nurse Practitioner
   */
  AdultHealthNursePractitioner: "363LA2200X",

  /**
   * Critical Care Medicine Nurse Practitioner
   */
  CriticalCareMedicineNursePractitioner: "363LC0200X",

  /**
   * Community Health Nurse Practitioner
   */
  CommunityHealthNursePractitioner: "363LC1500X",

  /**
   * Family Nurse Practitioner
   */
  FamilyNursePractitioner: "363LF0000X",

  /**
   * Gerontology Nurse Practitioner
   */
  GerontologyNursePractitioner: "363LG0600X",

  /**
   * Neonatal Nurse Practitioner
   */
  NeonatalNursePractitioner: "363LN0000X",

  /**
   * Critical Care Neonatal Nurse Practitioner
   */
  CriticalCareNeonatalNursePractitioner: "363LN0005X",

  /**
   * Pediatric Nurse Practitioner
   */
  PediatricNursePractitioner: "363LP0200X",

  /**
   * Critical Care Pediatric Nurse Practitioner
   */
  CriticalCarePediatricNursePractitioner: "363LP0222X",

  /**
   * Psychiatric/Mental Health Nurse Practitioner
   */
  PsychiatricMentalHealthNursePractitioner: "363LP0808X",

  /**
   * Perinatal Nurse Practitioner
   */
  PerinatalNursePractitioner: "363LP1700X",

  /**
   * Primary Care Nurse Practitioner
   */
  PrimaryCareNursePractitioner: "363LP2300X",

  /**
   * School Nurse Practitioner
   */
  SchoolNursePractitioner: "363LS0200X",

  /**
   * Women's Health Nurse Practitioner
   */
  WomensHealthNursePractitioner: "363LW0102X",

  /**
   * Obstetrics & Gynecology Nurse Practitioner
   */
  ObstetricsGynecologyNursePractitioner: "363LX0001X",

  /**
   * Occupational Health Nurse Practitioner
   */
  OccupationalHealthNursePractitioner: "363LX0106X",

  /**
   * Clinical Nurse Specialist
   */
  ClinicalNurseSpecialist: "364S00000X",

  /**
   * Acute Care Clinical Nurse Specialist
   */
  AcuteCareClinicalNurseSpecialist: "364SA2100X",

  /**
   * Adult Health Clinical Nurse Specialist
   */
  AdultHealthClinicalNurseSpecialist: "364SA2200X",

  /**
   * Critical Care Medicine Clinical Nurse Specialist
   */
  CriticalCareMedicineClinicalNurseSpecialist: "364SC0200X",

  /**
   * Community Health/Public Health Clinical Nurse Specialist
   */
  CommunityHealthPublicHealthClinicalNurseSpecialist: "364SC1501X",

  /**
   * Chronic Care Clinical Nurse Specialist
   */
  ChronicCareClinicalNurseSpecialist: "364SC2300X",

  /**
   * Emergency Clinical Nurse Specialist
   */
  EmergencyClinicalNurseSpecialist: "364SE0003X",

  /**
   * Ethics Clinical Nurse Specialist
   */
  EthicsClinicalNurseSpecialist: "364SE1400X",

  /**
   * Family Health Clinical Nurse Specialist
   */
  FamilyHealthClinicalNurseSpecialist: "364SF0001X",

  /**
   * Gerontology Clinical Nurse Specialist
   */
  GerontologyClinicalNurseSpecialist: "364SG0600X",

  /**
   * Home Health Clinical Nurse Specialist
   */
  HomeHealthClinicalNurseSpecialist: "364SH0200X",

  /**
   * Holistic Clinical Nurse Specialist
   */
  HolisticClinicalNurseSpecialist: "364SH1100X",

  /**
   * Informatics Clinical Nurse Specialist
   */
  InformaticsClinicalNurseSpecialist: "364SI0800X",

  /**
   * Long-Term Care Clinical Nurse Specialist
   */
  LongTermCareClinicalNurseSpecialist: "364SL0600X",

  /**
   * Medical-Surgical Clinical Nurse Specialist
   */
  MedicalSurgicalClinicalNurseSpecialist: "364SM0705X",

  /**
   * Neonatal Clinical Nurse Specialist
   */
  NeonatalClinicalNurseSpecialist: "364SN0000X",

  /**
   * Neuroscience Clinical Nurse Specialist
   */
  NeuroscienceClinicalNurseSpecialist: "364SN0800X",

  /**
   * Pediatric Clinical Nurse Specialist
   */
  PediatricClinicalNurseSpecialist: "364SP0200X",

  /**
   * Child & Adolescent Psychiatric/Mental Health Clinical Nurse Specialist
   */
  ChildAdolescentPsychiatricMentalHealthClinicalNurseSpecialist: "364SP0807X",

  /**
   * Psychiatric/Mental Health Clinical Nurse Specialist
   */
  PsychiatricMentalHealthClinicalNurseSpecialist: "364SP0808X",

  /**
   * Adult Psychiatric/Mental Health Clinical Nurse Specialist
   */
  AdultPsychiatricMentalHealthClinicalNurseSpecialist: "364SP0809X",

  /**
   * Child & Family Psychiatric/Mental Health Clinical Nurse Specialist
   */
  ChildFamilyPsychiatricMentalHealthClinicalNurseSpecialist: "364SP0810X",

  /**
   * Chronically Ill Psychiatric/Mental Health Clinical Nurse Specialist
   */
  ChronicallyIllPsychiatricMentalHealthClinicalNurseSpecialist: "364SP0811X",

  /**
   * Community Psychiatric/Mental Health Clinical Nurse Specialist
   */
  CommunityPsychiatricMentalHealthClinicalNurseSpecialist: "364SP0812X",

  /**
   * Geropsychiatric Psychiatric/Mental Health Clinical Nurse Specialist
   */
  GeropsychiatricPsychiatricMentalHealthClinicalNurseSpecialist: "364SP0813X",

  /**
   * Perinatal Clinical Nurse Specialist
   */
  PerinatalClinicalNurseSpecialist: "364SP1700X",

  /**
   * Perioperative Clinical Nurse Specialist
   */
  PerioperativeClinicalNurseSpecialist: "364SP2800X",

  /**
   * Rehabilitation Clinical Nurse Specialist
   */
  RehabilitationClinicalNurseSpecialist: "364SR0400X",

  /**
   * School Clinical Nurse Specialist
   */
  SchoolClinicalNurseSpecialist: "364SS0200X",

  /**
   * Transplantation Clinical Nurse Specialist
   */
  TransplantationClinicalNurseSpecialist: "364ST0500X",

  /**
   * Women's Health Clinical Nurse Specialist
   */
  WomensHealthClinicalNurseSpecialist: "364SW0102X",

  /**
   * Occupational Health Clinical Nurse Specialist
   */
  OccupationalHealthClinicalNurseSpecialist: "364SX0106X",

  /**
   * Oncology Clinical Nurse Specialist
   */
  OncologyClinicalNurseSpecialist: "364SX0200X",

  /**
   * Pediatric Oncology Clinical Nurse Specialist
   */
  PediatricOncologyClinicalNurseSpecialist: "364SX0204X",

  /**
   * Certified Registered Nurse Anesthetist
   */
  CertifiedRegisteredNurseAnesthetist: "367500000X",

  /**
   * Advanced Practice Midwife
   */
  AdvancedPracticeMidwife: "367A00000X",

  /**
   * Anesthesiologist Assistant
   */
  AnesthesiologistAssistant: "367H00000X",

  /**
   * Chore Provider
   */
  ChoreProvider: "372500000X",

  /**
   * Adult Companion
   */
  AdultCompanion: "372600000X",

  /**
   * Day Training/Habilitation Specialist
   */
  DayTrainingHabilitationSpecialist: "373H00000X",

  /**
   * Technician
   */
  Technician: "374700000X",

  /**
   * Attendant Care Provider
   */
  AttendantCareProvider: "3747A0650X",

  /**
   * Personal Care Attendant
   */
  PersonalCareAttendant: "3747P1801X",

  /**
   * Doula
   */
  Doula: "374J00000X",

  /**
   * Religious Nonmedical Practitioner
   */
  ReligiousNonmedicalPractitioner: "374K00000X",

  /**
   * Religious Nonmedical Nursing Personnel
   */
  ReligiousNonmedicalNursingPersonnel: "374T00000X",

  /**
   * Home Health Aide
   */
  HomeHealthAide: "374U00000X",

  /**
   * Nursing Home Administrator
   */
  NursingHomeAdministrator: "376G00000X",

  /**
   * Homemaker
   */
  Homemaker: "376J00000X",

  /**
   * Nurse's Aide
   */
  NursesAide: "376K00000X",

  /**
   * Respite Care
   */
  RespiteCare: "385H00000X",

  /**
   * Respite Care Camp
   */
  RespiteCareCamp: "385HR2050X",

  /**
   * Child Mental Illness Respite Care
   */
  ChildMentalIllnessRespiteCare: "385HR2055X",

  /**
   * Child Intellectual and/or Developmental Disabilities Respite Care
   */
  ChildIntellectualandorDevelopmentalDisabilitiesRespiteCare: "385HR2060X",

  /**
   * Child Physical Disabilities Respite Care
   */
  ChildPhysicalDisabilitiesRespiteCare: "385HR2065X",

  /**
   * Student in an Organized Health Care Education/Training Program
   */
  StudentinanOrganizedHealthCareEducationTrainingProgram: "390200000X",

  /**
   * Prevention Professional
   */
  PreventionProfessional: "405300000X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NUCCProviderCodesCode =
  typeof NUCCProviderCodesCode[keyof typeof NUCCProviderCodesCode];
