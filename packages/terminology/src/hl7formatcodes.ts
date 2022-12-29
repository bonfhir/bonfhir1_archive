/**
 * The HL7-FormatCodes value set is defined to be the set of FormatCode(s) defined by implementation guides published by HL7 and other SDOs. The use of a formatCode from the FormatCodes value set specifies the technical format that a document conforms to. The formatCode is a further specialization more detailed than the mime-type. The formatCode provides sufficient information to allow any potential document content consumer to know if it can process and/or display the content of the document based on the document encoding, structure and template conformance indicated by the formatCode. The set of formatCodes is intended to be extensible. The Content Logical Description is defined intentionally to permit formatCodes defined by other Standards Development Organizations to be added by inclusion of additional formatCode Code Systems.
 * http://terminology.hl7.org/ValueSet/v3-HL7FormatCodes
 */
export const HL7FormatCodesCode = {
  /**
   * PCC XPHR
   */
  PCCXPHR: "urn:ihe:pcc:xphr:2007",

  /**
   * PCC APS
   */
  PCCAPS: "urn:ihe:pcc:aps:2007",

  /**
   * PCC XDS-MS
   */
  PCCXDSMS: "urn:ihe:pcc:xds-ms:2007",

  /**
   * PCC EDR
   */
  PCCEDR: "urn:ihe:pcc:edr:2007",

  /**
   * PCC EDES
   */
  PCCEDES: "urn:ihe:pcc:edes:2007",

  /**
   * PCC APR HANDP
   */
  PCCAPRHANDP: "urn:ihe:pcc:apr:handp:2008",

  /**
   * PCC APR LAB
   */
  PCCAPRLAB: "urn:ihe:pcc:apr:lab:2008",

  /**
   * PCC APR EDU
   */
  PCCAPREDU: "urn:ihe:pcc:apr:edu:2008",

  /**
   * PCC CRC
   */
  PCCCRC: "urn:ihe:pcc:crc:2008",

  /**
   * Care Management (CM)
   */
  CareManagementCM: "urn:ihe:pcc:cm:2008",

  /**
   * Immunization Registry Content (IRC)
   */
  ImmunizationRegistryContentIRC: "urn:ihe:pcc:ic:2008",

  /**
   * PCC TN
   */
  PCCTN: "urn:ihe:pcc:tn:2007",

  /**
   * PCC NN
   */
  PCCNN: "urn:ihe:pcc:nn:2007",

  /**
   * PCC CTN
   */
  PCCCTN: "urn:ihe:pcc:ctn:2007",

  /**
   * PCC EDPN
   */
  PCCEDPN: "urn:ihe:pcc:edpn:2007",

  /**
   * PCC HP
   */
  PCCHP: "urn:ihe:pcc:hp:2008",

  /**
   * PCC LDHP
   */
  PCCLDHP: "urn:ihe:pcc:ldhp:2009",

  /**
   * PCC LDS
   */
  PCCLDS: "urn:ihe:pcc:lds:2009",

  /**
   * PCC MDS
   */
  PCCMDS: "urn:ihe:pcc:mds:2009",

  /**
   * PCC NDS
   */
  PCCNDS: "urn:ihe:pcc:nds:2010",

  /**
   * PCC PPVS
   */
  PCCPPVS: "urn:ihe:pcc:ppvs:2010",

  /**
   * PCC TRS
   */
  PCCTRS: "urn:ihe:pcc:trs:2011",

  /**
   * PCC ETS
   */
  PCCETS: "urn:ihe:pcc:ets:2011",

  /**
   * PCC ITS
   */
  PCCITS: "urn:ihe:pcc:its:2011",

  /**
   * PCC RIPT
   */
  PCCRIPT: "urn:ihe:pcc:ript:2017",

  /**
   * PCC PCS-CS
   */
  PCCPCSCS: "urn:ihe:pcc:pcs-cs:2018",

  /**
   * PCC PCS-CR
   */
  PCCPCSCR: "urn:ihe:pcc:pcs-cr:2018",

  /**
   * PCC IPS
   */
  PCCIPS: "urn:ihe:pcc:ips:2020",

  /**
   * PCC 360X Referral Request
   */
  PCC360XReferralRequest: "urn:ihe:pcc:360x:hl7:OMG:O19:2017",

  /**
   * PCC 360X Referral Status Update
   */
  PCC360XReferralStatusUpdate: "urn:ihe:pcc:360x:hl7:OSU:O51:2017",

  /**
   * PCC 360X Appointment Notification
   */
  PCC360XAppointmentNotification: "urn:ihe:pcc:360x:hl7:SIU:S12:2017",

  /**
   * PCC 360X Appointment Reschedule Notification
   */
  PCC360XAppointmentRescheduleNotification: "urn:ihe:pcc:360x:hl7:SIU:S13:2017",

  /**
   * PCC 360X Appointment Cancel Notification
   */
  PCC360XAppointmentCancelNotification: "urn:ihe:pcc:360x:hl7:SIU:S15:2017",

  /**
   * PCC 360X Appointment No-show Notification
   */
  PCC360XAppointmentNoshowNotification: "urn:ihe:pcc:360x:hl7:SIU:S26:2017",

  /**
   * ITI BPPC
   */
  ITIBPPC: "urn:ihe:iti:bppc:2007",

  /**
   * ITI BPPC-SD
   */
  ITIBPPCSD: "urn:ihe:iti:bppc-sd:2007",

  /**
   * ITI XDS-SD PDF
   */
  ITIXDSSDPDF: "urn:ihe:iti:xds-sd:pdf:2008",

  /**
   * ITI XDS-SD TEXT
   */
  ITIXDSSDTEXT: "urn:ihe:iti:xds-sd:text:2008",

  /**
   * ITI XDW
   */
  ITIXDW: "urn:ihe:iti:xdw:2011:workflowDoc",

  /**
   * ITI DSG Detached
   */
  ITIDSGDetached: "urn:ihe:iti:dsg:detached:2014",

  /**
   * ITI DSG Enveloping
   */
  ITIDSGEnveloping: "urn:ihe:iti:dsg:enveloping:2014",

  /**
   * ITI APPC
   */
  ITIAPPC: "urn:ihe:iti:appc:2016:consent",

  /**
   * mimeType Sufficient
   */
  mimeTypeSufficient: "urn:ihe:iti:xds:2017:mimeTypeSufficient",

  /**
   * LAB XD-LAB
   */
  LABXDLAB: "urn:ihe:lab:xd-lab:2008",

  /**
   * RAD TEXT
   */
  RADTEXT: "urn:ihe:rad:TEXT",

  /**
   * RAD PDF
   */
  RADPDF: "urn:ihe:rad:PDF",

  /**
   * RAD CDA
   */
  RADCDA: "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",

  /**
   * CARD Imaging
   */
  CARDImaging: "urn:ihe:card:imaging:2011",

  /**
   * CARD CRC
   */
  CARDCRC: "urn:ihe:card:CRC:2012",

  /**
   * CARD EPRC-IE
   */
  CARDEPRCIE: "urn:ihe:card:EPRC-IE:2014",

  /**
   * CARD CPN
   */
  CARDCPN: "urn:ihe:card:CPN:2017",

  /**
   * DENT TEXT
   */
  DENTTEXT: "urn:ihe:dent:TEXT",

  /**
   * DENT PDF
   */
  DENTPDF: "urn:ihe:dent:PDF",

  /**
   * DENT CDA
   */
  DENTCDA: "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",

  /**
   * PALM APSR
   */
  PALMAPSR: "urn:ihe.palm:apsr:2016",

  /**
   * Pharmacy PRE
   */
  PharmacyPRE: "urn:ihe:pharm:pre:2010",

  /**
   * Pharmacy PADV
   */
  PharmacyPADV: "urn:ihe:pharm:padv:2010",

  /**
   * Pharmacy DIS
   */
  PharmacyDIS: "urn:ihe:pharm:dis:2010",

  /**
   * Pharmacy PML
   */
  PharmacyPML: "urn:ihe:pharm:pml:2013",

  /**
   * Pharmacy MTP
   */
  PharmacyMTP: "urn:ihe:pharm:mtp:2015",

  /**
   * Pharmacy CMA
   */
  PharmacyCMA: "urn:ihe:pharm:cma:2017",

  /**
   * QRPH CRD
   */
  QRPHCRD: "urn:ihe:qrph:crd:2008",

  /**
   * QRPH DSC
   */
  QRPHDSC: "urn:ihe:qrph:dsc:2008",

  /**
   * QRPH MCH
   */
  QRPHMCH: "urn:ihe:qrph:mch:2009",

  /**
   * QRPH HBS
   */
  QRPHHBS: "urn:ihe:qrph:hbs:2009",

  /**
   * QRPH PRPH-Ca
   */
  QRPHPRPHCa: "urn:ihe:qrph:prph:2009",

  /**
   * QRPH EHCP
   */
  QRPHEHCP: "urn:ihe:qrph:ehcp:2010",

  /**
   * QRPH QMD-EH
   */
  QRPHQMDEH: "urn:ihe:qrph:qmd-eh:2010",

  /**
   * QRPH QME-EH
   */
  QRPHQMEEH: "urn:ihe:qrph:qme-eh:2010",

  /**
   * QRPH BFDR
   */
  QRPHBFDR: "urn:ihe:qrph:bfdr:2011",

  /**
   * QRPH LDS-VR
   */
  QRPHLDSVR: "urn:ihe:qrph:LDS-VR:2013",

  /**
   * QRPH BFDR Birth CDA document
   */
  QRPHBFDRBirthCDAdocument: "urn:ihe:qrph:BFDR-Birth:2014",

  /**
   * QRPH BFDR Death CDA document
   */
  QRPHBFDRDeathCDAdocument: "urn:ihe:qrph:BFDR-FDeath:2014",

  /**
   * QRPH CRPC
   */
  QRPHCRPC: "urn:ihe:qrph:crpc:2012",

  /**
   * QRPH VRDR
   */
  QRPHVRDR: "urn:ihe:qrph:vrdr:2013",

  /**
   * QRPH MS-VRDR
   */
  QRPHMSVRDR: "urn:ihe:qrph:ms-vrdr:2013",

  /**
   * QRPH HW
   */
  QRPHHW: "urn:ihe:qrph:hw:2013",

  /**
   * QRPH EHDI
   */
  QRPHEHDI: "urn:ihe:qrph:ehdi:2014",

  /**
   * QRPH EHDI NHS Cat I
   */
  QRPHEHDINHSCatI: "urn:ihe:qrph:NHS-Catl-UV:2015",

  /**
   * QRPH EHDI NHS Cat III
   */
  QRPHEHDINHSCatIII: "urn:ihe:qrph:NHS-CatIII-UV:2015",

  /**
   * QRPH HPoC US
   */
  QRPHHPoCUS: "urn:ihe:qrph:HPoCUS:2014",

  /**
   * QRPH HPoC UV
   */
  QRPHHPoCUV: "urn:ihe:qrph:HPoCUV:2014",

  /**
   * QRPH FP
   */
  QRPHFP: "urn:ihe:qrph:fp:2014",

  /**
   * QRPH FP V2
   */
  QRPHFPV2: "urn:ihe:qrph:fp:2017",

  /**
   * QRPH EHDI-WD
   */
  QRPHEHDIWD: "urn:ihe:qrph:ehdiwd:2013",

  /**
   * QRPH PRQ
   */
  QRPHPRQ: "urn:ihe:qrph:prq:2019",

  /**
   * For documents following C-CDA 1.1 constraints using a structured body.
   */
  FordocumentsfollowingCCDA11constraintsusingastructuredbody:
    "urn:hl7-org:sdwg:ccda-structuredBody:1.1",

  /**
   * For documents following C-CDA 1.1 constraints using a non structured body.
   */
  FordocumentsfollowingCCDA11constraintsusinganonstructuredbody:
    "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",

  /**
   * For documents following C-CDA 2.1 constraints using a structured body.
   */
  FordocumentsfollowingCCDA21constraintsusingastructuredbody:
    "urn:hl7-org:sdwg:ccda-structuredBody:2.1",

  /**
   * For documents following C-CDA 2.1 constraints using a non structured body.
   */
  FordocumentsfollowingCCDA21constraintsusinganonstructuredbody:
    "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",

  /**
   * ccda-structuredBody:1.1
   */
  ccdastructuredBody11: "urn:hl7-org:sdwg:ccda-structuredBody:1.1",

  /**
   * ccda-nonXMLBody:1.1
   */
  ccdanonXMLBody11: "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",

  /**
   * ccda-structuredBody:2.1
   */
  ccdastructuredBody21: "urn:hl7-org:sdwg:ccda-structuredBody:2.1",

  /**
   * ccda-nonXMLBody:2.1
   */
  ccdanonXMLBody21: "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",

  /**
   * pacp-structuredBody:1.0
   */
  pacpstructuredBody10: "urn:hl7-org:sdwg:pacp-structuredBody:1.0",

  /**
   * pacp-nonXMLBody:1.0
   */
  pacpnonXMLBody10: "urn:hl7-org:sdwg:pacp-nonXMLBody:1.0",

  /**
   * pacp-structuredBody:1.1
   */
  pacpstructuredBody11: "urn:hl7-org:sdwg:pacp-structuredBody:1.1",

  /**
   * pacp-nonXMLBody:1.1
   */
  pacpnonXMLBody11: "urn:hl7-org:sdwg:pacp-nonXMLBody:1.1",

  /**
   * pacp-structuredBody:1.2
   */
  pacpstructuredBody12: "urn:hl7-org:sdwg:pacp-structuredBody:1.2",

  /**
   * pacp-nonXMLBody:1.2
   */
  pacpnonXMLBody12: "urn:hl7-org:sdwg:pacp-nonXMLBody:1.2",

  /**
   * pacp-structuredBody:1.3
   */
  pacpstructuredBody13: "urn:hl7-org:sdwg:pacp-structuredBody:1.3",

  /**
   * pacp-nonXMLBody:1.3
   */
  pacpnonXMLBody13: "urn:hl7-org:sdwg:pacp-nonXMLBody:1.3",

  /**
   * ccda-structuredBody:2.2
   */
  ccdastructuredBody22: "urn:hl7-org:sdwg:ccda-structuredBody:2.2",

  /**
   * ccda-nonXMLBody:2.2
   */
  ccdanonXMLBody22: "urn:hl7-org:sdwg:ccda-nonXMLBody:2.2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7FormatCodesCode =
  typeof HL7FormatCodesCode[keyof typeof HL7FormatCodesCode];
