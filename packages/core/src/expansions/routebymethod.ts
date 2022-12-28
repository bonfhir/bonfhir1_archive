/**
 * Route of substance administration classified by administration method.
 * http://terminology.hl7.org/ValueSet/v3-RouteByMethod
 */
export const RouteByMethodCode = {
  /**
   * Immersion (soak)
   */
  SOAK: "SOAK",

  /**
   * Shampoo
   */
  SHAMPOO: "SHAMPOO",

  /**
   * Translingual
   */
  TRNSLING: "TRNSLING",

  /**
   * Swallow, oral
   */
  PO: "PO",

  /**
   * Gargle
   */
  GARGLE: "GARGLE",

  /**
   * Suck, oromucosal
   */
  SUCK: "SUCK",

  /**
   * Chew
   */
  _Chew: "_Chew",

  /**
   * Chew, oral
   */
  CHEW: "CHEW",

  /**
   * Diffusion
   */
  _Diffusion: "_Diffusion",

  /**
   * Diffusion, extracorporeal
   */
  EXTCORPDIF: "EXTCORPDIF",

  /**
   * Diffusion, hemodialysis
   */
  HEMODIFF: "HEMODIFF",

  /**
   * Diffusion, transdermal
   */
  TRNSDERMD: "TRNSDERMD",

  /**
   * Dissolve
   */
  _Dissolve: "_Dissolve",

  /**
   * Dissolve, oral
   */
  DISSOLVE: "DISSOLVE",

  /**
   * Dissolve, sublingual
   */
  SL: "SL",

  /**
   * Douche
   */
  _Douche: "_Douche",

  /**
   * Douche, vaginal
   */
  DOUCHE: "DOUCHE",

  /**
   * ElectroOsmosisRoute
   */
  _ElectroOsmosisRoute: "_ElectroOsmosisRoute",

  /**
   * Electro-osmosis
   */
  ELECTOSMOS: "ELECTOSMOS",

  /**
   * Enema
   */
  _Enema: "_Enema",

  /**
   * Enema, rectal
   */
  ENEMA: "ENEMA",

  /**
   * Enema, rectal retention
   */
  RETENEMA: "RETENEMA",

  /**
   * Flush
   */
  _Flush: "_Flush",

  /**
   * Flush, intravenous catheter
   */
  IVFLUSH: "IVFLUSH",

  /**
   * Implantation
   */
  _Implantation: "_Implantation",

  /**
   * Implantation, intradermal
   */
  IDIMPLNT: "IDIMPLNT",

  /**
   * Implantation, intravitreal
   */
  IVITIMPLNT: "IVITIMPLNT",

  /**
   * Implantation, subcutaneous
   */
  SQIMPLNT: "SQIMPLNT",

  /**
   * Infusion
   */
  _Infusion: "_Infusion",

  /**
   * Infusion, epidural
   */
  EPI: "EPI",

  /**
   * Infusion, intraarterial catheter
   */
  IA: "IA",

  /**
   * Infusion, intracardiac
   */
  IC: "IC",

  /**
   * Infusion, intracoronary
   */
  ICOR: "ICOR",

  /**
   * Infusion, intraosseous, continuous
   */
  IOSSC: "IOSSC",

  /**
   * Infusion, intrathecal
   */
  IT: "IT",

  /**
   * Infusion, intravenous
   */
  IV: "IV",

  /**
   * Infusion, intravenous catheter
   */
  IVC: "IVC",

  /**
   * Infusion, intravenous catheter, continuous
   */
  IVCC: "IVCC",

  /**
   * Infusion, intravenous catheter, intermittent
   */
  IVCI: "IVCI",

  /**
   * Infusion, intravenous catheter, pca pump
   */
  PCA: "PCA",

  /**
   * Infusion, intravascular
   */
  IVASCINFUS: "IVASCINFUS",

  /**
   * Infusion, subcutaneous
   */
  SQINFUS: "SQINFUS",

  /**
   * Inhalation
   */
  _Inhalation: "_Inhalation",

  /**
   * Inhalation, respiratory
   */
  IPINHL: "IPINHL",

  /**
   * Inhalation, oral intermittent flow
   */
  ORIFINHL: "ORIFINHL",

  /**
   * Inhalation, oral rebreather mask
   */
  REBREATH: "REBREATH",

  /**
   * Inhalation, respiratory
   */
  ORINHL: "ORINHL",

  /**
   * Inhalation, respiratory
   */
  RESPINHL: "RESPINHL",

  /**
   * Inhalation, intermittent positive pressure breathing (ippb)
   */
  IPPB: "IPPB",

  /**
   * Inhalation, nasal
   */
  NASINHL: "NASINHL",

  /**
   * Inhalation, nasal cannula
   */
  NASINHLC: "NASINHLC",

  /**
   * Inhalation, nasal cannula
   */
  NP: "NP",

  /**
   * Inhalation, nebulization
   */
  NEB: "NEB",

  /**
   * Inhalation, nebulization, nasal
   */
  NASNEB: "NASNEB",

  /**
   * Inhalation, nebulization, oral
   */
  ORNEB: "ORNEB",

  /**
   * Inhalation, tracheostomy
   */
  TRACH: "TRACH",

  /**
   * Inhalation, ventilator
   */
  VENT: "VENT",

  /**
   * Inhalation, ventimask
   */
  VENTMASK: "VENTMASK",

  /**
   * Injection
   */
  _Injection: "_Injection",

  /**
   * Injection, amniotic fluid
   */
  AMNINJ: "AMNINJ",

  /**
   * Injection, biliary tract
   */
  BILINJ: "BILINJ",

  /**
   * Injection, for cholangiography
   */
  CHOLINJ: "CHOLINJ",

  /**
   * Injection, cervical
   */
  CERVINJ: "CERVINJ",

  /**
   * Injection, epidural
   */
  EPIDURINJ: "EPIDURINJ",

  /**
   * Injection, epidural, push
   */
  EPIINJ: "EPIINJ",

  /**
   * Injection, epidural, slow push
   */
  EPINJSP: "EPINJSP",

  /**
   * Injection, extra-amniotic
   */
  EXTRAMNINJ: "EXTRAMNINJ",

  /**
   * Injection, extracorporeal
   */
  EXTCORPINJ: "EXTCORPINJ",

  /**
   * Injection, gastric button
   */
  GBINJ: "GBINJ",

  /**
   * Injection, gingival
   */
  GINGINJ: "GINGINJ",

  /**
   * Injection, urinary bladder
   */
  BLADINJ: "BLADINJ",

  /**
   * Injection, endosinusial
   */
  ENDOSININJ: "ENDOSININJ",

  /**
   * Injection, hemodialysis port
   */
  HEMOPORT: "HEMOPORT",

  /**
   * Injection, intra-abdominal
   */
  IABDINJ: "IABDINJ",

  /**
   * Injection, intraarterial
   */
  IAINJ: "IAINJ",

  /**
   * Injection, intraarterial, push
   */
  IAINJP: "IAINJP",

  /**
   * Injection, intraarterial, slow push
   */
  IAINJSP: "IAINJSP",

  /**
   * Injection, intraarticular
   */
  IARTINJ: "IARTINJ",

  /**
   * Injection, intrabursal
   */
  IBURSINJ: "IBURSINJ",

  /**
   * Injection, intracardiac
   */
  ICARDINJ: "ICARDINJ",

  /**
   * Injection, intracardiac, rapid push
   */
  ICARDINJRP: "ICARDINJRP",

  /**
   * Injection, intracardiac, slow push
   */
  ICARDINJSP: "ICARDINJSP",

  /**
   * Injection, intracardiac, push
   */
  ICARINJP: "ICARINJP",

  /**
   * Injection, intracartilaginous
   */
  ICARTINJ: "ICARTINJ",

  /**
   * Injection, intracaudal
   */
  ICAUDINJ: "ICAUDINJ",

  /**
   * Injection, intracavernous
   */
  ICAVINJ: "ICAVINJ",

  /**
   * Injection, intracavitary
   */
  ICAVITINJ: "ICAVITINJ",

  /**
   * Injection, intracerebral
   */
  ICEREBINJ: "ICEREBINJ",

  /**
   * Injection, intracisternal
   */
  ICISTERNINJ: "ICISTERNINJ",

  /**
   * Injection, intracoronary
   */
  ICORONINJ: "ICORONINJ",

  /**
   * Injection, intracoronary, push
   */
  ICORONINJP: "ICORONINJP",

  /**
   * Injection, intracorpus cavernosum
   */
  ICORPCAVINJ: "ICORPCAVINJ",

  /**
   * Injection, intradermal
   */
  IDINJ: "IDINJ",

  /**
   * Injection, intradiscal
   */
  IDISCINJ: "IDISCINJ",

  /**
   * Injection, intraductal
   */
  IDUCTINJ: "IDUCTINJ",

  /**
   * Injection, intradural
   */
  IDURINJ: "IDURINJ",

  /**
   * Injection, intraepidermal
   */
  IEPIDINJ: "IEPIDINJ",

  /**
   * Injection, intraepithelial
   */
  IEPITHINJ: "IEPITHINJ",

  /**
   * Injection, intralesional
   */
  ILESINJ: "ILESINJ",

  /**
   * Injection, intraluminal
   */
  ILUMINJ: "ILUMINJ",

  /**
   * Injection, intralymphatic
   */
  ILYMPJINJ: "ILYMPJINJ",

  /**
   * Injection, intramuscular
   */
  IM: "IM",

  /**
   * Injection, intramuscular, deep
   */
  IMD: "IMD",

  /**
   * Injection, intramuscular, z track
   */
  IMZ: "IMZ",

  /**
   * Injection, intramedullary
   */
  IMEDULINJ: "IMEDULINJ",

  /**
   * Injection, interameningeal
   */
  INTERMENINJ: "INTERMENINJ",

  /**
   * Injection, interstitial
   */
  INTERSTITINJ: "INTERSTITINJ",

  /**
   * Injection, intraocular
   */
  IOINJ: "IOINJ",

  /**
   * Injection, intraosseous
   */
  IOSSINJ: "IOSSINJ",

  /**
   * Injection, intraovarian
   */
  IOVARINJ: "IOVARINJ",

  /**
   * Injection, intrapericardial
   */
  IPCARDINJ: "IPCARDINJ",

  /**
   * Injection, intraperitoneal
   */
  IPERINJ: "IPERINJ",

  /**
   * Injection, intrapulmonary
   */
  IPINJ: "IPINJ",

  /**
   * Injection, intrapleural
   */
  IPLRINJ: "IPLRINJ",

  /**
   * Injection, intraprostatic
   */
  IPROSTINJ: "IPROSTINJ",

  /**
   * Injection, insulin pump
   */
  IPUMPINJ: "IPUMPINJ",

  /**
   * Injection, intraspinal
   */
  ISINJ: "ISINJ",

  /**
   * Injection, intrasternal
   */
  ISTERINJ: "ISTERINJ",

  /**
   * Injection, intrasynovial
   */
  ISYNINJ: "ISYNINJ",

  /**
   * Injection, intratendinous
   */
  ITENDINJ: "ITENDINJ",

  /**
   * Injection, intratesticular
   */
  ITESTINJ: "ITESTINJ",

  /**
   * Injection, intrathoracic
   */
  ITHORINJ: "ITHORINJ",

  /**
   * Injection, intrathecal
   */
  ITINJ: "ITINJ",

  /**
   * Injection, intratubular
   */
  ITUBINJ: "ITUBINJ",

  /**
   * Injection, intratumor
   */
  ITUMINJ: "ITUMINJ",

  /**
   * Injection, intratympanic
   */
  ITYMPINJ: "ITYMPINJ",

  /**
   * Injection, intrauterine
   */
  IUINJ: "IUINJ",

  /**
   * Injection, intracervical (uterus)
   */
  IUINJC: "IUINJC",

  /**
   * Injection, intraureteral, retrograde
   */
  IURETINJ: "IURETINJ",

  /**
   * Injection, intravascular
   */
  IVASCINJ: "IVASCINJ",

  /**
   * Injection, intraventricular (heart)
   */
  IVENTINJ: "IVENTINJ",

  /**
   * Injection, intravesicle
   */
  IVESINJ: "IVESINJ",

  /**
   * Injection, intravenous
   */
  IVINJ: "IVINJ",

  /**
   * Injection, intravenous, bolus
   */
  IVINJBOL: "IVINJBOL",

  /**
   * Injection, intravenous, push
   */
  IVPUSH: "IVPUSH",

  /**
   * Injection, intravenous, rapid push
   */
  IVRPUSH: "IVRPUSH",

  /**
   * Injection, intravenous, slow push
   */
  IVSPUSH: "IVSPUSH",

  /**
   * Injection, intravitreal
   */
  IVITINJ: "IVITINJ",

  /**
   * Injection, periarticular
   */
  PAINJ: "PAINJ",

  /**
   * Injection, parenteral
   */
  PARENTINJ: "PARENTINJ",

  /**
   * Injection, periodontal
   */
  PDONTINJ: "PDONTINJ",

  /**
   * Injection, peritoneal dialysis port
   */
  PDPINJ: "PDPINJ",

  /**
   * Injection, peridural
   */
  PDURINJ: "PDURINJ",

  /**
   * Injection, perineural
   */
  PNINJ: "PNINJ",

  /**
   * Injection, paranasal sinuses
   */
  PNSINJ: "PNSINJ",

  /**
   * Injection, retrobulbar
   */
  RBINJ: "RBINJ",

  /**
   * Injection, subconjunctival
   */
  SCINJ: "SCINJ",

  /**
   * Injection, sublesional
   */
  SLESINJ: "SLESINJ",

  /**
   * Injection, soft tissue
   */
  SOFTISINJ: "SOFTISINJ",

  /**
   * Injection, subcutaneous
   */
  SQ: "SQ",

  /**
   * Injection, subarachnoid
   */
  SUBARACHINJ: "SUBARACHINJ",

  /**
   * Injection, submucosal
   */
  SUBMUCINJ: "SUBMUCINJ",

  /**
   * Injection, transplacental
   */
  TRPLACINJ: "TRPLACINJ",

  /**
   * Injection, transtracheal
   */
  TRTRACHINJ: "TRTRACHINJ",

  /**
   * Injection, urethral
   */
  URETHINJ: "URETHINJ",

  /**
   * Injection, ureteral
   */
  URETINJ: "URETINJ",

  /**
   * Insertion
   */
  _Insertion: "_Insertion",

  /**
   * Insertion, cervical (uterine)
   */
  CERVINS: "CERVINS",

  /**
   * Insertion, intraocular, surgical
   */
  IOSURGINS: "IOSURGINS",

  /**
   * Insertion, intrauterine
   */
  IU: "IU",

  /**
   * Insertion, lacrimal puncta
   */
  LPINS: "LPINS",

  /**
   * Insertion, rectal
   */
  PR: "PR",

  /**
   * Insertion, subcutaneous, surgical
   */
  SQSURGINS: "SQSURGINS",

  /**
   * Insertion, urethral
   */
  URETHINS: "URETHINS",

  /**
   * Insertion, vaginal
   */
  VAGINSI: "VAGINSI",

  /**
   * Instillation
   */
  _Instillation: "_Instillation",

  /**
   * Instillation, cecostomy
   */
  CECINSTL: "CECINSTL",

  /**
   * Instillation, enteral feeding tube
   */
  EFT: "EFT",

  /**
   * Instillation, enteral
   */
  ENTINSTL: "ENTINSTL",

  /**
   * Instillation, gastrostomy tube
   */
  GT: "GT",

  /**
   * Instillation, nasogastric tube
   */
  NGT: "NGT",

  /**
   * Instillation, orogastric tube
   */
  OGT: "OGT",

  /**
   * Instillation, urinary catheter
   */
  BLADINSTL: "BLADINSTL",

  /**
   * Instillation, continuous ambulatory peritoneal dialysis port
   */
  CAPDINSTL: "CAPDINSTL",

  /**
   * Instillation, chest tube
   */
  CTINSTL: "CTINSTL",

  /**
   * Instillation, endotracheal tube
   */
  ETINSTL: "ETINSTL",

  /**
   * Instillation, gastro-jejunostomy tube
   */
  GJT: "GJT",

  /**
   * Instillation, intrabronchial
   */
  IBRONCHINSTIL: "IBRONCHINSTIL",

  /**
   * Instillation, intraduodenal
   */
  IDUODINSTIL: "IDUODINSTIL",

  /**
   * Instillation, intraesophageal
   */
  IESOPHINSTIL: "IESOPHINSTIL",

  /**
   * Instillation, intragastric
   */
  IGASTINSTIL: "IGASTINSTIL",

  /**
   * Instillation, intraileal
   */
  IILEALINJ: "IILEALINJ",

  /**
   * Instillation, intraocular
   */
  IOINSTL: "IOINSTL",

  /**
   * Instillation, intrasinal
   */
  ISININSTIL: "ISININSTIL",

  /**
   * Instillation, intratracheal
   */
  ITRACHINSTIL: "ITRACHINSTIL",

  /**
   * Instillation, intrauterine
   */
  IUINSTL: "IUINSTL",

  /**
   * Instillation, jejunostomy tube
   */
  JJTINSTL: "JJTINSTL",

  /**
   * Instillation, laryngeal
   */
  LARYNGINSTIL: "LARYNGINSTIL",

  /**
   * Instillation, nasal
   */
  NASALINSTIL: "NASALINSTIL",

  /**
   * Instillation, nasogastric
   */
  NASOGASINSTIL: "NASOGASINSTIL",

  /**
   * Instillation, nasotracheal tube
   */
  NTT: "NTT",

  /**
   * Instillation, orojejunum tube
   */
  OJJ: "OJJ",

  /**
   * Instillation, otic
   */
  OT: "OT",

  /**
   * Instillation, peritoneal dialysis port
   */
  PDPINSTL: "PDPINSTL",

  /**
   * Instillation, paranasal sinuses
   */
  PNSINSTL: "PNSINSTL",

  /**
   * Instillation, rectal
   */
  RECINSTL: "RECINSTL",

  /**
   * Instillation, rectal tube
   */
  RECTINSTL: "RECTINSTL",

  /**
   * Instillation, sinus, unspecified
   */
  SININSTIL: "SININSTIL",

  /**
   * Instillation, soft tissue
   */
  SOFTISINSTIL: "SOFTISINSTIL",

  /**
   * Instillation, tracheostomy
   */
  TRACHINSTL: "TRACHINSTL",

  /**
   * Instillation, transtympanic
   */
  TRTYMPINSTIL: "TRTYMPINSTIL",

  /**
   * instillation, urethral
   */
  URETHINSTL: "URETHINSTL",

  /**
   * IontophoresisRoute
   */
  _IontophoresisRoute: "_IontophoresisRoute",

  /**
   * Topical application, iontophoresis
   */
  IONTO: "IONTO",

  /**
   * Irrigation
   */
  _Irrigation: "_Irrigation",

  /**
   * Irrigation, genitourinary
   */
  GUIRR: "GUIRR",

  /**
   * Irrigation, intragastric
   */
  IGASTIRR: "IGASTIRR",

  /**
   * Irrigation, intralesional
   */
  ILESIRR: "ILESIRR",

  /**
   * Irrigation, intraocular
   */
  IOIRR: "IOIRR",

  /**
   * Irrigation, urinary bladder
   */
  BLADIRR: "BLADIRR",

  /**
   * Irrigation, urinary bladder, continuous
   */
  BLADIRRC: "BLADIRRC",

  /**
   * Irrigation, urinary bladder, tidal
   */
  BLADIRRT: "BLADIRRT",

  /**
   * Irrigation, rectal
   */
  RECIRR: "RECIRR",

  /**
   * LavageRoute
   */
  _LavageRoute: "_LavageRoute",

  /**
   * Lavage, intragastric
   */
  IGASTLAV: "IGASTLAV",

  /**
   * MucosalAbsorptionRoute
   */
  _MucosalAbsorptionRoute: "_MucosalAbsorptionRoute",

  /**
   * Mucosal absorption, intraduodenal
   */
  IDOUDMAB: "IDOUDMAB",

  /**
   * Mucosal absorption, intratracheal
   */
  ITRACHMAB: "ITRACHMAB",

  /**
   * Mucosal absorption, submucosal
   */
  SMUCMAB: "SMUCMAB",

  /**
   * Nebulization
   */
  _Nebulization: "_Nebulization",

  /**
   * Nebulization, endotracheal tube
   */
  ETNEB: "ETNEB",

  /**
   * Rinse
   */
  _Rinse: "_Rinse",

  /**
   * Rinse, dental
   */
  DENRINSE: "DENRINSE",

  /**
   * Rinse, oral
   */
  ORRINSE: "ORRINSE",

  /**
   * SuppositoryRoute
   */
  _SuppositoryRoute: "_SuppositoryRoute",

  /**
   * Suppository, urethral
   */
  URETHSUP: "URETHSUP",

  /**
   * Swish
   */
  _Swish: "_Swish",

  /**
   * Swish and spit out, oromucosal
   */
  SWISHSPIT: "SWISHSPIT",

  /**
   * Swish and swallow, oromucosal
   */
  SWISHSWAL: "SWISHSWAL",

  /**
   * TopicalAbsorptionRoute
   */
  _TopicalAbsorptionRoute: "_TopicalAbsorptionRoute",

  /**
   * Topical absorption, transtympanic
   */
  TTYMPTABSORP: "TTYMPTABSORP",

  /**
   * TopicalApplication
   */
  _TopicalApplication: "_TopicalApplication",

  /**
   * Topical application, soaked dressing
   */
  DRESS: "DRESS",

  /**
   * Topical application, swab
   */
  SWAB: "SWAB",

  /**
   * Topical
   */
  TOPICAL: "TOPICAL",

  /**
   * Topical application, buccal
   */
  BUC: "BUC",

  /**
   * Topical application, cervical
   */
  CERV: "CERV",

  /**
   * Topical application, dental
   */
  DEN: "DEN",

  /**
   * Topical application, gingival
   */
  GIN: "GIN",

  /**
   * Topical application, hair
   */
  HAIR: "HAIR",

  /**
   * Topical application, intracorneal
   */
  ICORNTA: "ICORNTA",

  /**
   * Topical application, intracoronal (dental)
   */
  ICORONTA: "ICORONTA",

  /**
   * Topical application, intraesophageal
   */
  IESOPHTA: "IESOPHTA",

  /**
   * Topical application, intraileal
   */
  IILEALTA: "IILEALTA",

  /**
   * Topical application, intralesional
   */
  ILTOP: "ILTOP",

  /**
   * Topical application, intraluminal
   */
  ILUMTA: "ILUMTA",

  /**
   * Topical application, intraocular
   */
  IOTOP: "IOTOP",

  /**
   * Topical application, laryngeal
   */
  LARYNGTA: "LARYNGTA",

  /**
   * Topical application, mucous membrane
   */
  MUC: "MUC",

  /**
   * Topical application, nail
   */
  NAIL: "NAIL",

  /**
   * Topical application, nasal
   */
  NASAL: "NASAL",

  /**
   * Topical application, ophthalmic
   */
  OPTHALTA: "OPTHALTA",

  /**
   * Topical application, oral
   */
  ORALTA: "ORALTA",

  /**
   * Topical application, oromucosal
   */
  ORMUC: "ORMUC",

  /**
   * Topical application, oropharyngeal
   */
  OROPHARTA: "OROPHARTA",

  /**
   * Topical application, perianal
   */
  PERIANAL: "PERIANAL",

  /**
   * Topical application, perineal
   */
  PERINEAL: "PERINEAL",

  /**
   * Topical application, periodontal
   */
  PDONTTA: "PDONTTA",

  /**
   * Topical application, rectal
   */
  RECTAL: "RECTAL",

  /**
   * Topical application, scalp
   */
  SCALP: "SCALP",

  /**
   * Occlusive dressing technique
   */
  OCDRESTA: "OCDRESTA",

  /**
   * Topical application, skin
   */
  SKIN: "SKIN",

  /**
   * Subconjunctival
   */
  SUBCONJTA: "SUBCONJTA",

  /**
   * Topical application, transmucosal
   */
  TMUCTA: "TMUCTA",

  /**
   * Topical application, vaginal
   */
  VAGINS: "VAGINS",

  /**
   * Insufflation
   */
  INSUF: "INSUF",

  /**
   * Transdermal
   */
  TRNSDERM: "TRNSDERM",

  /**
   * InfiltrationRoute
   */
  _InfiltrationRoute: "_InfiltrationRoute",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RouteByMethodCode =
  typeof RouteByMethodCode[keyof typeof RouteByMethodCode];
