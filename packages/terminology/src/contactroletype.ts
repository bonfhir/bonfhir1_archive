/**
 * Types of contact for Role code "CON"
 * http://terminology.hl7.org/ValueSet/v3-ContactRoleType
 */
export const ContactRoleTypeCode = {
  /**
   * Billing Contact
   */
  BillingContact: "BILL",

  /**
   * organizational contact
   */
  organizationalcontact: "ORG",

  /**
   * Payor Contact
   */
  PayorContact: "PAYOR",

  /**
   * emergency contact
   */
  emergencycontact: "ECON",

  /**
   * next of kin
   */
  nextofkin: "NOK",

  /**
   * AffiliationRoleType
   */
  AffiliationRoleType: "_AffiliationRoleType",

  /**
   * AgentRoleType
   */
  AgentRoleType: "_AgentRoleType",

  /**
   * amender
   */
  amender: "AMENDER",

  /**
   * classifier
   */
  classifier: "CLASSIFIER",

  /**
   * consenter
   */
  consenter: "CONSENTER",

  /**
   * consent witness
   */
  consentwitness: "CONSWIT",

  /**
   * co-participant
   */
  coparticipant: "COPART",

  /**
   * declassifier
   */
  declassifier: "DECLASSIFIER",

  /**
   * delegatee
   */
  delegatee: "DELEGATEE",

  /**
   * delegator
   */
  delegator: "DELEGATOR",

  /**
   * downgrader
   */
  downgrader: "DOWNGRDER",

  /**
   * derivative classifier
   */
  derivativeclassifier: "DRIVCLASSIFIER",

  /**
   * grantee
   */
  grantee: "GRANTEE",

  /**
   * grantor
   */
  grantor: "GRANTOR",

  /**
   * interpreter
   */
  interpreter: "INTPRTER",

  /**
   * reviewer
   */
  reviewer: "REVIEWER",

  /**
   * upgrader
   */
  upgrader: "UPGRDER",

  /**
   * validator
   */
  validator: "VALIDATOR",

  /**
   * CoverageSponsorRoleType
   */
  CoverageSponsorRoleType: "_CoverageSponsorRoleType",

  /**
   * Fully insured coverage sponsor
   */
  Fullyinsuredcoveragesponsor: "FULLINS",

  /**
   * Self insured coverage sponsor
   */
  Selfinsuredcoveragesponsor: "SELFINS",

  /**
   * PayorRoleType
   */
  PayorRoleType: "_PayorRoleType",

  /**
   * Enrollment Broker
   */
  EnrollmentBroker: "ENROLBKR",

  /**
   * Third party administrator
   */
  Thirdpartyadministrator: "TPA",

  /**
   * Utilization management organization
   */
  Utilizationmanagementorganization: "UMO",

  /**
   * responsible party
   */
  responsibleparty: "RESPRSN",

  /**
   * executor of estate
   */
  executorofestate: "EXCEST",

  /**
   * guardian ad lidem
   */
  guardianadlidem: "GUADLTM",

  /**
   * guardian
   */
  guardian: "GUARD",

  /**
   * power of attorney
   */
  powerofattorney: "POWATT",

  /**
   * durable power of attorney
   */
  durablepowerofattorney: "DPOWATT",

  /**
   * healthcare power of attorney
   */
  healthcarepowerofattorney: "HPOWATT",

  /**
   * special power of attorney
   */
  specialpowerofattorney: "SPOWATT",

  /**
   * AssignedRoleType
   */
  AssignedRoleType: "_AssignedRoleType",

  /**
   * AssignedNonPersonLivingSubjectRoleType
   */
  AssignedNonPersonLivingSubjectRoleType:
    "_AssignedNonPersonLivingSubjectRoleType",

  /**
   * Assistive non-person living subject
   */
  Assistivenonpersonlivingsubject: "ASSIST",

  /**
   * Biotherapeutic non-person living subject
   */
  Biotherapeuticnonpersonlivingsubject: "BIOTH",

  /**
   * Antibiotic
   */
  Antibiotic: "ANTIBIOT",

  /**
   * Debridement
   */
  Debridement: "DEBR",

  /**
   * Clinical Companion
   */
  ClinicalCompanion: "CCO",

  /**
   * Seeing
   */
  Seeing: "SEE",

  /**
   * Sniffing
   */
  Sniffing: "SNIFF",

  /**
   * CertifiedEntityType
   */
  CertifiedEntityType: "_CertifiedEntityType",

  /**
   * PractitionerCertifiedEntityType
   */
  PractitionerCertifiedEntityType: "_PractitionerCertifiedEntityType",

  /**
   * CitizenRoleType
   */
  CitizenRoleType: "_CitizenRoleType",

  /**
   * asylum seeker
   */
  asylumseeker: "CAS",

  /**
   * single minor asylum seeker
   */
  singleminorasylumseeker: "CASM",

  /**
   * national
   */
  national: "CN",

  /**
   * non-country member without residence permit
   */
  noncountrymemberwithoutresidencepermit: "CNRP",

  /**
   * non-country member minor without residence permit
   */
  noncountrymemberminorwithoutresidencepermit: "CNRPM",

  /**
   * permit card applicant
   */
  permitcardapplicant: "CPCA",

  /**
   * non-country member with residence permit
   */
  noncountrymemberwithresidencepermit: "CRP",

  /**
   * non-country member minor with residence permit
   */
  noncountrymemberminorwithresidencepermit: "CRPM",

  /**
   * ContactRoleType
   */
  ContactRoleType: "_ContactRoleType",

  /**
   * AdministrativeContactRoleType
   */
  AdministrativeContactRoleType: "_AdministrativeContactRoleType",

  /**
   * emergency contact
   */
  emergencycontact: "ECON",

  /**
   * next of kin
   */
  nextofkin: "NOK",

  /**
   * IdentifiedEntityType
   */
  IdentifiedEntityType: "_IdentifiedEntityType",

  /**
   * LocationIdentifiedEntityRoleCode
   */
  LocationIdentifiedEntityRoleCode: "_LocationIdentifiedEntityRoleCode",

  /**
   * accreditation location identifier
   */
  accreditationlocationidentifier: "ACHFID",

  /**
   * jurisdiction location identifier
   */
  jurisdictionlocationidentifier: "JURID",

  /**
   * local location identifier
   */
  locallocationidentifier: "LOCHFID",

  /**
   * LivingSubjectProductionClass
   */
  LivingSubjectProductionClass: "_LivingSubjectProductionClass",

  /**
   * Beef
   */
  Beef: "BF",

  /**
   * Broiler
   */
  Broiler: "BL",

  /**
   * Breeder
   */
  Breeder: "BR",

  /**
   * Companion
   */
  Companion: "CO",

  /**
   * Dairy
   */
  Dairy: "DA",

  /**
   * Draft
   */
  Draft: "DR",

  /**
   * Dual
   */
  Dual: "DU",

  /**
   * Fiber
   */
  Fiber: "FI",

  /**
   * Layer
   */
  Layer: "LY",

  /**
   * Meat
   */
  Meat: "MT",

  /**
   * Multiplier
   */
  Multiplier: "MU",

  /**
   * Pleasure
   */
  Pleasure: "PL",

  /**
   * Racing
   */
  Racing: "RC",

  /**
   * Show
   */
  Show: "SH",

  /**
   * Veal
   */
  Veal: "VL",

  /**
   * Wool
   */
  Wool: "WL",

  /**
   * Working
   */
  Working: "WO",

  /**
   * MedicationGeneralizationRoleType
   */
  MedicationGeneralizationRoleType: "_MedicationGeneralizationRoleType",

  /**
   * therapeutic class
   */
  therapeuticclass: "DC",

  /**
   * generic drug
   */
  genericdrug: "GD",

  /**
   * generic drug form
   */
  genericdrugform: "GDF",

  /**
   * generic drug strength
   */
  genericdrugstrength: "GDS",

  /**
   * generic drug strength form
   */
  genericdrugstrengthform: "GDSF",

  /**
   * manufactured drug strength form
   */
  manufactureddrugstrengthform: "MGDSF",

  /**
   * MemberRoleType
   */
  MemberRoleType: "_MemberRoleType",

  /**
   * Tribal Member
   */
  TribalMember: "TRB",

  /**
   * PersonalRelationshipRoleType
   */
  PersonalRelationshipRoleType: "_PersonalRelationshipRoleType",

  /**
   * family member
   */
  familymember: "FAMMEMB",

  /**
   * child
   */
  child: "CHILD",

  /**
   * adopted child
   */
  adoptedchild: "CHLDADOPT",

  /**
   * adopted daughter
   */
  adopteddaughter: "DAUADOPT",

  /**
   * adopted son
   */
  adoptedson: "SONADOPT",

  /**
   * foster child
   */
  fosterchild: "CHLDFOST",

  /**
   * foster daughter
   */
  fosterdaughter: "DAUFOST",

  /**
   * foster son
   */
  fosterson: "SONFOST",

  /**
   * daughter
   */
  daughter: "DAUC",

  /**
   * natural daughter
   */
  naturaldaughter: "DAU",

  /**
   * stepdaughter
   */
  stepdaughter: "STPDAU",

  /**
   * natural child
   */
  naturalchild: "NCHILD",

  /**
   * natural son
   */
  naturalson: "SON",

  /**
   * son
   */
  son: "SONC",

  /**
   * stepson
   */
  stepson: "STPSON",

  /**
   * step child
   */
  stepchild: "STPCHLD",

  /**
   * extended family member
   */
  extendedfamilymember: "EXT",

  /**
   * aunt
   */
  aunt: "AUNT",

  /**
   * maternal aunt
   */
  maternalaunt: "MAUNT",

  /**
   * paternal aunt
   */
  paternalaunt: "PAUNT",

  /**
   * cousin
   */
  cousin: "COUSN",

  /**
   * maternal cousin
   */
  maternalcousin: "MCOUSN",

  /**
   * paternal cousin
   */
  paternalcousin: "PCOUSN",

  /**
   * great grandparent
   */
  greatgrandparent: "GGRPRN",

  /**
   * great grandfather
   */
  greatgrandfather: "GGRFTH",

  /**
   * maternal great-grandfather
   */
  maternalgreatgrandfather: "MGGRFTH",

  /**
   * paternal great-grandfather
   */
  paternalgreatgrandfather: "PGGRFTH",

  /**
   * great grandmother
   */
  greatgrandmother: "GGRMTH",

  /**
   * maternal great-grandmother
   */
  maternalgreatgrandmother: "MGGRMTH",

  /**
   * paternal great-grandmother
   */
  paternalgreatgrandmother: "PGGRMTH",

  /**
   * maternal great-grandparent
   */
  maternalgreatgrandparent: "MGGRPRN",

  /**
   * paternal great-grandparent
   */
  paternalgreatgrandparent: "PGGRPRN",

  /**
   * grandchild
   */
  grandchild: "GRNDCHILD",

  /**
   * granddaughter
   */
  granddaughter: "GRNDDAU",

  /**
   * grandson
   */
  grandson: "GRNDSON",

  /**
   * grandparent
   */
  grandparent: "GRPRN",

  /**
   * grandfather
   */
  grandfather: "GRFTH",

  /**
   * maternal grandfather
   */
  maternalgrandfather: "MGRFTH",

  /**
   * paternal grandfather
   */
  paternalgrandfather: "PGRFTH",

  /**
   * grandmother
   */
  grandmother: "GRMTH",

  /**
   * maternal grandmother
   */
  maternalgrandmother: "MGRMTH",

  /**
   * paternal grandmother
   */
  paternalgrandmother: "PGRMTH",

  /**
   * maternal grandparent
   */
  maternalgrandparent: "MGRPRN",

  /**
   * paternal grandparent
   */
  paternalgrandparent: "PGRPRN",

  /**
   * inlaw
   */
  inlaw: "INLAW",

  /**
   * child-in-law
   */
  childinlaw: "CHLDINLAW",

  /**
   * daughter in-law
   */
  daughterinlaw: "DAUINLAW",

  /**
   * son in-law
   */
  soninlaw: "SONINLAW",

  /**
   * parent in-law
   */
  parentinlaw: "PRNINLAW",

  /**
   * father-in-law
   */
  fatherinlaw: "FTHINLAW",

  /**
   * mother-in-law
   */
  motherinlaw: "MTHINLAW",

  /**
   * mother-in-law
   */
  motherinlaw: "MTHINLOAW",

  /**
   * sibling in-law
   */
  siblinginlaw: "SIBINLAW",

  /**
   * brother-in-law
   */
  brotherinlaw: "BROINLAW",

  /**
   * sister-in-law
   */
  sisterinlaw: "SISINLAW",

  /**
   * sister-in-law
   */
  sisterinlaw: "SISLINLAW",

  /**
   * niece/nephew
   */
  niecenephew: "NIENEPH",

  /**
   * nephew
   */
  nephew: "NEPHEW",

  /**
   * niece
   */
  niece: "NIECE",

  /**
   * uncle
   */
  uncle: "UNCLE",

  /**
   * maternal uncle
   */
  maternaluncle: "MUNCLE",

  /**
   * paternal uncle
   */
  paternaluncle: "PUNCLE",

  /**
   * parent
   */
  parent: "PRN",

  /**
   * adoptive parent
   */
  adoptiveparent: "ADOPTP",

  /**
   * adoptive father
   */
  adoptivefather: "ADOPTF",

  /**
   * adoptive mother
   */
  adoptivemother: "ADOPTM",

  /**
   * father
   */
  father: "FTH",

  /**
   * foster father
   */
  fosterfather: "FTHFOST",

  /**
   * natural father
   */
  naturalfather: "NFTH",

  /**
   * natural father of fetus
   */
  naturalfatheroffetus: "NFTHF",

  /**
   * stepfather
   */
  stepfather: "STPFTH",

  /**
   * mother
   */
  mother: "MTH",

  /**
   * gestational mother
   */
  gestationalmother: "GESTM",

  /**
   * foster mother
   */
  fostermother: "MTHFOST",

  /**
   * natural mother
   */
  naturalmother: "NMTH",

  /**
   * natural mother of fetus
   */
  naturalmotheroffetus: "NMTHF",

  /**
   * stepmother
   */
  stepmother: "STPMTH",

  /**
   * natural parent
   */
  naturalparent: "NPRN",

  /**
   * foster parent
   */
  fosterparent: "PRNFOST",

  /**
   * step parent
   */
  stepparent: "STPPRN",

  /**
   * sibling
   */
  sibling: "SIB",

  /**
   * brother
   */
  brother: "BRO",

  /**
   * half-brother
   */
  halfbrother: "HBRO",

  /**
   * natural brother
   */
  naturalbrother: "NBRO",

  /**
   * twin brother
   */
  twinbrother: "TWINBRO",

  /**
   * fraternal twin brother
   */
  fraternaltwinbrother: "FTWINBRO",

  /**
   * identical twin brother
   */
  identicaltwinbrother: "ITWINBRO",

  /**
   * stepbrother
   */
  stepbrother: "STPBRO",

  /**
   * half-sibling
   */
  halfsibling: "HSIB",

  /**
   * half-sister
   */
  halfsister: "HSIS",

  /**
   * natural sibling
   */
  naturalsibling: "NSIB",

  /**
   * natural sister
   */
  naturalsister: "NSIS",

  /**
   * twin sister
   */
  twinsister: "TWINSIS",

  /**
   * fraternal twin sister
   */
  fraternaltwinsister: "FTWINSIS",

  /**
   * identical twin sister
   */
  identicaltwinsister: "ITWINSIS",

  /**
   * twin
   */
  twin: "TWIN",

  /**
   * fraternal twin
   */
  fraternaltwin: "FTWIN",

  /**
   * identical twin
   */
  identicaltwin: "ITWIN",

  /**
   * sister
   */
  sister: "SIS",

  /**
   * stepsister
   */
  stepsister: "STPSIS",

  /**
   * step sibling
   */
  stepsibling: "STPSIB",

  /**
   * significant other
   */
  significantother: "SIGOTHR",

  /**
   * domestic partner
   */
  domesticpartner: "DOMPART",

  /**
   * former spouse
   */
  formerspouse: "FMRSPS",

  /**
   * spouse
   */
  spouse: "SPS",

  /**
   * husband
   */
  husband: "HUSB",

  /**
   * wife
   */
  wife: "WIFE",

  /**
   * unrelated friend
   */
  unrelatedfriend: "FRND",

  /**
   * neighbor
   */
  neighbor: "NBOR",

  /**
   * self
   */
  self: "ONESELF",

  /**
   * Roommate
   */
  Roommate: "ROOM",

  /**
   * PolicyOrProgramCoverageRoleType
   */
  PolicyOrProgramCoverageRoleType: "_PolicyOrProgramCoverageRoleType",

  /**
   * CoverageRoleType
   */
  CoverageRoleType: "_CoverageRoleType",

  /**
   * family dependent
   */
  familydependent: "FAMDEP",

  /**
   * handicapped dependent
   */
  handicappeddependent: "HANDIC",

  /**
   * injured plaintiff
   */
  injuredplaintiff: "INJ",

  /**
   * self
   */
  self: "SELF",

  /**
   * sponsored dependent
   */
  sponsoreddependent: "SPON",

  /**
   * student
   */
  student: "STUD",

  /**
   * full-time student
   */
  fulltimestudent: "FSTUD",

  /**
   * part-time student
   */
  parttimestudent: "PSTUD",

  /**
   * adopted child
   */
  adoptedchild: "ADOPT",

  /**
   * grandchild
   */
  grandchild: "GCHILD",

  /**
   * grandparent
   */
  grandparent: "GPARNT",

  /**
   * natural child
   */
  naturalchild: "NAT",

  /**
   * niece/nephew
   */
  niecenephew: "NIENE",

  /**
   * parent
   */
  parent: "PARNT",

  /**
   * spouse
   */
  spouse: "SPSE",

  /**
   * step child
   */
  stepchild: "STEP",

  /**
   * covered party role type
   */
  coveredpartyroletype: "_CoveredPartyRoleType",

  /**
   * ClaimantCoveredPartyRoleType
   */
  ClaimantCoveredPartyRoleType: "_ClaimantCoveredPartyRoleType",

  /**
   * crime victim
   */
  crimevictim: "CRIMEVIC",

  /**
   * injured worker
   */
  injuredworker: "INJWKR",

  /**
   * DependentCoveredPartyRoleType
   */
  DependentCoveredPartyRoleType: "_DependentCoveredPartyRoleType",

  /**
   * continuity of coverage beneficiary
   */
  continuityofcoveragebeneficiary: "COCBEN",

  /**
   * differently abled
   */
  differentlyabled: "DIFFABL",

  /**
   * ward
   */
  ward: "WARD",

  /**
   * IndividualInsuredPartyRoleType
   */
  IndividualInsuredPartyRoleType: "_IndividualInsuredPartyRoleType",

  /**
   * retiree
   */
  retiree: "RETIREE",

  /**
   * ProgramEligiblePartyRoleType
   */
  ProgramEligiblePartyRoleType: "_ProgramEligiblePartyRoleType",

  /**
   * member of an indigenous people
   */
  memberofanindigenouspeople: "INDIG",

  /**
   * military
   */
  military: "MIL",

  /**
   * active duty military
   */
  activedutymilitary: "ACTMIL",

  /**
   * retired military
   */
  retiredmilitary: "RETMIL",

  /**
   * veteran
   */
  veteran: "VET",

  /**
   * SubscriberCoveredPartyRoleType
   */
  SubscriberCoveredPartyRoleType: "_SubscriberCoveredPartyRoleType",

  /**
   * ResearchSubjectRoleBasis
   */
  ResearchSubjectRoleBasis: "_ResearchSubjectRoleBasis",

  /**
   * enrollment
   */
  enrollment: "ERL",

  /**
   * screening
   */
  screening: "SCN",

  /**
   * ServiceDeliveryLocationRoleType
   */
  ServiceDeliveryLocationRoleType: "_ServiceDeliveryLocationRoleType",

  /**
   * DedicatedServiceDeliveryLocationRoleType
   */
  DedicatedServiceDeliveryLocationRoleType:
    "_DedicatedServiceDeliveryLocationRoleType",

  /**
   * DedicatedClinicalLocationRoleType
   */
  DedicatedClinicalLocationRoleType: "_DedicatedClinicalLocationRoleType",

  /**
   * Diagnostics or therapeutics unit
   */
  Diagnosticsortherapeuticsunit: "DX",

  /**
   * Cardiovascular diagnostics or therapeutics unit
   */
  Cardiovasculardiagnosticsortherapeuticsunit: "CVDX",

  /**
   * Cardiac catheterization lab
   */
  Cardiaccatheterizationlab: "CATH",

  /**
   * Echocardiography lab
   */
  Echocardiographylab: "ECHO",

  /**
   * Gastroenterology diagnostics or therapeutics lab
   */
  Gastroenterologydiagnosticsortherapeuticslab: "GIDX",

  /**
   * Endoscopy lab
   */
  Endoscopylab: "ENDOS",

  /**
   * Radiology diagnostics or therapeutics unit
   */
  Radiologydiagnosticsortherapeuticsunit: "RADDX",

  /**
   * Radiation oncology unit
   */
  Radiationoncologyunit: "RADO",

  /**
   * Neuroradiology unit
   */
  Neuroradiologyunit: "RNEU",

  /**
   * Hospital
   */
  Hospital: "HOSP",

  /**
   * Chronic Care Facility
   */
  ChronicCareFacility: "CHR",

  /**
   * Hospitals; General Acute Care Hospital
   */
  HospitalsGeneralAcuteCareHospital: "GACH",

  /**
   * Military Hospital
   */
  MilitaryHospital: "MHSP",

  /**
   * Psychatric Care Facility
   */
  PsychatricCareFacility: "PSYCHF",

  /**
   * Rehabilitation hospital
   */
  Rehabilitationhospital: "RH",

  /**
   * addiction treatment center
   */
  addictiontreatmentcenter: "RHAT",

  /**
   * intellectual impairment center
   */
  intellectualimpairmentcenter: "RHII",

  /**
   * parents with adjustment difficulties center
   */
  parentswithadjustmentdifficultiescenter: "RHMAD",

  /**
   * physical impairment center
   */
  physicalimpairmentcenter: "RHPI",

  /**
   * physical impairment - hearing center
   */
  physicalimpairmenthearingcenter: "RHPIH",

  /**
   * physical impairment - motor skills center
   */
  physicalimpairmentmotorskillscenter: "RHPIMS",

  /**
   * physical impairment - visual skills center
   */
  physicalimpairmentvisualskillscenter: "RHPIVS",

  /**
   * youths with adjustment difficulties center
   */
  youthswithadjustmentdifficultiescenter: "RHYAD",

  /**
   * Hospital unit
   */
  Hospitalunit: "HU",

  /**
   * Bone marrow transplant unit
   */
  Bonemarrowtransplantunit: "BMTU",

  /**
   * Coronary care unit
   */
  Coronarycareunit: "CCU",

  /**
   * Chest unit
   */
  Chestunit: "CHEST",

  /**
   * Epilepsy unit
   */
  Epilepsyunit: "EPIL",

  /**
   * Emergency room
   */
  Emergencyroom: "ER",

  /**
   * Emergency trauma unit
   */
  Emergencytraumaunit: "ETU",

  /**
   * Hemodialysis unit
   */
  Hemodialysisunit: "HD",

  /**
   * hospital laboratory
   */
  hospitallaboratory: "HLAB",

  /**
   * inpatient laboratory
   */
  inpatientlaboratory: "INLAB",

  /**
   * outpatient laboratory
   */
  outpatientlaboratory: "OUTLAB",

  /**
   * radiology unit
   */
  radiologyunit: "HRAD",

  /**
   * specimen collection site
   */
  specimencollectionsite: "HUSCS",

  /**
   * Intensive care unit
   */
  Intensivecareunit: "ICU",

  /**
   * Pediatric intensive care unit
   */
  Pediatricintensivecareunit: "PEDICU",

  /**
   * Pediatric neonatal intensive care unit
   */
  Pediatricneonatalintensivecareunit: "PEDNICU",

  /**
   * inpatient pharmacy
   */
  inpatientpharmacy: "INPHARM",

  /**
   * medical laboratory
   */
  medicallaboratory: "MBL",

  /**
   * Neurology critical care and stroke unit
   */
  Neurologycriticalcareandstrokeunit: "NCCS",

  /**
   * Neurosurgery unit
   */
  Neurosurgeryunit: "NS",

  /**
   * outpatient pharmacy
   */
  outpatientpharmacy: "OUTPHARM",

  /**
   * Pediatric unit
   */
  Pediatricunit: "PEDU",

  /**
   * Psychiatric hospital unit
   */
  Psychiatrichospitalunit: "PHU",

  /**
   * Rehabilitation hospital unit
   */
  Rehabilitationhospitalunit: "RHU",

  /**
   * Sleep disorders unit
   */
  Sleepdisordersunit: "SLEEP",

  /**
   * Nursing or custodial care facility
   */
  Nursingorcustodialcarefacility: "NCCF",

  /**
   * Skilled nursing facility
   */
  Skillednursingfacility: "SNF",

  /**
   * Outpatient facility
   */
  Outpatientfacility: "OF",

  /**
   * Allergy clinic
   */
  Allergyclinic: "ALL",

  /**
   * Amputee clinic
   */
  Amputeeclinic: "AMPUT",

  /**
   * Bone marrow transplant clinic
   */
  Bonemarrowtransplantclinic: "BMTC",

  /**
   * Breast clinic
   */
  Breastclinic: "BREAST",

  /**
   * Child and adolescent neurology clinic
   */
  Childandadolescentneurologyclinic: "CANC",

  /**
   * Child and adolescent psychiatry clinic
   */
  Childandadolescentpsychiatryclinic: "CAPC",

  /**
   * Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
   */
  AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities:
    "CARD",

  /**
   * Pediatric cardiology clinic
   */
  Pediatriccardiologyclinic: "PEDCARD",

  /**
   * Coagulation clinic
   */
  Coagulationclinic: "COAG",

  /**
   * Colon and rectal surgery clinic
   */
  Colonandrectalsurgeryclinic: "CRS",

  /**
   * Dermatology clinic
   */
  Dermatologyclinic: "DERM",

  /**
   * Endocrinology clinic
   */
  Endocrinologyclinic: "ENDO",

  /**
   * Pediatric endocrinology clinic
   */
  Pediatricendocrinologyclinic: "PEDE",

  /**
   * Otorhinolaryngology clinic
   */
  Otorhinolaryngologyclinic: "ENT",

  /**
   * Family medicine clinic
   */
  Familymedicineclinic: "FMC",

  /**
   * Gastroenterology clinic
   */
  Gastroenterologyclinic: "GI",

  /**
   * Pediatric gastroenterology clinic
   */
  Pediatricgastroenterologyclinic: "PEDGI",

  /**
   * General internal medicine clinic
   */
  Generalinternalmedicineclinic: "GIM",

  /**
   * Gynecology clinic
   */
  Gynecologyclinic: "GYN",

  /**
   * Hematology clinic
   */
  Hematologyclinic: "HEM",

  /**
   * Pediatric hematology clinic
   */
  Pediatrichematologyclinic: "PEDHEM",

  /**
   * Hypertension clinic
   */
  Hypertensionclinic: "HTN",

  /**
   * Impairment evaluation center
   */
  Impairmentevaluationcenter: "IEC",

  /**
   * Infectious disease clinic
   */
  Infectiousdiseaseclinic: "INFD",

  /**
   * Pediatric infectious disease clinic
   */
  Pediatricinfectiousdiseaseclinic: "PEDID",

  /**
   * Infertility clinic
   */
  Infertilityclinic: "INV",

  /**
   * Lympedema clinic
   */
  Lympedemaclinic: "LYMPH",

  /**
   * Medical genetics clinic
   */
  Medicalgeneticsclinic: "MGEN",

  /**
   * Nephrology clinic
   */
  Nephrologyclinic: "NEPH",

  /**
   * Pediatric nephrology clinic
   */
  Pediatricnephrologyclinic: "PEDNEPH",

  /**
   * Neurology clinic
   */
  Neurologyclinic: "NEUR",

  /**
   * Obstetrics clinic
   */
  Obstetricsclinic: "OB",

  /**
   * Oral and maxillofacial surgery clinic
   */
  Oralandmaxillofacialsurgeryclinic: "OMS",

  /**
   * Medical oncology clinic
   */
  Medicaloncologyclinic: "ONCL",

  /**
   * Pediatric oncology clinic
   */
  Pediatriconcologyclinic: "PEDHO",

  /**
   * Opthalmology clinic
   */
  Opthalmologyclinic: "OPH",

  /**
   * optometry clinic
   */
  optometryclinic: "OPTC",

  /**
   * Orthopedics clinic
   */
  Orthopedicsclinic: "ORTHO",

  /**
   * Hand clinic
   */
  Handclinic: "HAND",

  /**
   * Pain clinic
   */
  Painclinic: "PAINCL",

  /**
   * Primary care clinic
   */
  Primarycareclinic: "PC",

  /**
   * Pediatrics clinic
   */
  Pediatricsclinic: "PEDC",

  /**
   * Pediatric rheumatology clinic
   */
  Pediatricrheumatologyclinic: "PEDRHEUM",

  /**
   * Podiatry clinic
   */
  Podiatryclinic: "POD",

  /**
   * Preventive medicine clinic
   */
  Preventivemedicineclinic: "PREV",

  /**
   * Proctology clinic
   */
  Proctologyclinic: "PROCTO",

  /**
   * Provider's Office
   */
  ProvidersOffice: "PROFF",

  /**
   * Prosthodontics clinic
   */
  Prosthodonticsclinic: "PROS",

  /**
   * Psychology clinic
   */
  Psychologyclinic: "PSI",

  /**
   * Psychiatry clinic
   */
  Psychiatryclinic: "PSY",

  /**
   * Rheumatology clinic
   */
  Rheumatologyclinic: "RHEUM",

  /**
   * Sports medicine clinic
   */
  Sportsmedicineclinic: "SPMED",

  /**
   * Surgery clinic
   */
  Surgeryclinic: "SU",

  /**
   * Plastic surgery clinic
   */
  Plasticsurgeryclinic: "PLS",

  /**
   * Urology clinic
   */
  Urologyclinic: "URO",

  /**
   * Transplant clinic
   */
  Transplantclinic: "TR",

  /**
   * Travel and geographic medicine clinic
   */
  Travelandgeographicmedicineclinic: "TRAVEL",

  /**
   * Wound clinic
   */
  Woundclinic: "WND",

  /**
   * Residential treatment facility
   */
  Residentialtreatmentfacility: "RTF",

  /**
   * Pain rehabilitation center
   */
  Painrehabilitationcenter: "PRC",

  /**
   * Substance use rehabilitation facility
   */
  Substanceuserehabilitationfacility: "SURF",

  /**
   * DedicatedNonClinicalLocationRoleType
   */
  DedicatedNonClinicalLocationRoleType: "_DedicatedNonClinicalLocationRoleType",

  /**
   * Delivery Address
   */
  DeliveryAddress: "DADDR",

  /**
   * Mobile Unit
   */
  MobileUnit: "MOBL",

  /**
   * Ambulance
   */
  Ambulance: "AMB",

  /**
   * Pharmacy
   */
  Pharmacy: "PHARM",

  /**
   * IncidentalServiceDeliveryLocationRoleType
   */
  IncidentalServiceDeliveryLocationRoleType:
    "_IncidentalServiceDeliveryLocationRoleType",

  /**
   * accident site
   */
  accidentsite: "ACC",

  /**
   * Community Location
   */
  CommunityLocation: "COMM",

  /**
   * community service center
   */
  communityservicecenter: "CSC",

  /**
   * Patient's Residence
   */
  PatientsResidence: "PTRES",

  /**
   * school
   */
  school: "SCHOOL",

  /**
   * underage protection center
   */
  underageprotectioncenter: "UPC",

  /**
   * work site
   */
  worksite: "WORK",

  /**
   * SpecimenRoleType
   */
  SpecimenRoleType: "_SpecimenRoleType",

  /**
   * Calibrator
   */
  Calibrator: "C",

  /**
   * Group
   */
  Group: "G",

  /**
   * Pool
   */
  Pool: "L",

  /**
   * Patient
   */
  Patient: "P",

  /**
   * Quality Control
   */
  QualityControl: "Q",

  /**
   * Blind
   */
  Blind: "B",

  /**
   * Electronic QC
   */
  ElectronicQC: "E",

  /**
   * Filler Proficiency
   */
  FillerProficiency: "F",

  /**
   * Operator Proficiency
   */
  OperatorProficiency: "O",

  /**
   * Verifying
   */
  Verifying: "V",

  /**
   * Replicate
   */
  Replicate: "R",

  /**
   * claimant
   */
  claimant: "CLAIM",

  /**
   * Community Laboratory
   */
  CommunityLaboratory: "communityLaboratory",

  /**
   * Guarantor
   */
  Guarantor: "GT",

  /**
   * Home Health
   */
  HomeHealth: "homeHealth",

  /**
   * Laboratory
   */
  Laboratory: "laboratory",

  /**
   * Pathologist
   */
  Pathologist: "pathologist",

  /**
   * Policy Holder
   */
  PolicyHolder: "PH",

  /**
   * Phlebotomist
   */
  Phlebotomist: "phlebotomist",

  /**
   * program eligible
   */
  programeligible: "PROG",

  /**
   * Patient
   */
  Patient: "PT",

  /**
   * Self
   */
  Self: "subject",

  /**
   * Third Party
   */
  ThirdParty: "thirdParty",

  /**
   * AdministrativeLocationRoleType
   */
  AdministrativeLocationRoleType: "_AdministrativeLocationRoleType",

  /**
   * ClinicalOrganizationRoleType
   */
  ClinicalOrganizationRoleType: "_ClinicalOrganizationRoleType",

  /**
   * CommissioningPartyRoleType
   */
  CommissioningPartyRoleType: "_CommissioningPartyRoleType",

  /**
   * DeviceOperatorType
   */
  DeviceOperatorType: "_DeviceOperatorType",

  /**
   * EmployeeRoleType
   */
  EmployeeRoleType: "_EmployeeRoleType",

  /**
   * HealthcareProviderRoleType
   */
  HealthcareProviderRoleType: "_HealthcareProviderRoleType",

  /**
   * LicensedRoleType
   */
  LicensedRoleType: "_LicensedRoleType",

  /**
   * NDCRelatedDrugEntityType
   */
  NDCRelatedDrugEntityType: "_NDCRelatedDrugEntityType",

  /**
   * OrganizationPartRoleType
   */
  OrganizationPartRoleType: "_OrganizationPartRoleType",

  /**
   * ProductProcessingOrganizationRoleType
   */
  ProductProcessingOrganizationRoleType:
    "_ProductProcessingOrganizationRoleType",

  /**
   * ProductSafetyReportPartyRoleType
   */
  ProductSafetyReportPartyRoleType: "_ProductSafetyReportPartyRoleType",

  /**
   * QualifiedRoleType
   */
  QualifiedRoleType: "_QualifiedRoleType",

  /**
   *
   */
  DEP: "DEP",

  /**
   * dependent
   */
  dependent: "DEPEN",

  /**
   * Family Member
   */
  FamilyMember: "FM",

  /**
   * individual
   */
  individual: "INDIV",

  /**
   * named insured
   */
  namedinsured: "NAMED",

  /**
   *
   */
  PSYCHCF: "PSYCHCF",

  /**
   * subscriber
   */
  subscriber: "SUBSCR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContactRoleTypeCode =
  typeof ContactRoleTypeCode[keyof typeof ContactRoleTypeCode];
