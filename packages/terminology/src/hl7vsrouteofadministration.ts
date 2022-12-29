/**
 * Value Set of codes that specify the route of administration.
 * http://terminology.hl7.org/ValueSet/v2-0162
 */
export const Hl7VSRouteOfAdministrationCode = {
  /**
   * Apply Externally
   */
  ApplyExternally: "AP",

  /**
   * Buccal
   */
  Buccal: "B",

  /**
   * Dental
   */
  Dental: "DT",

  /**
   * Epidural
   */
  Epidural: "EP",

  /**
   * Endotrachial Tube
   */
  EndotrachialTube: "ET",

  /**
   * Gastrostomy Tube
   */
  GastrostomyTube: "GTT",

  /**
   * GU Irrigant
   */
  GUIrrigant: "GU",

  /**
   * Immerse (Soak) Body Part
   */
  ImmerseSoakBodyPart: "IMR",

  /**
   * Intra-arterial
   */
  Intraarterial: "IA",

  /**
   * Intrabursal
   */
  Intrabursal: "IB",

  /**
   * Intracardiac
   */
  Intracardiac: "IC",

  /**
   * Intracervical (uterus)
   */
  Intracervicaluterus: "ICV",

  /**
   * Intradermal
   */
  Intradermal: "ID",

  /**
   * Inhalation
   */
  Inhalation: "IH",

  /**
   * Intrahepatic Artery
   */
  IntrahepaticArtery: "IHA",

  /**
   * Intramuscular
   */
  Intramuscular: "IM",

  /**
   * Intranasal
   */
  Intranasal: "IN",

  /**
   * Intraocular
   */
  Intraocular: "IO",

  /**
   * Intraperitoneal
   */
  Intraperitoneal: "IP",

  /**
   * Intrasynovial
   */
  Intrasynovial: "IS",

  /**
   * Intrathecal
   */
  Intrathecal: "IT",

  /**
   * Intrauterine
   */
  Intrauterine: "IU",

  /**
   * Intravenous
   */
  Intravenous: "IV",

  /**
   * Mouth/Throat
   */
  MouthThroat: "MTH",

  /**
   * Mucous Membrane
   */
  MucousMembrane: "MM",

  /**
   * Nasal
   */
  Nasal: "NS",

  /**
   * Nasogastric
   */
  Nasogastric: "NG",

  /**
   * Nasal Prongs
   */
  NasalProngs: "NP",

  /**
   * Nasotrachial Tube
   */
  NasotrachialTube: "NT",

  /**
   * Ophthalmic
   */
  Ophthalmic: "OP",

  /**
   * Otic
   */
  Otic: "OT",

  /**
   * Other/Miscellaneous
   */
  OtherMiscellaneous: "OTH",

  /**
   * Perfusion
   */
  Perfusion: "PF",

  /**
   * Oral
   */
  Oral: "PO",

  /**
   * Rectal
   */
  Rectal: "PR",

  /**
   * Rebreather Mask
   */
  RebreatherMask: "RM",

  /**
   * Soaked Dressing
   */
  SoakedDressing: "SD",

  /**
   * Subcutaneous
   */
  Subcutaneous: "SC",

  /**
   * Sublingual
   */
  Sublingual: "SL",

  /**
   * Topical
   */
  Topical: "TP",

  /**
   * Tracheostomy
   */
  Tracheostomy: "TRA",

  /**
   * Transdermal
   */
  Transdermal: "TD",

  /**
   * Translingual
   */
  Translingual: "TL",

  /**
   * Urethral
   */
  Urethral: "UR",

  /**
   * Vaginal
   */
  Vaginal: "VG",

  /**
   * Ventimask
   */
  Ventimask: "VM",

  /**
   * Wound
   */
  Wound: "WND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRouteOfAdministrationCode =
  typeof Hl7VSRouteOfAdministrationCode[keyof typeof Hl7VSRouteOfAdministrationCode];
