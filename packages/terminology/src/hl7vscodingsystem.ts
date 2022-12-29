/**
 * Names of coding systems. Each coding system is assigned a unique identifier, which is generally a short mnemonic derived from the full name of the coding system.
 * http://terminology.hl7.org/ValueSet/v2-0396
 */
export const Hl7VSCodingSystemCode = {
  /**
   * Active
   */
  Active: "General code",

  /**
   * German Alpha-ID v2013
   */
  GermanAlphaIDv2013: "ALPHAID2012",

  /**
   * German Alpha-ID v2013
   */
  GermanAlphaIDv2013: "ALPHAID2013",

  /**
   * German Alpha-ID v2014
   */
  GermanAlphaIDv2014: "ALPHAID2014",

  /**
   * German Alpha-ID v2015
   */
  GermanAlphaIDv2015: "ALPHAID2015",

  /**
   * German Alpha-ID v2016
   */
  GermanAlphaIDv2016: "ALPHAID2016",

  /**
   * ICD 10 Germany v2012
   */
  ICD10Germanyv2012: "ICD10GM2012",

  /**
   * ICD 10 Germany v2013
   */
  ICD10Germanyv2013: "ICD10GM2013",

  /**
   * ICD 10 Germany v2014
   */
  ICD10Germanyv2014: "ICD10GM2014",

  /**
   * ICD 10 Germany v2015
   */
  ICD10Germanyv2015: "ICD10GM2015",

  /**
   * ICD 10 Germany v2016
   */
  ICD10Germanyv2016: "ICD10GM2016",

  /**
   * OPS Germany v2012
   */
  OPSGermanyv2012: "OPS2012",

  /**
   * OPS Germany v2013
   */
  OPSGermanyv2013: "OPS2013",

  /**
   * OPS Germany v2014
   */
  OPSGermanyv2014: "OPS2014",

  /**
   * OPS Germany v2015
   */
  OPSGermanyv2015: "OPS2015",

  /**
   * OPS Germany v2016
   */
  OPSGermanyv2016: "OPS2016",

  /**
   * Local general code (where z is an alphanumeric character)
   */
  Localgeneralcodewherezisanalphanumericcharacter: "99zzz or L",

  /**
   * Local general code for a site-defined code system used for a specific set of trading partners.  The 'zzz' SHALL be any printable ASCII string.  Length of the name SHALL not exceed field width, and is subject to local implementation.
   */
  LocalgeneralcodeforasitedefinedcodesystemusedforaspecificsetoftradingpartnersThezzzSHALLbeanyprintableASCIIstringLengthofthenameSHALLnotexceedfieldwidthandissubjecttolocalimplementation:
    "99zzz",

  /**
   * American College of Radiology finding codes
   */
  AmericanCollegeofRadiologyfindingcodes: "ACR",

  /**
   * Table of HL7 Version 3 ActCode values
   */
  TableofHL7Version3ActCodevalues: "ACTCODE",

  /**
     * Used to indicate that the target of the relationship will be a filtered subset of the total related set of targets.
Used when there is a need to limit the number of components to the first, the last, the next, the total, the average or some other filtere
     */
  UsedtoindicatethatthetargetoftherelationshipwillbeafilteredsubsetofthetotalrelatedsetoftargetsUsedwhenthereisaneedtolimitthenumberofcomponentstothefirstthelastthenextthetotaltheaverageorsomeotherfiltere:
    "ACTRELSS",

  /**
   * German Alpha-ID v2006
   */
  GermanAlphaIDv2006: "ALPHAID2006",

  /**
   * German Alpha-ID v2007
   */
  GermanAlphaIDv2007: "ALPHAID2007",

  /**
   * German Alpha-ID v2008
   */
  GermanAlphaIDv2008: "ALPHAID2008",

  /**
   * German Alpha-ID v2009
   */
  GermanAlphaIDv2009: "ALPHAID2009",

  /**
   * German Alpha-ID v2010
   */
  GermanAlphaIDv2010: "ALPHAID2010",

  /**
   * German Alpha-ID v2011
   */
  GermanAlphaIDv2011: "ALPHAID2011",

  /**
   * Australian Medicines Terminology (v2)
   */
  AustralianMedicinesTerminologyv2: "AMTv2",

  /**
   * HL7 set of units of measure
   */
  HL7setofunitsofmeasure: "ANS+",

  /**
   * WHO Adverse Reaction Terms
   */
  WHOAdverseReactionTerms: "ART",

  /**
   * ASTM E1238/ E1467 Universal
   */
  ASTME1238E1467Universal: "AS4",

  /**
   * AS4 Neurophysiology Codes
   */
  AS4NeurophysiologyCodes: "AS4E",

  /**
   * American Type Culture Collection
   */
  AmericanTypeCultureCollection: "ATC",

  /**
   * CPT-4
   */
  CPT4: "C4",

  /**
   * CPT-5
   */
  CPT5: "C5",

  /**
   * College of American Pathologists Electronic Cancer Checklist
   */
  CollegeofAmericanPathologistsElectronicCancerChecklist: "CAPECC",

  /**
   * Chemical abstract codes
   */
  Chemicalabstractcodes: "CAS",

  /**
   * DICOM Class Label
   */
  DICOMClassLabel: "DCL",

  /**
   * Clinical Care Classification system
   */
  ClinicalCareClassificationsystem: "CCC",

  /**
   * CDT-2 Codes
   */
  CDT2Codes: "CD2",

  /**
   * CDC Analyte Codes
   */
  CDCAnalyteCodes: "CDCA",

  /**
   * DICOM Query Label
   */
  DICOMQueryLabel: "DQL",

  /**
   * CDC Emergency Department Acuity
   */
  CDCEmergencyDepartmentAcuity: "CDCEDACUITY",

  /**
   * VIS Bar Codes (IIS)
   */
  VISBarCodesIIS: "cdcgs1vis",

  /**
   * Industry CDC Census 2010
   */
  IndustryCDCCensus2010: "CDCINDUSTRY2010",

  /**
   * CDC Methods/Instruments Codes
   */
  CDCMethodsInstrumentsCodes: "CDCM",

  /**
   * CDC National Healthcare Safety Network Codes
   */
  CDCNationalHealthcareSafetyNetworkCodes: "CDCNHSN",

  /**
   * CEN ECG diagnostic codes
   */
  CENECGdiagnosticcodes: "CE (obsolete)",

  /**
   * CDC BioSense RT observations (Census) - CDC
   */
  CDCBioSenseRTobservationsCensusCDC: "CDCOBS",

  /**
   * Occupation CDC Census 2010
   */
  OccupationCDCCensus2010: "CDCOCCUPATION2010",

  /**
   * Occupational Data for Health (ODH)
   */
  OccupationalDataforHealthODH: "CDCODH",

  /**
   * CDC PHIN Vocabulary Coding System
   */
  CDCPHINVocabularyCodingSystem: "CDCPHINVS",

  /**
   * Race & Ethnicity - CDC
   */
  RaceEthnicityCDC: "CDCREC",

  /**
   * CDC Surveillance
   */
  CDCSurveillance: "CDS",

  /**
   * CEN ECG diagnostic codes
   */
  CENECGdiagnosticcodes: "CE",

  /**
   * Cytogenetic (chromosome) location
   */
  Cytogeneticchromosomelocation: "Chrom-Loc",

  /**
   * ClinVar Variant ID
   */
  ClinVarVariantID: "CLINVAR-V",

  /**
   * CLIP
   */
  CLIP: "CLP",

  /**
   * OCE Edit Code
   */
  OCEEditCode: "CMSOEC",

  /**
   * OCE Modifier Code
   */
  OCEModifierCode: "CMSOMC",

  /**
   * FDA Unique Device Identifier
   */
  FDAUniqueDeviceIdentifier: "FDAUDI",

  /**
   * COSMIC – Simple variants
   */
  COSMICSimplevariants: "COSMIC-Smpl",

  /**
   * COSMIC-Structural variants
   */
  COSMICStructuralvariants: "COSMIC-Strc",

  /**
   * CPT Modifier Code
   */
  CPTModifierCode: "CPTM",

  /**
   * COSTART
   */
  COSTART: "CST",

  /**
   * CDC Vaccine Codes
   */
  CDCVaccineCodes: "CVX",

  /**
   * dbVar-Germline
   */
  dbVarGermline: "dbVar-GL",

  /**
   * dbVar-Somatic
   */
  dbVarSomatic: "dbVar-som",

  /**
   * DICOM Controlled Terminology
   */
  DICOMControlledTerminology: "DCM",

  /**
   * EUCLIDES
   */
  EUCLIDES: "E",

  /**
   * Euclides  quantity codes
   */
  Euclidesquantitycodes: "E5",

  /**
   * Euclides Lab method codes
   */
  EuclidesLabmethodcodes: "E6",

  /**
   * Euclides Lab equipment codes
   */
  EuclidesLabequipmentcodes: "E7",

  /**
   * Education Level
   */
  EducationLevel: "EDLEVEL",

  /**
   * Ensembl genomic reference sequence
   */
  Ensemblgenomicreferencesequence: "ensembl-G",

  /**
   * Ensembl protein reference sequence
   */
  Ensemblproteinreferencesequence: "Ensembl-P",

  /**
   * Ensembl transcript reference sequence
   */
  Ensembltranscriptreferencesequence: "ensembl-T",

  /**
   * Entity Code
   */
  EntityCode: "ENTITYCODE",

  /**
   * Entity Handling Code
   */
  EntityHandlingCode: "ENTITYHDLG",

  /**
   * Enzyme Codes
   */
  EnzymeCodes: "ENZC",

  /**
   * German Major Diagnostic Codes v2009
   */
  GermanMajorDiagnosticCodesv2009: "GMDC2009",

  /**
   * EPA SRS
   */
  EPASRS: "EPASRS",

  /**
   * GS1 Unique Device Identifier
   */
  GS1UniqueDeviceIdentifier: "GS1UDI",

  /**
   * Unique Ingredient Identifier (UNII)
   */
  UniqueIngredientIdentifierUNII: "FDAUNII",

  /**
   * First DataBank Drug Codes
   */
  FirstDataBankDrugCodes: "FDDC",

  /**
   * First DataBank Diagnostic Codes
   */
  FirstDataBankDiagnosticCodes: "FDDX",

  /**
   * FDA K10
   */
  FDAK10: "FDK",

  /**
   * FIPS 5-2 (State)
   */
  FIPS52State: "FIPS5_2",

  /**
   * HIBCC Unique Device Identifier
   */
  HIBCCUniqueDeviceIdentifier: "HIBUDI",

  /**
   * Populated Places (FIPS 55-3)
   */
  PopulatedPlacesFIPS553: "FIPS55_3",

  /**
   * FIPS 6-4 (County)
   */
  FIPS64County: "FIPS6_4",

  /**
   * G-DRG German DRG Codes v 2004
   */
  GDRGGermanDRGCodesv2004: "GDRG2004",

  /**
   * G-DRG German DRG Codes v 2005
   */
  GDRGGermanDRGCodesv2005: "GDRG2005",

  /**
   * G-DRG German DRG Codes v 2006
   */
  GDRGGermanDRGCodesv2006: "GDRG2006",

  /**
   * G-DRG German DRG Codes v2007
   */
  GDRGGermanDRGCodesv2007: "GDRG2007",

  /**
   * G-DRG German DRG Codes v2008
   */
  GDRGGermanDRGCodesv2008: "GDRG2008",

  /**
   * G-DRG German DRG Codes v2008
   */
  GDRGGermanDRGCodesv2008: "GDRG2009",

  /**
   * German Major Diagnostic Codes v 1004
   */
  GermanMajorDiagnosticCodesv1004: "GMDC2004",

  /**
   * German Major Diagnostic Codes v2005
   */
  GermanMajorDiagnosticCodesv2005: "GMDC2005",

  /**
   * German Major v2006 Diagnostic Codes
   */
  GermanMajorv2006DiagnosticCodes: "GMDC2006",

  /**
   * German Major Diagnostic Codes v2007
   */
  GermanMajorDiagnosticCodesv2007: "GMDC2007",

  /**
   * German Major Diagnostic Codes v2008
   */
  GermanMajorDiagnosticCodesv2008: "GMDC2008",

  /**
   * HIBCC
   */
  HIBCC: "HB",

  /**
   * CMS (formerly HCFA)  Common Procedure Coding System
   */
  CMSformerlyHCFACommonProcedureCodingSystem: "HCPCS",

  /**
   * ISBT 128 codes where nnnn  specifies a specific table within ISBT 128.
   */
  ISBT128codeswherennnnspecifiesaspecifictablewithinISBT128: "IBTnnnn",

  /**
   * Health Care Provider Taxonomy
   */
  HealthCareProviderTaxonomy: "HCPT",

  /**
   * ICCBBA Unique Device Identifier
   */
  ICCBBAUniqueDeviceIdentifier: "ICCUDI",

  /**
   * HGNC-symb
   */
  HGNCsymb: "HGNC-Symb",

  /**
   * HGVS- Transcript syntax
   */
  HGVSTranscriptsyntax: "HGVS.c",

  /**
   * HGVS- Genomic syntax
   */
  HGVSGenomicsyntax: "HGVS.g",

  /**
   * HGVS-Protein syntax
   */
  HGVSProteinsyntax: "HGVS.p",

  /**
   * Home Health Care
   */
  HomeHealthCare: "HHC",

  /**
   * ICD 10 Germany v2010
   */
  ICD10Germanyv2010: "ICD10GM2010",

  /**
   * Health Outcomes
   */
  HealthOutcomes: "HI",

  /**
   * ICD 10 Germany v2011
   */
  ICD10Germanyv2011: "ICD10GM2011",

  /**
   * Health Level Seven defined table of codes, where nnnn is the HL7 table number.  The number is four numeric digits as published in HL7 Version 2 chapter 2C.  For example, HL70001.
   */
  HealthLevelSevendefinedtableofcodeswherennnnistheHL7tablenumberThenumberisfournumericdigitsaspublishedinHL7Version2chapter2CForexampleHL70001:
    "HL7nnnn",

  /**
   * Japanese Nationwide Medicine Code
   */
  JapaneseNationwideMedicineCode: "HOT",

  /**
   * CMS (formerly HCFA )Procedure Codes (HCPCS)
   */
  CMSformerlyHCFAProcedureCodesHCPCS: "HPC",

  /**
   * Healthcare Service Location
   */
  HealthcareServiceLocation: "HSLOC",

  /**
   * ICD-10
   */
  ICD10: "I10",

  /**
   * International Classification of Diseases, 10th  Revision, Clinical Modification (ICD-10-CM)
   */
  InternationalClassificationofDiseases10thRevisionClinicalModificationICD10CM:
    "I10C",

  /**
   * ICD 10 Germany 2004
   */
  ICD10Germany2004: "I10G2004",

  /**
   * ICD 10 Germany 2005
   */
  ICD10Germany2005: "I10G2005",

  /**
   * ISO Defined Codes where nnnn is the ISO table number
   */
  ISODefinedCodeswherennnnistheISOtablenumber: "ISOnnnn (deprecated)",

  /**
   * ICD 10 Germany 2006
   */
  ICD10Germany2006: "I10G2006",

  /**
   * ISO 2955.83 (units of measure) with HL7 extensions
   */
  ISO295583unitsofmeasurewithHL7extensions: "ISO",

  /**
   * International Classification of Diseases, 10th  Revision, Procedure Coding System (ICD-10-PCS)
   */
  InternationalClassificationofDiseases10thRevisionProcedureCodingSystemICD10PCS:
    "I10P",

  /**
   * ICD-10 Place of Occurrence
   */
  ICD10PlaceofOccurrence: "I10P0",

  /**
   * ICD9
   */
  ICD9: "I9",

  /**
   * International Classification of Diseases, 9th  Revision, Clinical Modification (ICD-9-CM)
   */
  InternationalClassificationofDiseases9thRevisionClinicalModificationICD9CM:
    "I9C",

  /**
   * ICD-9CM Diagnosis codes
   */
  ICD9CMDiagnosiscodes: "I9CDX",

  /**
   * ICD-9CM Procedure codes
   */
  ICD9CMProcedurecodes: "I9CP",

  /**
   * ISBT
   */
  ISBT: "IBT",

  /**
   * ISBT 128 Standard transfusion/transplantation data items
   */
  ISBT128Standardtransfusiontransplantationdataitems: "IBT0001",

  /**
   * ICHPPC-2
   */
  ICHPPC2: "IC2",

  /**
   * ICD-10 Australian modification
   */
  ICD10Australianmodification: "ICD10AM",

  /**
   * ICD-10 Canada
   */
  ICD10Canada: "ICD10CA",

  /**
   * ICD 10 Germany v2007
   */
  ICD10Germanyv2007: "ICD10GM2007",

  /**
   * ICD 10 Germany v2008
   */
  ICD10Germanyv2008: "ICD10GM2008",

  /**
   * ICD 10 Germany v2009
   */
  ICD10Germanyv2009: "ICD10GM2009",

  /**
   * International Classification of Diseases for Oncology
   */
  InternationalClassificationofDiseasesforOncology: "ICDO",

  /**
   * International Classification of Disease for Oncology Second Edition
   */
  InternationalClassificationofDiseaseforOncologySecondEdition: "ICDO2",

  /**
   * International Classification of Disease for Oncology Third Edition
   */
  InternationalClassificationofDiseaseforOncologyThirdEdition: "ICDO3",

  /**
   * International Classification of Functioning, Disability and Health (ICF)
   */
  InternationalClassificationofFunctioningDisabilityandHealthICF: "ICF",

  /**
   * ICCS
   */
  ICCS: "ICS",

  /**
   * International Classification of Sleep Disorders
   */
  InternationalClassificationofSleepDisorders: "ICSD",

  /**
   * IHE Laboratory Analytical Workflow (LAW) Profile Codes.
   */
  IHELaboratoryAnalyticalWorkflowLAWProfileCodes: "IHELAW",

  /**
   * International System for Human Cytogenetic Nomenclature (ISCN)
   */
  InternationalSystemforHumanCytogeneticNomenclatureISCN: "ISCN",

  /**
   * ISO 2955.83 (units of measure) with HL7 extensions
   */
  ISO295583unitsofmeasurewithHL7extensions: "ISO+",

  /**
   * ISO 3166-1 Country Codes
   */
  ISO31661CountryCodes: "ISO3166_1",

  /**
   * ISO 3166-2 Country subdivisions
   */
  ISO31662Countrysubdivisions: "ISO3166_2",

  /**
   * ISO4217 Currency Codes
   */
  ISO4217CurrencyCodes: "ISO4217",

  /**
   * ISO 639 Language
   */
  ISO639Language: "ISO639",

  /**
   * ISO Defined Codes where nnnn is the ISO table number. (deprecated)
   */
  ISODefinedCodeswherennnnistheISOtablenumberdeprecated: "ISOnnnn",

  /**
   * Integrated Taxonomic Information System
   */
  IntegratedTaxonomicInformationSystem: "ITIS",

  /**
   * IUPAC/IFCC Component Codes
   */
  IUPACIFCCComponentCodes: "IUPC",

  /**
   * IUPAC/IFCC Property Codes
   */
  IUPACIFCCPropertyCodes: "IUPP",

  /**
   * JLAC/JSLM, nationwide laboratory code
   */
  JLACJSLMnationwidelaboratorycode: "JC10",

  /**
   * Japanese Chemistry
   */
  JapaneseChemistry: "JC8",

  /**
   * Japanese Image Examination Cache
   */
  JapaneseImageExaminationCache: "JJ1017",

  /**
   * Local general code for a site-defined code system used for a specific set of trading partners.  The 'zzz' SHALL be any printable ASCII string.  Length of the name SHALL not exceed field width, and is subject to local implementation.
   */
  LocalgeneralcodeforasitedefinedcodesystemusedforaspecificsetoftradingpartnersThezzzSHALLbeanyprintableASCIIstringLengthofthenameSHALLnotexceedfieldwidthandissubjecttolocalimplementation:
    "L",

  /**
   * LanguaL
   */
  LanguaL: "LANGUAL",

  /**
   * Local billing code
   */
  Localbillingcode: "LB",

  /**
   * Logical Observation Identifier Names and Codes (LOINC®)
   */
  LogicalObservationIdentifierNamesandCodesLOINC: "LN",

  /**
   * Locus Reference Genomic (LRG)
   */
  LocusReferenceGenomicLRG: "LRG-RefSeq",

  /**
   * Medicaid
   */
  Medicaid: "MCD",

  /**
   * Medicare
   */
  Medicare: "MCR",

  /**
   * Medical Device Communication
   */
  MedicalDeviceCommunication: "MDC",

  /**
   * Medispan Diagnostic Codes
   */
  MedispanDiagnosticCodes: "MDDX",

  /**
   * Medical Economics Drug Codes
   */
  MedicalEconomicsDrugCodes: "MEDC",

  /**
   * NCBI MedGen disease subset
   */
  NCBIMedGendiseasesubset: "Medgen-Dis",

  /**
   * MIME Media Type IANA
   */
  MIMEMediaTypeIANA: "MEDIATYPE",

  /**
   * Medical Dictionary for Drug Regulatory Affairs (MEDDRA)
   */
  MedicalDictionaryforDrugRegulatoryAffairsMEDDRA: "MEDR",

  /**
   * OPS Germany v2010
   */
  OPSGermanyv2010: "OPS2010",

  /**
   * Medical Economics Diagnostic Codes
   */
  MedicalEconomicsDiagnosticCodes: "MEDX",

  /**
   * OPS Germany v2011
   */
  OPSGermanyv2011: "OPS2011",

  /**
   * Medispan GPI
   */
  MedispanGPI: "MGPI",

  /**
   * CDC Vaccine Manufacturer Codes
   */
  CDCVaccineManufacturerCodes: "MVX",

  /**
   * Industry (NAICS)
   */
  IndustryNAICS: "NAICS",

  /**
   * NCPDP code list for data element nnnn [as used in segment sss]
   */
  NCPDPcodelistfordataelementnnnnasusedinsegmentsss: "NCPDPnnnnsss",

  /**
   * NANDA
   */
  NANDA: "NDA",

  /**
   * National drug codes
   */
  Nationaldrugcodes: "NDC",

  /**
   * NDF-RT (Drug Classification)
   */
  NDFRTDrugClassification: "NDFRT",

  /**
   * Nursing Interventions Classification
   */
  NursingInterventionsClassification: "NIC",

  /**
   * Source of Information (Immunization)
   */
  SourceofInformationImmunization: "NIP001",

  /**
   * Substance refusal reason
   */
  Substancerefusalreason: "NIP002",

  /**
   * Vaccination - Contraindications, Precautions, and Immunities
   */
  VaccinationContraindicationsPrecautionsandImmunities: "NIP004",

  /**
   * Vaccinated at location (facility)
   */
  Vaccinatedatlocationfacility: "NIP007",

  /**
   * Vaccine purchased with (Type of funding)
   */
  VaccinepurchasedwithTypeoffunding: "NIP008",

  /**
   * Reported adverse event previously
   */
  Reportedadverseeventpreviously: "NIP009",

  /**
   * VAERS Report type
   */
  VAERSReporttype: "NIP010",

  /**
   * Notifiable Event (Disease/Condition) Code List
   */
  NotifiableEventDiseaseConditionCodeList: "NND",

  /**
   * National Provider Identifier
   */
  NationalProviderIdentifier: "NPI",

  /**
   * National Uniform Billing Committee Code
   */
  NationalUniformBillingCommitteeCode: "NUBC",

  /**
   * Flavors of NULL
   */
  FlavorsofNULL: "NULLFL",

  /**
   * German Procedure Codes
   */
  GermanProcedureCodes: "O301",

  /**
   * OPS Germany 2004
   */
  OPSGermany2004: "O3012004",

  /**
   * OPS Germany 2005
   */
  OPSGermany2005: "O3012005",

  /**
   * Ops Germany 2006
   */
  OpsGermany2006: "O3012006",

  /**
   * Observation Method Code
   */
  ObservationMethodCode: "OBSMETHOD",

  /**
   * Omaha System
   */
  OmahaSystem: "OHA",

  /**
   * OPS Germany v2007
   */
  OPSGermanyv2007: "OPS2007",

  /**
   * OPS Germany v2008
   */
  OPSGermanyv2008: "OPS2008",

  /**
   * OPS Germany v2008
   */
  OPSGermanyv2008: "OPS2009",

  /**
   * Source of Payment Typology
   */
  SourceofPaymentTypology: "PHDSCSOPT",

  /**
   * CDC Public Health Information Network (PHIN) Question
   */
  CDCPublicHealthInformationNetworkPHINQuestion: "PHINQUESTION",

  /**
   * CDC PHLIP Lab result codes that are not covered in SNOMED at the time of this implementation
   */
  CDCPHLIPLabresultcodesthatarenotcoveredinSNOMEDatthetimeofthisimplementation:
    "PLR",

  /**
   * CDC PHLIP Lab test codes, where LOINC concept is too broad or not yet available, especially as needed for ordering and or lab to lab reporting )
   */
  CDCPHLIPLabtestcodeswhereLOINCconceptistoobroadornotyetavailableespeciallyasneededfororderingandorlabtolabreporting:
    "PLT",

  /**
   * ASC X12 Code List nnnn
   */
  ASCX12CodeListnnnn: "X12Dennnn",

  /**
   * POS Codes
   */
  POSCodes: "POS",

  /**
   * Paticipation Mode Code
   */
  PaticipationModeCode: "PRTCPTNMODE",

  /**
   * Read Classification
   */
  ReadClassification: "RC",

  /**
   * NCBI - genomic and chromosome reference sequences
   */
  NCBIgenomicandchromosomereferencesequences: "refSeq-G",

  /**
   * NCBI - protein reference sequence
   */
  NCBIproteinreferencesequence: "RefSeq-P",

  /**
   * NCBI-transcript reference sequences (RefSeq)
   */
  NCBItranscriptreferencesequencesRefSeq: "refSeq-T",

  /**
   * Used initially for contact roles.
   */
  Usedinitiallyforcontactroles: "ROLECLASS",

  /**
   * Participation Mode
   */
  ParticipationMode: "ROLECODE",

  /**
   * Specifies the mode, immediate versus deferred or queued, by which a receiver should communicate its receiver responsibilities.
   */
  Specifiesthemodeimmediateversusdeferredorqueuedbywhichareceivershouldcommunicateitsreceiverresponsibilities:
    "RSPMODE",

  /**
   * RxNorm
   */
  RxNorm: "RXNORM",

  /**
   * RxTerms-Ingredients Subset
   */
  RxTermsIngredientsSubset: "RxT-Ingrd",

  /**
   * SNOMED Clinical Terms
   */
  SNOMEDClinicalTerms: "SCT",

  /**
   * SNOMED Clinical Terms alphanumeric codes
   */
  SNOMEDClinicalTermsalphanumericcodes: "SCT2",

  /**
   * SNOMED- DICOM Microglossary
   */
  SNOMEDDICOMMicroglossary: "SDM",

  /**
   * Industry (SIC)
   */
  IndustrySIC: "SIC",

  /**
   * Systemized Nomenclature of Medicine (SNOMED)
   */
  SystemizedNomenclatureofMedicineSNOMED: "SNM",

  /**
   * SNOMED International
   */
  SNOMEDInternational: "SNM3",

  /**
   * SNOMED topology codes (anatomic sites)
   */
  SNOMEDtopologycodesanatomicsites: "SNT",

  /**
   * Occupation (SOC 2000)
   */
  OccupationSOC2000: "SOC",

  /**
   * Priority (Type) of Visit
   */
  PriorityTypeofVisit: "UB04FL14",

  /**
   * Point of Origin
   */
  PointofOrigin: "UB04FL15",

  /**
   * Patient Discharge Status
   */
  PatientDischargeStatus: "UB04FL17",

  /**
   * Occurrence Code
   */
  OccurrenceCode: "UB04FL31",

  /**
   * Occurrence Span
   */
  OccurrenceSpan: "UB04FL35",

  /**
   * Value Code
   */
  ValueCode: "UB04FL39",

  /**
   * Revenue Code
   */
  RevenueCode: "UB04FL42",

  /**
   * Present on Admission
   */
  PresentonAdmission: "UB04FL67",

  /**
   * UCDS
   */
  UCDS: "UC",

  /**
   * UCUM code set for units of measure(from Regenstrief)
   */
  UCUMcodesetforunitsofmeasurefromRegenstrief: "UCUM",

  /**
   * MDNS
   */
  MDNS: "UMD",

  /**
   * Unified Medical Language
   */
  UnifiedMedicalLanguage: "UML",

  /**
   * Universal Product Code
   */
  UniversalProductCode: "UPC",

  /**
   * UPIN
   */
  UPIN: "UPIN",

  /**
   * U.S. Board on Geographic Names (USGS - GNIS)
   */
  USBoardonGeographicNamesUSGSGNIS: "USGSGNIS",

  /**
   * United States Postal Service
   */
  UnitedStatesPostalService: "USPS",

  /**
   * Clinicians are required to track the Vaccine Information Sheet (VIS) that was shared with the recipient of a vaccination.  This code system contains codes that  identify the document type and the owner of the document.
   */
  CliniciansarerequiredtotracktheVaccineInformationSheetVISthatwassharedwiththerecipientofavaccinationThiscodesystemcontainscodesthatidentifythedocumenttypeandtheownerofthedocument:
    "VIS",

  /**
   * WHO record # drug codes (6 digit)
   */
  WHOrecorddrugcodes6digit: "W1",

  /**
   * WHO record # drug codes (8 digit)
   */
  WHOrecorddrugcodes8digit: "W2",

  /**
   * WHO record # code with ASTM extension
   */
  WHOrecordcodewithASTMextension: "W4",

  /**
   * WHO ATC
   */
  WHOATC: "WC",

  /**
   * ASC X12 Code List nnnn
   */
  ASCX12CodeListnnnn: "X12DEnnnn",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCodingSystemCode =
  typeof Hl7VSCodingSystemCode[keyof typeof Hl7VSCodingSystemCode];
