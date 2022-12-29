/**
 * The kind of vaccine.
 * http://terminology.hl7.org/ValueSet/v3-VaccineType
 */
export const VaccineTypeCode = {
  /**
   * DTP
   */
  DTP: "1",

  /**
   * IPV
   */
  IPV: "10",

  /**
   * pneumococcal conjugate
   */
  pneumococcalconjugate: "100",

  /**
   * typhoid, ViCPs
   */
  typhoidViCPs: "101",

  /**
   * pertussis
   */
  pertussis: "11",

  /**
   * diphtheria antitoxin
   */
  diphtheriaantitoxin: "12",

  /**
   * TIG
   */
  TIG: "13",

  /**
   * IG, NOS
   */
  IGNOS: "14",

  /**
   * influenza, split (incl. purified surface antigen)
   */
  influenzasplitinclpurifiedsurfaceantigen: "15",

  /**
   * influenza, whole
   */
  influenzawhole: "16",

  /**
   * Hib, NOS
   */
  HibNOS: "17",

  /**
   * rabies, intramuscular injection
   */
  rabiesintramuscularinjection: "18",

  /**
   * BCG
   */
  BCG: "19",

  /**
   * OPV
   */
  OPV: "2",

  /**
   * DTaP
   */
  DTaP: "20",

  /**
   * varicella
   */
  varicella: "21",

  /**
   * DTP-Hib
   */
  DTPHib: "22",

  /**
   * plague
   */
  plague: "23",

  /**
   * Anthrax
   */
  Anthrax: "24",

  /**
   * typhoid, oral
   */
  typhoidoral: "25",

  /**
   * Cholera
   */
  Cholera: "26",

  /**
   * botulinum antitoxin
   */
  botulinumantitoxin: "27",

  /**
   * DT (pediatric)
   */
  DTpediatric: "28",

  /**
   * CMVIG
   */
  CMVIG: "29",

  /**
   * MMR
   */
  MMR: "3",

  /**
   * HBIG
   */
  HBIG: "30",

  /**
   * Hep A, pediatric, NOS
   */
  HepApediatricNOS: "31",

  /**
   * meningococcal
   */
  meningococcal: "32",

  /**
   * pneumococcal
   */
  pneumococcal: "33",

  /**
   * RIG
   */
  RIG: "34",

  /**
   * tetanus toxoid
   */
  tetanustoxoid: "35",

  /**
   * VZIG
   */
  VZIG: "36",

  /**
   * yellow fever
   */
  yellowfever: "37",

  /**
   * rubella/mumps
   */
  rubellamumps: "38",

  /**
   * Japanese encephalitis
   */
  Japaneseencephalitis: "39",

  /**
   * M/R
   */
  MR: "4",

  /**
   * rabies, intradermal injection
   */
  rabiesintradermalinjection: "40",

  /**
   * typhoid, parenteral
   */
  typhoidparenteral: "41",

  /**
   * Hep B, adolescent/high risk infant
   */
  HepBadolescenthighriskinfant: "42",

  /**
   * Hep B, adult
   */
  HepBadult: "43",

  /**
   * Hep B, dialysis
   */
  HepBdialysis: "44",

  /**
   * Hep B, NOS
   */
  HepBNOS: "45",

  /**
   * Hib (PRP-D)
   */
  HibPRPD: "46",

  /**
   * Hib (HbOC)
   */
  HibHbOC: "47",

  /**
   * Hib (PRP-T)
   */
  HibPRPT: "48",

  /**
   * Hib (PRP-OMP)
   */
  HibPRPOMP: "49",

  /**
   * measles
   */
  measles: "5",

  /**
   * DTaPHib
   */
  DTaPHib: "50",

  /**
   * Hib-Hep B
   */
  HibHepB: "51",

  /**
   * Hep A, adult
   */
  HepAadult: "52",

  /**
   * typhoid, parenteral, AKD (U.S. military)
   */
  typhoidparenteralAKDUSmilitary: "53",

  /**
   * adenovirus, type 4
   */
  adenovirustype4: "54",

  /**
   * adenovirus, type 7
   */
  adenovirustype7: "55",

  /**
   * dengue fever
   */
  denguefever: "56",

  /**
   * Hantavirus
   */
  Hantavirus: "57",

  /**
   * Hep C
   */
  HepC: "58",

  /**
   * Hep E
   */
  HepE: "59",

  /**
   * rubella
   */
  rubella: "6",

  /**
   * herpes simplex 2
   */
  herpessimplex2: "60",

  /**
   * HIV
   */
  HIV: "61",

  /**
   * HPV
   */
  HPV: "62",

  /**
   * Junin virus
   */
  Juninvirus: "63",

  /**
   * leishmaniasis
   */
  leishmaniasis: "64",

  /**
   * leprosy
   */
  leprosy: "65",

  /**
   * Lyme disease
   */
  Lymedisease: "66",

  /**
   * malaria
   */
  malaria: "67",

  /**
   * melanoma
   */
  melanoma: "68",

  /**
   * parainfluenza-3
   */
  parainfluenza3: "69",

  /**
   * mumps
   */
  mumps: "7",

  /**
   * Q fever
   */
  Qfever: "70",

  /**
   * RSV-IGIV
   */
  RSVIGIV: "71",

  /**
   * rheumatic fever
   */
  rheumaticfever: "72",

  /**
   * Rift Valley fever
   */
  RiftValleyfever: "73",

  /**
   * rotavirus
   */
  rotavirus: "74",

  /**
   * smallpox
   */
  smallpox: "75",

  /**
   * Staphylococcus bacterio lysate
   */
  Staphylococcusbacteriolysate: "76",

  /**
   * tick-borne encephalitis
   */
  tickborneencephalitis: "77",

  /**
   * tularemia vaccine
   */
  tularemiavaccine: "78",

  /**
   * vaccinia immune globulin
   */
  vacciniaimmuneglobulin: "79",

  /**
   * Hep B, adolescent or pediatric
   */
  HepBadolescentorpediatric: "8",

  /**
   * VEE, live
   */
  VEElive: "80",

  /**
   * VEE, inactivated
   */
  VEEinactivated: "81",

  /**
   * adenovirus, NOS
   */
  adenovirusNOS: "82",

  /**
   * Hep A, ped/adol, 2 dose
   */
  HepApedadol2dose: "83",

  /**
   * Hep A, ped/adol, 3 dose
   */
  HepApedadol3dose: "84",

  /**
   * Hep A, NOS
   */
  HepANOS: "85",

  /**
   * IG
   */
  IG: "86",

  /**
   * IGIV
   */
  IGIV: "87",

  /**
   * influenza, NOS
   */
  influenzaNOS: "88",

  /**
   * polio, NOS
   */
  polioNOS: "89",

  /**
   * Td (adult)
   */
  Tdadult: "9",

  /**
   * rabies, NOS
   */
  rabiesNOS: "90",

  /**
   * typhoid, NOS
   */
  typhoidNOS: "91",

  /**
   * VEE, NOS
   */
  VEENOS: "92",

  /**
   * RSV-Mab
   */
  RSVMab: "93",

  /**
   * MMRV
   */
  MMRV: "94",

  /**
   * TST-OT tine test
   */
  TSTOTtinetest: "95",

  /**
   * TST-PPD intradermal
   */
  TSTPPDintradermal: "96",

  /**
   * TST-PPD tine test
   */
  TSTPPDtinetest: "97",

  /**
   * TST, NOS
   */
  TSTNOS: "98",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaccineTypeCode =
  typeof VaccineTypeCode[keyof typeof VaccineTypeCode];
