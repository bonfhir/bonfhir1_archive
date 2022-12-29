/**
 * A code that provides additional detail about the means or technique used to ascertain the observation.

*Examples:* Blood pressure measurement method: arterial puncture vs. sphygmomanometer (Riva-Rocci), sitting vs. supine position, etc.

*Constraints:* In all observations the method is already partially specified by the Act.code. In this case, the methodCode NEED NOT be used at all. The methodCode MAY still be used to identify this method more clearly in addition to what is implied from the Act.code. However, an information consumer system or process SHOULD NOT depend on this methodCode information for method detail that is implied by the Act.code.

If the methodCode is used to express method detail that is also implied by the Act.code, the methodCode MUST NOT be in conflict with the implied method of the Act.code.
 * http://terminology.hl7.org/ValueSet/v3-ObservationMethod
 */
export const ObservationMethodCode = {
  /**
   * Complement fixation
   */
  Complementfixation: "0001",

  /**
   * Computed axial tomography
   */
  Computedaxialtomography: "0002",

  /**
   * HLAR agar test
   */
  HLARagartest: "0003",

  /**
   * Macroscopic observation
   */
  Macroscopicobservation: "0004",

  /**
   * Magnetic resonance
   */
  Magneticresonance: "0005",

  /**
   * Morphometry
   */
  Morphometry: "0006",

  /**
   * Positron emission tomography
   */
  Positronemissiontomography: "0007",

  /**
   * SAMHSA confirmation
   */
  SAMHSAconfirmation: "0008",

  /**
   * SAMHSA screening
   */
  SAMHSAscreening: "0009",

  /**
   * Serum Neutralization
   */
  SerumNeutralization: "0010",

  /**
   * Titration
   */
  Titration: "0011",

  /**
   * Ultrasound
   */
  Ultrasound: "0012",

  /**
   * X-ray crystallography
   */
  Xraycrystallography: "0013",

  /**
   * Agglutination
   */
  Agglutination: "0014",

  /**
   * Buffered acidified plate agglutination
   */
  Bufferedacidifiedplateagglutination: "0015",

  /**
   * Card agglutination
   */
  Cardagglutination: "0016",

  /**
   * Hemagglutination
   */
  Hemagglutination: "0017",

  /**
   * Hemagglutination inhibition
   */
  Hemagglutinationinhibition: "0018",

  /**
   * Latex agglutination
   */
  Latexagglutination: "0019",

  /**
   * Plate agglutination
   */
  Plateagglutination: "0020",

  /**
   * Rapid agglutination
   */
  Rapidagglutination: "0021",

  /**
   * RBC agglutination
   */
  RBCagglutination: "0022",

  /**
   * Rivanol agglutination
   */
  Rivanolagglutination: "0023",

  /**
   * Tube agglutination
   */
  Tubeagglutination: "0024",

  /**
   * Bioassay
   */
  Bioassay: "0025",

  /**
   * Animal Inoculation
   */
  AnimalInoculation: "0026",

  /**
   * Cytotoxicity
   */
  Cytotoxicity: "0027",

  /**
   * Embryo infective dose 50
   */
  Embryoinfectivedose50: "0028",

  /**
   * Embryo lethal dose 50
   */
  Embryolethaldose50: "0029",

  /**
   * Mouse intercerebral inoculation
   */
  Mouseintercerebralinoculation: "0030",

  /**
   * Bioassay, qualitative
   */
  Bioassayqualitative: "0031",

  /**
   * Bioassay, quantitative
   */
  Bioassayquantitative: "0032",

  /**
   * Chemical method
   */
  Chemicalmethod: "0033",

  /**
   * Differential light absorption chemical test
   */
  Differentiallightabsorptionchemicaltest: "0034",

  /**
   * Dipstick
   */
  Dipstick: "0035",

  /**
   * Dipstick colorimetric laboratory test
   */
  Dipstickcolorimetriclaboratorytest: "0036",

  /**
   * Test strip
   */
  Teststrip: "0037",

  /**
   * Chromatography
   */
  Chromatography: "0038",

  /**
   * Affinity chromatography
   */
  Affinitychromatography: "0039",

  /**
   * Gas liquid chromatography
   */
  Gasliquidchromatography: "0040",

  /**
   * High performance liquid chromatography
   */
  Highperformanceliquidchromatography: "0041",

  /**
   * Liquid Chromatography
   */
  LiquidChromatography: "0042",

  /**
   * Protein A affinity chromatography
   */
  ProteinAaffinitychromatography: "0043",

  /**
   * Coagulation
   */
  Coagulation: "0044",

  /**
   * Tilt tube coagulation time
   */
  Tilttubecoagulationtime: "0045",

  /**
   * Tilt tube reptilase induced coagulation
   */
  Tilttubereptilaseinducedcoagulation: "0046",

  /**
   * Automated count
   */
  Automatedcount: "0047",

  /**
   * Manual cell count
   */
  Manualcellcount: "0048",

  /**
   * Platelet count, Rees-Ecker
   */
  PlateletcountReesEcker: "0049",

  /**
   * Aerobic Culture
   */
  AerobicCulture: "0050",

  /**
   * Anaerobic Culture
   */
  AnaerobicCulture: "0051",

  /**
   * Chicken embryo culture
   */
  Chickenembryoculture: "0052",

  /**
   * Delayed secondary enrichment
   */
  Delayedsecondaryenrichment: "0053",

  /**
   * Microaerophilic Culture
   */
  MicroaerophilicCulture: "0054",

  /**
   * Quantitative microbial culture, cup
   */
  Quantitativemicrobialculturecup: "0055",

  /**
   * Quantitative microbial culture, droplet
   */
  Quantitativemicrobialculturedroplet: "0056",

  /**
   * Quantitative microbial culture, filter paper
   */
  Quantitativemicrobialculturefilterpaper: "0057",

  /**
   * Quantitative microbial culture, pad culture
   */
  Quantitativemicrobialculturepadculture: "0058",

  /**
   * Quantitative microbial culture, pour plate
   */
  Quantitativemicrobialculturepourplate: "0059",

  /**
   * Quantitative microbial culture, surface streak
   */
  Quantitativemicrobialculturesurfacestreak: "0060",

  /**
   * Somatic Cell culture
   */
  SomaticCellculture: "0061",

  /**
   * Agar diffusion
   */
  Agardiffusion: "0062",

  /**
   * Agar Gel Immunodiffusion
   */
  AgarGelImmunodiffusion: "0063",

  /**
   * Electrophoresis
   */
  Electrophoresis: "0064",

  /**
   * Agaorse gel electrophoresis
   */
  Agaorsegelelectrophoresis: "0065",

  /**
   * Electrophoresis, citrate agar
   */
  Electrophoresiscitrateagar: "0066",

  /**
   * Immunoelectrophoresis
   */
  Immunoelectrophoresis: "0067",

  /**
   * Polyacrylamide gel electrophoresis
   */
  Polyacrylamidegelelectrophoresis: "0068",

  /**
   * Starch gel electrophoresis
   */
  Starchgelelectrophoresis: "0069",

  /**
   * ELISA
   */
  ELISA: "0070",

  /**
   * ELISA, antigen capture
   */
  ELISAantigencapture: "0071",

  /**
   * ELISA, avidin biotin peroxidase complex
   */
  ELISAavidinbiotinperoxidasecomplex: "0072",

  /**
   * Kinetic ELISA
   */
  KineticELISA: "0073",

  /**
   * ELISA, peroxidase-antiperoxidase
   */
  ELISAperoxidaseantiperoxidase: "0074",

  /**
   * API 20 Strep
   */
  API20Strep: "0075",

  /**
   * API 20A
   */
  API20A: "0076",

  /**
   * API 20C AUX
   */
  API20CAUX: "0077",

  /**
   * API 20E
   */
  API20E: "0078",

  /**
   * API 20NE
   */
  API20NE: "0079",

  /**
   * API 50 CH
   */
  API50CH: "0080",

  /**
   * API An-IDENT
   */
  APIAnIDENT: "0081",

  /**
   * API Coryne
   */
  APICoryne: "0082",

  /**
   * API Rapid 20E
   */
  APIRapid20E: "0083",

  /**
   * API Staph
   */
  APIStaph: "0084",

  /**
   * API ZYM
   */
  APIZYM: "0085",

  /**
   * Bacterial identification
   */
  Bacterialidentification: "0086",

  /**
   * mini VIDAS
   */
  miniVIDAS: "0087",

  /**
   * Phage susceptibility typing
   */
  Phagesusceptibilitytyping: "0088",

  /**
   * Quad-FERM+
   */
  QuadFERM: "0089",

  /**
   * RAPIDEC Staph
   */
  RAPIDECStaph: "0090",

  /**
   * Staphaurex
   */
  Staphaurex: "0091",

  /**
   * VIDAS
   */
  VIDAS: "0092",

  /**
   * Vitek
   */
  Vitek: "0093",

  /**
   * VITEK 2
   */
  VITEK2: "0094",

  /**
   * Immune stain
   */
  Immunestain: "0095",

  /**
   * Immunofluorescent antibody, direct
   */
  Immunofluorescentantibodydirect: "0096",

  /**
   * Immunofluorescent antibody, indirect
   */
  Immunofluorescentantibodyindirect: "0097",

  /**
   * Immunoperoxidase, Avidin-Biotin Complex
   */
  ImmunoperoxidaseAvidinBiotinComplex: "0098",

  /**
   * Immunoperoxidase, Peroxidase anti-peroxidase complex
   */
  ImmunoperoxidasePeroxidaseantiperoxidasecomplex: "0099",

  /**
   * Immunoperoxidase, Protein A-peroxidase complex
   */
  ImmunoperoxidaseProteinAperoxidasecomplex: "0100",

  /**
   * Immunoassay
   */
  Immunoassay: "0101",

  /**
   * Immunoassay, qualitative, multiple step
   */
  Immunoassayqualitativemultiplestep: "0102",

  /**
   * Immunoassay, qualitative, single step
   */
  Immunoassayqualitativesinglestep: "0103",

  /**
   * Radioimmunoassay
   */
  Radioimmunoassay: "0104",

  /**
   * Immunoassay, semi-quantitative, multiple step
   */
  Immunoassaysemiquantitativemultiplestep: "0105",

  /**
   * Immunoassay, semi-quantitative, single step
   */
  Immunoassaysemiquantitativesinglestep: "0106",

  /**
   * Microscopy
   */
  Microscopy: "0107",

  /**
   * Darkfield microscopy
   */
  Darkfieldmicroscopy: "0108",

  /**
   * Electron microscopy
   */
  Electronmicroscopy: "0109",

  /**
   * Electron microscopy tomography
   */
  Electronmicroscopytomography: "0110",

  /**
   * Electron microscopy, negative stain
   */
  Electronmicroscopynegativestain: "0111",

  /**
   * Electron microscopy, thick section
   */
  Electronmicroscopythicksection: "0112",

  /**
   * Electron microscopy, thin section
   */
  Electronmicroscopythinsection: "0113",

  /**
   * Microscopy, Light
   */
  MicroscopyLight: "0114",

  /**
   * Polarizing light microscopy
   */
  Polarizinglightmicroscopy: "0115",

  /**
   * Scanning electron microscopy
   */
  Scanningelectronmicroscopy: "0116",

  /**
   * Transmission electron microscopy
   */
  Transmissionelectronmicroscopy: "0117",

  /**
   * Transparent tape direct examination
   */
  Transparenttapedirectexamination: "0118",

  /**
   * 3 Self-Sustaining Sequence Replication
   */
  ThreeSelfSustainingSequenceReplication: "0119",

  /**
   * Branched Chain DNA
   */
  BranchedChainDNA: "0120",

  /**
   * Hybridization Protection Assay
   */
  HybridizationProtectionAssay: "0121",

  /**
   * Immune blot
   */
  Immuneblot: "0122",

  /**
   * In-situ hybridization
   */
  Insituhybridization: "0123",

  /**
   * Ligase Chain Reaction
   */
  LigaseChainReaction: "0124",

  /**
   * Ligation Activated Transcription
   */
  LigationActivatedTranscription: "0125",

  /**
   * Nucleic Acid Probe
   */
  NucleicAcidProbe: "0126",

  /**
   * Nucleic acid probe
   */
  Nucleicacidprobe: "0127",

  /**
   * Nucleic acid probe with amplification
   */
  Nucleicacidprobewithamplification: "0128",

  /**
   * Nucleic acid probe with target amplification
   */
  Nucleicacidprobewithtargetamplification: "0129",

  /**
   * Nucleic acid reverse transcription
   */
  Nucleicacidreversetranscription: "0130",

  /**
   * Nucleic Acid Sequence Based Analysis
   */
  NucleicAcidSequenceBasedAnalysis: "0131",

  /**
   * Polymerase chain reaction
   */
  Polymerasechainreaction: "0132",

  /**
   * Q-Beta Replicase or probe amplification category method
   */
  QBetaReplicaseorprobeamplificationcategorymethod: "0133",

  /**
   * Restriction Fragment Length Polymorphism
   */
  RestrictionFragmentLengthPolymorphism: "0134",

  /**
   * Southern Blot
   */
  SouthernBlot: "0135",

  /**
   * Strand Displacement Amplification
   */
  StrandDisplacementAmplification: "0136",

  /**
   * Transcription Mediated Amplification
   */
  TranscriptionMediatedAmplification: "0137",

  /**
   * Western Blot
   */
  WesternBlot: "0138",

  /**
   * Flocculation
   */
  Flocculation: "0139",

  /**
   * Immune precipitation
   */
  Immuneprecipitation: "0140",

  /**
   * Milk ring test
   */
  Milkringtest: "0141",

  /**
   * Precipitin
   */
  Precipitin: "0142",

  /**
   * Acid fast stain
   */
  Acidfaststain: "0143",

  /**
   * Acid fast stain, fluorochrome
   */
  Acidfaststainfluorochrome: "0144",

  /**
   * Acid fast stain, Kinyoun's cold carbolfuchsin
   */
  AcidfaststainKinyounscoldcarbolfuchsin: "0145",

  /**
   * Acid fast stain, Ziehl-Neelsen
   */
  AcidfaststainZiehlNeelsen: "0146",

  /**
   * Acid phosphatase stain
   */
  Acidphosphatasestain: "0147",

  /**
   * Acridine orange stain
   */
  Acridineorangestain: "0148",

  /**
   * Active brilliant orange KH stain
   */
  ActivebrilliantorangeKHstain: "0149",

  /**
   * Alazarin red S stain
   */
  AlazarinredSstain: "0150",

  /**
   * Alcian blue stain
   */
  Alcianbluestain: "0151",

  /**
   * Alcian blue with Periodic acid Schiff stain
   */
  AlcianbluewithPeriodicacidSchiffstain: "0152",

  /**
   * Argentaffin stain
   */
  Argentaffinstain: "0153",

  /**
   * Argentaffin silver stain
   */
  Argentaffinsilverstain: "0154",

  /**
   * Azure-eosin stain
   */
  Azureeosinstain: "0155",

  /**
   * Basic Fuschin stain
   */
  BasicFuschinstain: "0156",

  /**
   * Bennhold stain
   */
  Bennholdstain: "0157",

  /**
   * Bennhold's Congo red stain
   */
  BennholdsCongoredstain: "0158",

  /**
   * Bielschowsky stain
   */
  Bielschowskystain: "0159",

  /**
   * Bielschowsky's silver stain
   */
  Bielschowskyssilverstain: "0160",

  /**
   * Bleach stain
   */
  Bleachstain: "0161",

  /**
   * Bodian stain
   */
  Bodianstain: "0162",

  /**
   * Brown-Brenn stain
   */
  BrownBrennstain: "0163",

  /**
   * Butyrate-esterase stain
   */
  Butyrateesterasestain: "0164",

  /**
   * Calcofluor white fluorescent stain
   */
  Calcofluorwhitefluorescentstain: "0165",

  /**
   * Carbol-fuchsin stain
   */
  Carbolfuchsinstain: "0166",

  /**
   * Carmine stain
   */
  Carminestain: "0167",

  /**
   * Churukian-Schenk stain
   */
  ChurukianSchenkstain: "0168",

  /**
   * Congo red stain
   */
  Congoredstain: "0169",

  /**
   * Cresyl echt violet stain
   */
  Cresylechtvioletstain: "0170",

  /**
   * Crystal violet stain
   */
  Crystalvioletstain: "0171",

  /**
   * De Galantha stain
   */
  DeGalanthastain: "0172",

  /**
   * Dieterle silver impregnation stain
   */
  Dieterlesilverimpregnationstain: "0173",

  /**
   * Fite-Farco stain
   */
  FiteFarcostain: "0174",

  /**
   * Fontana-Masson silver stain
   */
  FontanaMassonsilverstain: "0175",

  /**
   * Fouchet stain
   */
  Fouchetstain: "0176",

  /**
   * Gomori stain
   */
  Gomoristain: "0177",

  /**
   * Gomori methenamine silver stain
   */
  Gomorimethenaminesilverstain: "0178",

  /**
   * Gomori-Wheatly trichrome stain
   */
  GomoriWheatlytrichromestain: "0179",

  /**
   * Gridley stain
   */
  Gridleystain: "0180",

  /**
   * Grimelius silver stain
   */
  Grimeliussilverstain: "0181",

  /**
   * Grocott stain
   */
  Grocottstain: "0182",

  /**
   * Grocott methenamine silver stain
   */
  Grocottmethenaminesilverstain: "0183",

  /**
   * Hale's colloidal ferric oxide stain
   */
  Halescolloidalferricoxidestain: "0184",

  /**
   * Hale's colloidal iron stain
   */
  Halescolloidalironstain: "0185",

  /**
   * Hansel stain
   */
  Hanselstain: "0186",

  /**
   * Harris regressive hematoxylin and eosin stain
   */
  Harrisregressivehematoxylinandeosinstain: "0187",

  /**
   * Hematoxylin and eosin stain
   */
  Hematoxylinandeosinstain: "0188",

  /**
   * Highman stain
   */
  Highmanstain: "0189",

  /**
   * Holzer stain
   */
  Holzerstain: "0190",

  /**
   * Iron hematoxylin stain
   */
  Ironhematoxylinstain: "0191",

  /**
   * Jones stain
   */
  Jonesstain: "0192",

  /**
   * Jones methenamine silver stain
   */
  Jonesmethenaminesilverstain: "0193",

  /**
   * Kossa stain
   */
  Kossastain: "0194",

  /**
   * Lawson-Van Gieson stain
   */
  LawsonVanGiesonstain: "0195",

  /**
   * Loeffler methylene blue stain
   */
  Loefflermethylenebluestain: "0196",

  /**
   * Luxol fast blue with cresyl violet stain
   */
  Luxolfastbluewithcresylvioletstain: "0197",

  /**
   * Luxol fast blue with Periodic acid-Schiff stain
   */
  LuxolfastbluewithPeriodicacidSchiffstain: "0198",

  /**
   * MacNeal's tetrachrome blood stain
   */
  MacNealstetrachromebloodstain: "0199",

  /**
   * Mallory-Heidenhain stain
   */
  MalloryHeidenhainstain: "0200",

  /**
   * Masson trichrome stain
   */
  Massontrichromestain: "0201",

  /**
   * Mayer mucicarmine stain
   */
  Mayermucicarminestain: "0202",

  /**
   * Mayers progressive hematoxylin and eosin stain
   */
  Mayersprogressivehematoxylinandeosinstain: "0203",

  /**
   * May-Grunwald Giemsa stain
   */
  MayGrunwaldGiemsastain: "0204",

  /**
   * Methyl green stain
   */
  Methylgreenstain: "0205",

  /**
   * Methyl green pyronin stain
   */
  Methylgreenpyroninstain: "0206",

  /**
   * Modified Gomori-Wheatly trichrome stain
   */
  ModifiedGomoriWheatlytrichromestain: "0207",

  /**
   * Modified Masson trichrome stain
   */
  ModifiedMassontrichromestain: "0208",

  /**
   * Modified trichrome stain
   */
  Modifiedtrichromestain: "0209",

  /**
   * Movat pentachrome stain
   */
  Movatpentachromestain: "0210",

  /**
   * Mucicarmine stain
   */
  Mucicarminestain: "0211",

  /**
   * Neutral red stain
   */
  Neutralredstain: "0212",

  /**
   * Night blue stain
   */
  Nightbluestain: "0213",

  /**
   * Non-specific esterase stain
   */
  Nonspecificesterasestain: "0214",

  /**
   * Oil red-O stain
   */
  OilredOstain: "0215",

  /**
   * Orcein stain
   */
  Orceinstain: "0216",

  /**
   * Perls' stain
   */
  Perlsstain: "0217",

  /**
   * Phosphotungstic acid-hematoxylin stain
   */
  Phosphotungsticacidhematoxylinstain: "0218",

  /**
   * Potassium ferrocyanide stain
   */
  Potassiumferrocyanidestain: "0219",

  /**
   * Prussian blue stain
   */
  Prussianbluestain: "0220",

  /**
   * Putchler modified Bennhold stain
   */
  PutchlermodifiedBennholdstain: "0221",

  /**
   * Quinacrine fluorescent stain
   */
  Quinacrinefluorescentstain: "0222",

  /**
   * Reticulin stain
   */
  Reticulinstain: "0223",

  /**
   * Rhodamine stain
   */
  Rhodaminestain: "0224",

  /**
   * Safranin stain
   */
  Safraninstain: "0225",

  /**
   * Schmorl stain
   */
  Schmorlstain: "0226",

  /**
   * Seiver-Munger stain
   */
  SeiverMungerstain: "0227",

  /**
   * Silver stain
   */
  Silverstain: "0228",

  /**
   * Specific esterase stain
   */
  Specificesterasestain: "0229",

  /**
   * Steiner silver stain
   */
  Steinersilverstain: "0230",

  /**
   * Sudan III stain
   */
  SudanIIIstain: "0231",

  /**
   * Sudan IVI stain
   */
  SudanIVIstain: "0232",

  /**
   * Sulfated alcian blue stain
   */
  Sulfatedalcianbluestain: "0233",

  /**
   * Supravital stain
   */
  Supravitalstain: "0234",

  /**
   * Thioflavine-S stain
   */
  ThioflavineSstain: "0235",

  /**
   * Three micron Giemsa stain
   */
  ThreemicronGiemsastain: "0236",

  /**
   * Vassar-Culling stain
   */
  VassarCullingstain: "0237",

  /**
   * Vital Stain
   */
  VitalStain: "0238",

  /**
   * von Kossa stain
   */
  vonKossastain: "0239",

  /**
   * Antibiotic sensitivity, disk
   */
  Antibioticsensitivitydisk: "0240",

  /**
   * BACTEC susceptibility test
   */
  BACTECsusceptibilitytest: "0241",

  /**
   * Disk dilution
   */
  Diskdilution: "0242",

  /**
   * Minimum bactericidal concentration test, macrodilution
   */
  Minimumbactericidalconcentrationtestmacrodilution: "0243",

  /**
   * Minimum bactericidal concentration test, microdilution
   */
  Minimumbactericidalconcentrationtestmicrodilution: "0244",

  /**
   * Minimum Inhibitory Concentration, macrodilution
   */
  MinimumInhibitoryConcentrationmacrodilution: "0245",

  /**
   * Minimum Inhibitory Concentration, microdilution
   */
  MinimumInhibitoryConcentrationmicrodilution: "0246",

  /**
   * Turbidometric
   */
  Turbidometric: "0247",

  /**
   * Refractometric
   */
  Refractometric: "0248",

  /**
   * Thin layer chromatography (TLC)
   */
  ThinlayerchromatographyTLC: "0249",

  /**
   * EMIT
   */
  EMIT: "0250",

  /**
   * Flow cytometry (FC)
   */
  FlowcytometryFC: "0251",

  /**
   * Radial immunodiffusion (RID)
   */
  RadialimmunodiffusionRID: "0252",

  /**
   * Fluorescence polarization immunoassay (FPIA)
   */
  FluorescencepolarizationimmunoassayFPIA: "0253",

  /**
   * Immunofixation electrophoresis (IFE)
   */
  ImmunofixationelectrophoresisIFE: "0254",

  /**
   * Equilibrium dialysis
   */
  Equilibriumdialysis: "0255",

  /**
   * Kleihauer-Betke acid elution
   */
  KleihauerBetkeacidelution: "0256",

  /**
   * Anti-complement immunofluorescence (ACIF)
   */
  AnticomplementimmunofluorescenceACIF: "0257",

  /**
   * GC/MS
   */
  GCMS: "0258",

  /**
   * Nephelometry
   */
  Nephelometry: "0259",

  /**
   * IgE immunoassay antibody
   */
  IgEimmunoassayantibody: "0260",

  /**
   * Lymphocyte Microcytotoxicity Assay
   */
  LymphocyteMicrocytotoxicityAssay: "0261",

  /**
   * Spectrophotometry
   */
  Spectrophotometry: "0262",

  /**
   * Atomic absorption spectrophotometry (AAS)
   */
  AtomicabsorptionspectrophotometryAAS: "0263",

  /**
   * Ion selective electrode (ISE)
   */
  IonselectiveelectrodeISE: "0264",

  /**
   * Gas chromatography (GC)
   */
  GaschromatographyGC: "0265",

  /**
   * Isoelectric focusing (IEF)
   */
  IsoelectricfocusingIEF: "0266",

  /**
   * Immunochemiluminescence
   */
  Immunochemiluminescence: "0267",

  /**
   * Microparticle enzyme immunoassay (MEIA)
   */
  MicroparticleenzymeimmunoassayMEIA: "0268",

  /**
   * ICP/MS
   */
  ICPMS: "0269",

  /**
   * Immunoradiometric assay (IRMA)
   */
  ImmunoradiometricassayIRMA: "0270",

  /**
   * Photo optical clot detection
   */
  Photoopticalclotdetection: "0271",

  /**
   * algorithm
   */
  algorithm: "ALGM",

  /**
   * bayesian calculation
   */
  bayesiancalculation: "BYCL",

  /**
   * global introspection
   */
  globalintrospection: "GINT",

  /**
   * Minimum Inhibitory Concentration
   */
  MinimumInhibitoryConcentration: "0272",

  /**
   * Minimum Lethal Concentration (MLC)
   */
  MinimumLethalConcentrationMLC: "0275a",

  /**
   * Susceptibility Testing
   */
  SusceptibilityTesting: "0280",

  /**
   * Viral Genotype Susceptibility
   */
  ViralGenotypeSusceptibility: "0273",

  /**
   * Viral Phenotype Susceptibility
   */
  ViralPhenotypeSusceptibility: "0274",

  /**
   * Gradient Strip
   */
  GradientStrip: "0275",

  /**
   * Slow Mycobacteria Susceptibility
   */
  SlowMycobacteriaSusceptibility: "0276",

  /**
   * Serum bactericidal titer
   */
  Serumbactericidaltiter: "0277",

  /**
   * Agar screen
   */
  Agarscreen: "0278",

  /**
   * Disk induction
   */
  Diskinduction: "0279",

  /**
   * document verification
   */
  documentverification: "VDOC",

  /**
   * registry verification
   */
  registryverification: "VREG",

  /**
   * electronic token verification
   */
  electronictokenverification: "VTOKEN",

  /**
   * voice-based verification
   */
  voicebasedverification: "VVOICE",

  /**
   * PCR
   */
  PCR: "PCR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMethodCode =
  typeof ObservationMethodCode[keyof typeof ObservationMethodCode];
