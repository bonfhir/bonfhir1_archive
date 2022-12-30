/**
 * Value Set of codes that specify the route of administration.
 * http://terminology.hl7.org/ValueSet/v2-0162
 */
export const Hl7VSRouteOfAdministrationCode = {
  /**
   * Apply Externally
   */
  AP: "AP",

  /**
   * Buccal
   */
  B: "B",

  /**
   * Dental
   */
  DT: "DT",

  /**
   * Epidural
   */
  EP: "EP",

  /**
   * Endotrachial Tube
   */
  ET: "ET",

  /**
   * Gastrostomy Tube
   */
  GTT: "GTT",

  /**
   * GU Irrigant
   */
  GU: "GU",

  /**
   * Immerse (Soak) Body Part
   */
  IMR: "IMR",

  /**
   * Intra-arterial
   */
  IA: "IA",

  /**
   * Intrabursal
   */
  IB: "IB",

  /**
   * Intracardiac
   */
  IC: "IC",

  /**
   * Intracervical (uterus)
   */
  ICV: "ICV",

  /**
   * Intradermal
   */
  ID: "ID",

  /**
   * Inhalation
   */
  IH: "IH",

  /**
   * Intrahepatic Artery
   */
  IHA: "IHA",

  /**
   * Intramuscular
   */
  IM: "IM",

  /**
   * Intranasal
   */
  IN: "IN",

  /**
   * Intraocular
   */
  IO: "IO",

  /**
   * Intraperitoneal
   */
  IP: "IP",

  /**
   * Intrasynovial
   */
  IS: "IS",

  /**
   * Intrathecal
   */
  IT: "IT",

  /**
   * Intrauterine
   */
  IU: "IU",

  /**
   * Intravenous
   */
  IV: "IV",

  /**
   * Mouth/Throat
   */
  MTH: "MTH",

  /**
   * Mucous Membrane
   */
  MM: "MM",

  /**
   * Nasal
   */
  NS: "NS",

  /**
   * Nasogastric
   */
  NG: "NG",

  /**
   * Nasal Prongs
   */
  NP: "NP",

  /**
   * Nasotrachial Tube
   */
  NT: "NT",

  /**
   * Ophthalmic
   */
  OP: "OP",

  /**
   * Otic
   */
  OT: "OT",

  /**
   * Other/Miscellaneous
   */
  OTH: "OTH",

  /**
   * Perfusion
   */
  PF: "PF",

  /**
   * Oral
   */
  PO: "PO",

  /**
   * Rectal
   */
  PR: "PR",

  /**
   * Rebreather Mask
   */
  RM: "RM",

  /**
   * Soaked Dressing
   */
  SD: "SD",

  /**
   * Subcutaneous
   */
  SC: "SC",

  /**
   * Sublingual
   */
  SL: "SL",

  /**
   * Topical
   */
  TP: "TP",

  /**
   * Tracheostomy
   */
  TRA: "TRA",

  /**
   * Transdermal
   */
  TD: "TD",

  /**
   * Translingual
   */
  TL: "TL",

  /**
   * Urethral
   */
  UR: "UR",

  /**
   * Vaginal
   */
  VG: "VG",

  /**
   * Ventimask
   */
  VM: "VM",

  /**
   * Wound
   */
  WND: "WND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRouteOfAdministrationCode =
  typeof Hl7VSRouteOfAdministrationCode[keyof typeof Hl7VSRouteOfAdministrationCode];
