/**
 * Names of coding systems. Each coding system is assigned a unique identifier, which is generally a short mnemonic derived from the full name of the coding system.
 * http://terminology.hl7.org/ValueSet/v2-0396
 */
export const Hl7VSCodingSystemCode = {
  /**
   * Active
   */
  "General code": "General code",

  /**
   * German Alpha-ID v2013
   */
  ALPHAID2012: "ALPHAID2012",

  /**
   * German Alpha-ID v2013
   */
  ALPHAID2013: "ALPHAID2013",

  /**
   * German Alpha-ID v2014
   */
  ALPHAID2014: "ALPHAID2014",

  /**
   * German Alpha-ID v2015
   */
  ALPHAID2015: "ALPHAID2015",

  /**
   * German Alpha-ID v2016
   */
  ALPHAID2016: "ALPHAID2016",

  /**
   * ICD 10 Germany v2012
   */
  ICD10GM2012: "ICD10GM2012",

  /**
   * ICD 10 Germany v2013
   */
  ICD10GM2013: "ICD10GM2013",

  /**
   * ICD 10 Germany v2014
   */
  ICD10GM2014: "ICD10GM2014",

  /**
   * ICD 10 Germany v2015
   */
  ICD10GM2015: "ICD10GM2015",

  /**
   * ICD 10 Germany v2016
   */
  ICD10GM2016: "ICD10GM2016",

  /**
   * OPS Germany v2012
   */
  OPS2012: "OPS2012",

  /**
   * OPS Germany v2013
   */
  OPS2013: "OPS2013",

  /**
   * OPS Germany v2014
   */
  OPS2014: "OPS2014",

  /**
   * OPS Germany v2015
   */
  OPS2015: "OPS2015",

  /**
   * OPS Germany v2016
   */
  OPS2016: "OPS2016",

  /**
   * Local general code (where z is an alphanumeric character)
   */
  "99zzz or L": "99zzz or L",

  /**
   * Local general code for a site-defined code system used for a specific set of trading partners.  The 'zzz' SHALL be any printable ASCII string.  Length of the name SHALL not exceed field width, and is subject to local implementation.
   */
  "99zzz": "99zzz",

  /**
   * American College of Radiology finding codes
   */
  ACR: "ACR",

  /**
   * Table of HL7 Version 3 ActCode values
   */
  ACTCODE: "ACTCODE",

  /**
     * Used to indicate that the target of the relationship will be a filtered subset of the total related set of targets.
Used when there is a need to limit the number of components to the first, the last, the next, the total, the average or some other filtere
     */
  ACTRELSS: "ACTRELSS",

  /**
   * German Alpha-ID v2006
   */
  ALPHAID2006: "ALPHAID2006",

  /**
   * German Alpha-ID v2007
   */
  ALPHAID2007: "ALPHAID2007",

  /**
   * German Alpha-ID v2008
   */
  ALPHAID2008: "ALPHAID2008",

  /**
   * German Alpha-ID v2009
   */
  ALPHAID2009: "ALPHAID2009",

  /**
   * German Alpha-ID v2010
   */
  ALPHAID2010: "ALPHAID2010",

  /**
   * German Alpha-ID v2011
   */
  ALPHAID2011: "ALPHAID2011",

  /**
   * Australian Medicines Terminology (v2)
   */
  AMTv2: "AMTv2",

  /**
   * HL7 set of units of measure
   */
  "ANS+": "ANS+",

  /**
   * WHO Adverse Reaction Terms
   */
  ART: "ART",

  /**
   * ASTM E1238/ E1467 Universal
   */
  AS4: "AS4",

  /**
   * AS4 Neurophysiology Codes
   */
  AS4E: "AS4E",

  /**
   * American Type Culture Collection
   */
  ATC: "ATC",

  /**
   * CPT-4
   */
  C4: "C4",

  /**
   * CPT-5
   */
  C5: "C5",

  /**
   * College of American Pathologists Electronic Cancer Checklist
   */
  CAPECC: "CAPECC",

  /**
   * Chemical abstract codes
   */
  CAS: "CAS",

  /**
   * DICOM Class Label
   */
  DCL: "DCL",

  /**
   * Clinical Care Classification system
   */
  CCC: "CCC",

  /**
   * CDT-2 Codes
   */
  CD2: "CD2",

  /**
   * CDC Analyte Codes
   */
  CDCA: "CDCA",

  /**
   * DICOM Query Label
   */
  DQL: "DQL",

  /**
   * CDC Emergency Department Acuity
   */
  CDCEDACUITY: "CDCEDACUITY",

  /**
   * VIS Bar Codes (IIS)
   */
  cdcgs1vis: "cdcgs1vis",

  /**
   * Industry CDC Census 2010
   */
  CDCINDUSTRY2010: "CDCINDUSTRY2010",

  /**
   * CDC Methods/Instruments Codes
   */
  CDCM: "CDCM",

  /**
   * CDC National Healthcare Safety Network Codes
   */
  CDCNHSN: "CDCNHSN",

  /**
   * CEN ECG diagnostic codes
   */
  "CE (obsolete)": "CE (obsolete)",

  /**
   * CDC BioSense RT observations (Census) - CDC
   */
  CDCOBS: "CDCOBS",

  /**
   * Occupation CDC Census 2010
   */
  CDCOCCUPATION2010: "CDCOCCUPATION2010",

  /**
   * Occupational Data for Health (ODH)
   */
  CDCODH: "CDCODH",

  /**
   * CDC PHIN Vocabulary Coding System
   */
  CDCPHINVS: "CDCPHINVS",

  /**
   * Race & Ethnicity - CDC
   */
  CDCREC: "CDCREC",

  /**
   * CDC Surveillance
   */
  CDS: "CDS",

  /**
   * CEN ECG diagnostic codes
   */
  CE: "CE",

  /**
   * Cytogenetic (chromosome) location
   */
  "Chrom-Loc": "Chrom-Loc",

  /**
   * ClinVar Variant ID
   */
  "CLINVAR-V": "CLINVAR-V",

  /**
   * CLIP
   */
  CLP: "CLP",

  /**
   * OCE Edit Code
   */
  CMSOEC: "CMSOEC",

  /**
   * OCE Modifier Code
   */
  CMSOMC: "CMSOMC",

  /**
   * FDA Unique Device Identifier
   */
  FDAUDI: "FDAUDI",

  /**
   * COSMIC – Simple variants
   */
  "COSMIC-Smpl": "COSMIC-Smpl",

  /**
   * COSMIC-Structural variants
   */
  "COSMIC-Strc": "COSMIC-Strc",

  /**
   * CPT Modifier Code
   */
  CPTM: "CPTM",

  /**
   * COSTART
   */
  CST: "CST",

  /**
   * CDC Vaccine Codes
   */
  CVX: "CVX",

  /**
   * dbVar-Germline
   */
  "dbVar-GL": "dbVar-GL",

  /**
   * dbVar-Somatic
   */
  "dbVar-som": "dbVar-som",

  /**
   * DICOM Controlled Terminology
   */
  DCM: "DCM",

  /**
   * EUCLIDES
   */
  E: "E",

  /**
   * Euclides  quantity codes
   */
  E5: "E5",

  /**
   * Euclides Lab method codes
   */
  E6: "E6",

  /**
   * Euclides Lab equipment codes
   */
  E7: "E7",

  /**
   * Education Level
   */
  EDLEVEL: "EDLEVEL",

  /**
   * Ensembl genomic reference sequence
   */
  "ensembl-G": "ensembl-G",

  /**
   * Ensembl protein reference sequence
   */
  "Ensembl-P": "Ensembl-P",

  /**
   * Ensembl transcript reference sequence
   */
  "ensembl-T": "ensembl-T",

  /**
   * Entity Code
   */
  ENTITYCODE: "ENTITYCODE",

  /**
   * Entity Handling Code
   */
  ENTITYHDLG: "ENTITYHDLG",

  /**
   * Enzyme Codes
   */
  ENZC: "ENZC",

  /**
   * German Major Diagnostic Codes v2009
   */
  GMDC2009: "GMDC2009",

  /**
   * EPA SRS
   */
  EPASRS: "EPASRS",

  /**
   * GS1 Unique Device Identifier
   */
  GS1UDI: "GS1UDI",

  /**
   * Unique Ingredient Identifier (UNII)
   */
  FDAUNII: "FDAUNII",

  /**
   * First DataBank Drug Codes
   */
  FDDC: "FDDC",

  /**
   * First DataBank Diagnostic Codes
   */
  FDDX: "FDDX",

  /**
   * FDA K10
   */
  FDK: "FDK",

  /**
   * FIPS 5-2 (State)
   */
  FIPS5_2: "FIPS5_2",

  /**
   * HIBCC Unique Device Identifier
   */
  HIBUDI: "HIBUDI",

  /**
   * Populated Places (FIPS 55-3)
   */
  FIPS55_3: "FIPS55_3",

  /**
   * FIPS 6-4 (County)
   */
  FIPS6_4: "FIPS6_4",

  /**
   * G-DRG German DRG Codes v 2004
   */
  GDRG2004: "GDRG2004",

  /**
   * G-DRG German DRG Codes v 2005
   */
  GDRG2005: "GDRG2005",

  /**
   * G-DRG German DRG Codes v 2006
   */
  GDRG2006: "GDRG2006",

  /**
   * G-DRG German DRG Codes v2007
   */
  GDRG2007: "GDRG2007",

  /**
   * G-DRG German DRG Codes v2008
   */
  GDRG2008: "GDRG2008",

  /**
   * G-DRG German DRG Codes v2008
   */
  GDRG2009: "GDRG2009",

  /**
   * German Major Diagnostic Codes v 1004
   */
  GMDC2004: "GMDC2004",

  /**
   * German Major Diagnostic Codes v2005
   */
  GMDC2005: "GMDC2005",

  /**
   * German Major v2006 Diagnostic Codes
   */
  GMDC2006: "GMDC2006",

  /**
   * German Major Diagnostic Codes v2007
   */
  GMDC2007: "GMDC2007",

  /**
   * German Major Diagnostic Codes v2008
   */
  GMDC2008: "GMDC2008",

  /**
   * HIBCC
   */
  HB: "HB",

  /**
   * CMS (formerly HCFA)  Common Procedure Coding System
   */
  HCPCS: "HCPCS",

  /**
   * ISBT 128 codes where nnnn  specifies a specific table within ISBT 128.
   */
  IBTnnnn: "IBTnnnn",

  /**
   * Health Care Provider Taxonomy
   */
  HCPT: "HCPT",

  /**
   * ICCBBA Unique Device Identifier
   */
  ICCUDI: "ICCUDI",

  /**
   * HGNC-symb
   */
  "HGNC-Symb": "HGNC-Symb",

  /**
   * HGVS- Transcript syntax
   */
  "HGVS.c": "HGVS.c",

  /**
   * HGVS- Genomic syntax
   */
  "HGVS.g": "HGVS.g",

  /**
   * HGVS-Protein syntax
   */
  "HGVS.p": "HGVS.p",

  /**
   * Home Health Care
   */
  HHC: "HHC",

  /**
   * ICD 10 Germany v2010
   */
  ICD10GM2010: "ICD10GM2010",

  /**
   * Health Outcomes
   */
  HI: "HI",

  /**
   * ICD 10 Germany v2011
   */
  ICD10GM2011: "ICD10GM2011",

  /**
   * Health Level Seven defined table of codes, where nnnn is the HL7 table number.  The number is four numeric digits as published in HL7 Version 2 chapter 2C.  For example, HL70001.
   */
  HL7nnnn: "HL7nnnn",

  /**
   * Japanese Nationwide Medicine Code
   */
  HOT: "HOT",

  /**
   * CMS (formerly HCFA )Procedure Codes (HCPCS)
   */
  HPC: "HPC",

  /**
   * Healthcare Service Location
   */
  HSLOC: "HSLOC",

  /**
   * ICD-10
   */
  I10: "I10",

  /**
   * International Classification of Diseases, 10th  Revision, Clinical Modification (ICD-10-CM)
   */
  I10C: "I10C",

  /**
   * ICD 10 Germany 2004
   */
  I10G2004: "I10G2004",

  /**
   * ICD 10 Germany 2005
   */
  I10G2005: "I10G2005",

  /**
   * ISO Defined Codes where nnnn is the ISO table number
   */
  "ISOnnnn (deprecated)": "ISOnnnn (deprecated)",

  /**
   * ICD 10 Germany 2006
   */
  I10G2006: "I10G2006",

  /**
   * ISO 2955.83 (units of measure) with HL7 extensions
   */
  ISO: "ISO",

  /**
   * International Classification of Diseases, 10th  Revision, Procedure Coding System (ICD-10-PCS)
   */
  I10P: "I10P",

  /**
   * ICD-10 Place of Occurrence
   */
  I10P0: "I10P0",

  /**
   * ICD9
   */
  I9: "I9",

  /**
   * International Classification of Diseases, 9th  Revision, Clinical Modification (ICD-9-CM)
   */
  I9C: "I9C",

  /**
   * ICD-9CM Diagnosis codes
   */
  I9CDX: "I9CDX",

  /**
   * ICD-9CM Procedure codes
   */
  I9CP: "I9CP",

  /**
   * ISBT
   */
  IBT: "IBT",

  /**
   * ISBT 128 Standard transfusion/transplantation data items
   */
  IBT0001: "IBT0001",

  /**
   * ICHPPC-2
   */
  IC2: "IC2",

  /**
   * ICD-10 Australian modification
   */
  ICD10AM: "ICD10AM",

  /**
   * ICD-10 Canada
   */
  ICD10CA: "ICD10CA",

  /**
   * ICD 10 Germany v2007
   */
  ICD10GM2007: "ICD10GM2007",

  /**
   * ICD 10 Germany v2008
   */
  ICD10GM2008: "ICD10GM2008",

  /**
   * ICD 10 Germany v2009
   */
  ICD10GM2009: "ICD10GM2009",

  /**
   * International Classification of Diseases for Oncology
   */
  ICDO: "ICDO",

  /**
   * International Classification of Disease for Oncology Second Edition
   */
  ICDO2: "ICDO2",

  /**
   * International Classification of Disease for Oncology Third Edition
   */
  ICDO3: "ICDO3",

  /**
   * International Classification of Functioning, Disability and Health (ICF)
   */
  ICF: "ICF",

  /**
   * ICCS
   */
  ICS: "ICS",

  /**
   * International Classification of Sleep Disorders
   */
  ICSD: "ICSD",

  /**
   * IHE Laboratory Analytical Workflow (LAW) Profile Codes.
   */
  IHELAW: "IHELAW",

  /**
   * International System for Human Cytogenetic Nomenclature (ISCN)
   */
  ISCN: "ISCN",

  /**
   * ISO 2955.83 (units of measure) with HL7 extensions
   */
  "ISO+": "ISO+",

  /**
   * ISO 3166-1 Country Codes
   */
  ISO3166_1: "ISO3166_1",

  /**
   * ISO 3166-2 Country subdivisions
   */
  ISO3166_2: "ISO3166_2",

  /**
   * ISO4217 Currency Codes
   */
  ISO4217: "ISO4217",

  /**
   * ISO 639 Language
   */
  ISO639: "ISO639",

  /**
   * ISO Defined Codes where nnnn is the ISO table number. (deprecated)
   */
  ISOnnnn: "ISOnnnn",

  /**
   * Integrated Taxonomic Information System
   */
  ITIS: "ITIS",

  /**
   * IUPAC/IFCC Component Codes
   */
  IUPC: "IUPC",

  /**
   * IUPAC/IFCC Property Codes
   */
  IUPP: "IUPP",

  /**
   * JLAC/JSLM, nationwide laboratory code
   */
  JC10: "JC10",

  /**
   * Japanese Chemistry
   */
  JC8: "JC8",

  /**
   * Japanese Image Examination Cache
   */
  JJ1017: "JJ1017",

  /**
   * Local general code for a site-defined code system used for a specific set of trading partners.  The 'zzz' SHALL be any printable ASCII string.  Length of the name SHALL not exceed field width, and is subject to local implementation.
   */
  L: "L",

  /**
   * LanguaL
   */
  LANGUAL: "LANGUAL",

  /**
   * Local billing code
   */
  LB: "LB",

  /**
   * Logical Observation Identifier Names and Codes (LOINC®)
   */
  LN: "LN",

  /**
   * Locus Reference Genomic (LRG)
   */
  "LRG-RefSeq": "LRG-RefSeq",

  /**
   * Medicaid
   */
  MCD: "MCD",

  /**
   * Medicare
   */
  MCR: "MCR",

  /**
   * Medical Device Communication
   */
  MDC: "MDC",

  /**
   * Medispan Diagnostic Codes
   */
  MDDX: "MDDX",

  /**
   * Medical Economics Drug Codes
   */
  MEDC: "MEDC",

  /**
   * NCBI MedGen disease subset
   */
  "Medgen-Dis": "Medgen-Dis",

  /**
   * MIME Media Type IANA
   */
  MEDIATYPE: "MEDIATYPE",

  /**
   * Medical Dictionary for Drug Regulatory Affairs (MEDDRA)
   */
  MEDR: "MEDR",

  /**
   * OPS Germany v2010
   */
  OPS2010: "OPS2010",

  /**
   * Medical Economics Diagnostic Codes
   */
  MEDX: "MEDX",

  /**
   * OPS Germany v2011
   */
  OPS2011: "OPS2011",

  /**
   * Medispan GPI
   */
  MGPI: "MGPI",

  /**
   * CDC Vaccine Manufacturer Codes
   */
  MVX: "MVX",

  /**
   * Industry (NAICS)
   */
  NAICS: "NAICS",

  /**
   * NCPDP code list for data element nnnn [as used in segment sss]
   */
  NCPDPnnnnsss: "NCPDPnnnnsss",

  /**
   * NANDA
   */
  NDA: "NDA",

  /**
   * National drug codes
   */
  NDC: "NDC",

  /**
   * NDF-RT (Drug Classification)
   */
  NDFRT: "NDFRT",

  /**
   * Nursing Interventions Classification
   */
  NIC: "NIC",

  /**
   * Source of Information (Immunization)
   */
  NIP001: "NIP001",

  /**
   * Substance refusal reason
   */
  NIP002: "NIP002",

  /**
   * Vaccination - Contraindications, Precautions, and Immunities
   */
  NIP004: "NIP004",

  /**
   * Vaccinated at location (facility)
   */
  NIP007: "NIP007",

  /**
   * Vaccine purchased with (Type of funding)
   */
  NIP008: "NIP008",

  /**
   * Reported adverse event previously
   */
  NIP009: "NIP009",

  /**
   * VAERS Report type
   */
  NIP010: "NIP010",

  /**
   * Notifiable Event (Disease/Condition) Code List
   */
  NND: "NND",

  /**
   * National Provider Identifier
   */
  NPI: "NPI",

  /**
   * National Uniform Billing Committee Code
   */
  NUBC: "NUBC",

  /**
   * Flavors of NULL
   */
  NULLFL: "NULLFL",

  /**
   * German Procedure Codes
   */
  O301: "O301",

  /**
   * OPS Germany 2004
   */
  O3012004: "O3012004",

  /**
   * OPS Germany 2005
   */
  O3012005: "O3012005",

  /**
   * Ops Germany 2006
   */
  O3012006: "O3012006",

  /**
   * Observation Method Code
   */
  OBSMETHOD: "OBSMETHOD",

  /**
   * Omaha System
   */
  OHA: "OHA",

  /**
   * OPS Germany v2007
   */
  OPS2007: "OPS2007",

  /**
   * OPS Germany v2008
   */
  OPS2008: "OPS2008",

  /**
   * OPS Germany v2008
   */
  OPS2009: "OPS2009",

  /**
   * Source of Payment Typology
   */
  PHDSCSOPT: "PHDSCSOPT",

  /**
   * CDC Public Health Information Network (PHIN) Question
   */
  PHINQUESTION: "PHINQUESTION",

  /**
   * CDC PHLIP Lab result codes that are not covered in SNOMED at the time of this implementation
   */
  PLR: "PLR",

  /**
   * CDC PHLIP Lab test codes, where LOINC concept is too broad or not yet available, especially as needed for ordering and or lab to lab reporting )
   */
  PLT: "PLT",

  /**
   * ASC X12 Code List nnnn
   */
  X12Dennnn: "X12Dennnn",

  /**
   * POS Codes
   */
  POS: "POS",

  /**
   * Paticipation Mode Code
   */
  PRTCPTNMODE: "PRTCPTNMODE",

  /**
   * Read Classification
   */
  RC: "RC",

  /**
   * NCBI - genomic and chromosome reference sequences
   */
  "refSeq-G": "refSeq-G",

  /**
   * NCBI - protein reference sequence
   */
  "RefSeq-P": "RefSeq-P",

  /**
   * NCBI-transcript reference sequences (RefSeq)
   */
  "refSeq-T": "refSeq-T",

  /**
   * Used initially for contact roles.
   */
  ROLECLASS: "ROLECLASS",

  /**
   * Participation Mode
   */
  ROLECODE: "ROLECODE",

  /**
   * Specifies the mode, immediate versus deferred or queued, by which a receiver should communicate its receiver responsibilities.
   */
  RSPMODE: "RSPMODE",

  /**
   * RxNorm
   */
  RXNORM: "RXNORM",

  /**
   * RxTerms-Ingredients Subset
   */
  "RxT-Ingrd": "RxT-Ingrd",

  /**
   * SNOMED Clinical Terms
   */
  SCT: "SCT",

  /**
   * SNOMED Clinical Terms alphanumeric codes
   */
  SCT2: "SCT2",

  /**
   * SNOMED- DICOM Microglossary
   */
  SDM: "SDM",

  /**
   * Industry (SIC)
   */
  SIC: "SIC",

  /**
   * Systemized Nomenclature of Medicine (SNOMED)
   */
  SNM: "SNM",

  /**
   * SNOMED International
   */
  SNM3: "SNM3",

  /**
   * SNOMED topology codes (anatomic sites)
   */
  SNT: "SNT",

  /**
   * Occupation (SOC 2000)
   */
  SOC: "SOC",

  /**
   * Priority (Type) of Visit
   */
  UB04FL14: "UB04FL14",

  /**
   * Point of Origin
   */
  UB04FL15: "UB04FL15",

  /**
   * Patient Discharge Status
   */
  UB04FL17: "UB04FL17",

  /**
   * Occurrence Code
   */
  UB04FL31: "UB04FL31",

  /**
   * Occurrence Span
   */
  UB04FL35: "UB04FL35",

  /**
   * Value Code
   */
  UB04FL39: "UB04FL39",

  /**
   * Revenue Code
   */
  UB04FL42: "UB04FL42",

  /**
   * Present on Admission
   */
  UB04FL67: "UB04FL67",

  /**
   * UCDS
   */
  UC: "UC",

  /**
   * UCUM code set for units of measure(from Regenstrief)
   */
  UCUM: "UCUM",

  /**
   * MDNS
   */
  UMD: "UMD",

  /**
   * Unified Medical Language
   */
  UML: "UML",

  /**
   * Universal Product Code
   */
  UPC: "UPC",

  /**
   * UPIN
   */
  UPIN: "UPIN",

  /**
   * U.S. Board on Geographic Names (USGS - GNIS)
   */
  USGSGNIS: "USGSGNIS",

  /**
   * United States Postal Service
   */
  USPS: "USPS",

  /**
   * Clinicians are required to track the Vaccine Information Sheet (VIS) that was shared with the recipient of a vaccination.  This code system contains codes that  identify the document type and the owner of the document.
   */
  VIS: "VIS",

  /**
   * WHO record # drug codes (6 digit)
   */
  W1: "W1",

  /**
   * WHO record # drug codes (8 digit)
   */
  W2: "W2",

  /**
   * WHO record # code with ASTM extension
   */
  W4: "W4",

  /**
   * WHO ATC
   */
  WC: "WC",

  /**
   * ASC X12 Code List nnnn
   */
  X12DEnnnn: "X12DEnnnn",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCodingSystemCode =
  typeof Hl7VSCodingSystemCode[keyof typeof Hl7VSCodingSystemCode];
