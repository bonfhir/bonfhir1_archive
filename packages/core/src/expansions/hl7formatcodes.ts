/**
 * The HL7-FormatCodes value set is defined to be the set of FormatCode(s) defined by implementation guides published by HL7 and other SDOs. The use of a formatCode from the FormatCodes value set specifies the technical format that a document conforms to. The formatCode is a further specialization more detailed than the mime-type. The formatCode provides sufficient information to allow any potential document content consumer to know if it can process and/or display the content of the document based on the document encoding, structure and template conformance indicated by the formatCode. The set of formatCodes is intended to be extensible. The Content Logical Description is defined intentionally to permit formatCodes defined by other Standards Development Organizations to be added by inclusion of additional formatCode Code Systems.
 * http://terminology.hl7.org/ValueSet/v3-HL7FormatCodes
 */
export const HL7FormatCodesCode = {
  /**
   * PCC XPHR
   */
  "urn:ihe:pcc:xphr:2007": "urn:ihe:pcc:xphr:2007",

  /**
   * PCC APS
   */
  "urn:ihe:pcc:aps:2007": "urn:ihe:pcc:aps:2007",

  /**
   * PCC XDS-MS
   */
  "urn:ihe:pcc:xds-ms:2007": "urn:ihe:pcc:xds-ms:2007",

  /**
   * PCC EDR
   */
  "urn:ihe:pcc:edr:2007": "urn:ihe:pcc:edr:2007",

  /**
   * PCC EDES
   */
  "urn:ihe:pcc:edes:2007": "urn:ihe:pcc:edes:2007",

  /**
   * PCC APR HANDP
   */
  "urn:ihe:pcc:apr:handp:2008": "urn:ihe:pcc:apr:handp:2008",

  /**
   * PCC APR LAB
   */
  "urn:ihe:pcc:apr:lab:2008": "urn:ihe:pcc:apr:lab:2008",

  /**
   * PCC APR EDU
   */
  "urn:ihe:pcc:apr:edu:2008": "urn:ihe:pcc:apr:edu:2008",

  /**
   * PCC CRC
   */
  "urn:ihe:pcc:crc:2008": "urn:ihe:pcc:crc:2008",

  /**
   * Care Management (CM)
   */
  "urn:ihe:pcc:cm:2008": "urn:ihe:pcc:cm:2008",

  /**
   * Immunization Registry Content (IRC)
   */
  "urn:ihe:pcc:ic:2008": "urn:ihe:pcc:ic:2008",

  /**
   * PCC TN
   */
  "urn:ihe:pcc:tn:2007": "urn:ihe:pcc:tn:2007",

  /**
   * PCC NN
   */
  "urn:ihe:pcc:nn:2007": "urn:ihe:pcc:nn:2007",

  /**
   * PCC CTN
   */
  "urn:ihe:pcc:ctn:2007": "urn:ihe:pcc:ctn:2007",

  /**
   * PCC EDPN
   */
  "urn:ihe:pcc:edpn:2007": "urn:ihe:pcc:edpn:2007",

  /**
   * PCC HP
   */
  "urn:ihe:pcc:hp:2008": "urn:ihe:pcc:hp:2008",

  /**
   * PCC LDHP
   */
  "urn:ihe:pcc:ldhp:2009": "urn:ihe:pcc:ldhp:2009",

  /**
   * PCC LDS
   */
  "urn:ihe:pcc:lds:2009": "urn:ihe:pcc:lds:2009",

  /**
   * PCC MDS
   */
  "urn:ihe:pcc:mds:2009": "urn:ihe:pcc:mds:2009",

  /**
   * PCC NDS
   */
  "urn:ihe:pcc:nds:2010": "urn:ihe:pcc:nds:2010",

  /**
   * PCC PPVS
   */
  "urn:ihe:pcc:ppvs:2010": "urn:ihe:pcc:ppvs:2010",

  /**
   * PCC TRS
   */
  "urn:ihe:pcc:trs:2011": "urn:ihe:pcc:trs:2011",

  /**
   * PCC ETS
   */
  "urn:ihe:pcc:ets:2011": "urn:ihe:pcc:ets:2011",

  /**
   * PCC ITS
   */
  "urn:ihe:pcc:its:2011": "urn:ihe:pcc:its:2011",

  /**
   * PCC RIPT
   */
  "urn:ihe:pcc:ript:2017": "urn:ihe:pcc:ript:2017",

  /**
   * PCC PCS-CS
   */
  "urn:ihe:pcc:pcs-cs:2018": "urn:ihe:pcc:pcs-cs:2018",

  /**
   * PCC PCS-CR
   */
  "urn:ihe:pcc:pcs-cr:2018": "urn:ihe:pcc:pcs-cr:2018",

  /**
   * PCC IPS
   */
  "urn:ihe:pcc:ips:2020": "urn:ihe:pcc:ips:2020",

  /**
   * PCC 360X Referral Request
   */
  "urn:ihe:pcc:360x:hl7:OMG:O19:2017": "urn:ihe:pcc:360x:hl7:OMG:O19:2017",

  /**
   * PCC 360X Referral Status Update
   */
  "urn:ihe:pcc:360x:hl7:OSU:O51:2017": "urn:ihe:pcc:360x:hl7:OSU:O51:2017",

  /**
   * PCC 360X Appointment Notification
   */
  "urn:ihe:pcc:360x:hl7:SIU:S12:2017": "urn:ihe:pcc:360x:hl7:SIU:S12:2017",

  /**
   * PCC 360X Appointment Reschedule Notification
   */
  "urn:ihe:pcc:360x:hl7:SIU:S13:2017": "urn:ihe:pcc:360x:hl7:SIU:S13:2017",

  /**
   * PCC 360X Appointment Cancel Notification
   */
  "urn:ihe:pcc:360x:hl7:SIU:S15:2017": "urn:ihe:pcc:360x:hl7:SIU:S15:2017",

  /**
   * PCC 360X Appointment No-show Notification
   */
  "urn:ihe:pcc:360x:hl7:SIU:S26:2017": "urn:ihe:pcc:360x:hl7:SIU:S26:2017",

  /**
   * ITI BPPC
   */
  "urn:ihe:iti:bppc:2007": "urn:ihe:iti:bppc:2007",

  /**
   * ITI BPPC-SD
   */
  "urn:ihe:iti:bppc-sd:2007": "urn:ihe:iti:bppc-sd:2007",

  /**
   * ITI XDS-SD PDF
   */
  "urn:ihe:iti:xds-sd:pdf:2008": "urn:ihe:iti:xds-sd:pdf:2008",

  /**
   * ITI XDS-SD TEXT
   */
  "urn:ihe:iti:xds-sd:text:2008": "urn:ihe:iti:xds-sd:text:2008",

  /**
   * ITI XDW
   */
  "urn:ihe:iti:xdw:2011:workflowDoc": "urn:ihe:iti:xdw:2011:workflowDoc",

  /**
   * ITI DSG Detached
   */
  "urn:ihe:iti:dsg:detached:2014": "urn:ihe:iti:dsg:detached:2014",

  /**
   * ITI DSG Enveloping
   */
  "urn:ihe:iti:dsg:enveloping:2014": "urn:ihe:iti:dsg:enveloping:2014",

  /**
   * ITI APPC
   */
  "urn:ihe:iti:appc:2016:consent": "urn:ihe:iti:appc:2016:consent",

  /**
   * mimeType Sufficient
   */
  "urn:ihe:iti:xds:2017:mimeTypeSufficient":
    "urn:ihe:iti:xds:2017:mimeTypeSufficient",

  /**
   * LAB XD-LAB
   */
  "urn:ihe:lab:xd-lab:2008": "urn:ihe:lab:xd-lab:2008",

  /**
   * RAD TEXT
   */
  "urn:ihe:rad:TEXT": "urn:ihe:rad:TEXT",

  /**
   * RAD PDF
   */
  "urn:ihe:rad:PDF": "urn:ihe:rad:PDF",

  /**
   * RAD CDA
   */
  "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013":
    "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",

  /**
   * CARD Imaging
   */
  "urn:ihe:card:imaging:2011": "urn:ihe:card:imaging:2011",

  /**
   * CARD CRC
   */
  "urn:ihe:card:CRC:2012": "urn:ihe:card:CRC:2012",

  /**
   * CARD EPRC-IE
   */
  "urn:ihe:card:EPRC-IE:2014": "urn:ihe:card:EPRC-IE:2014",

  /**
   * CARD CPN
   */
  "urn:ihe:card:CPN:2017": "urn:ihe:card:CPN:2017",

  /**
   * DENT TEXT
   */
  "urn:ihe:dent:TEXT": "urn:ihe:dent:TEXT",

  /**
   * DENT PDF
   */
  "urn:ihe:dent:PDF": "urn:ihe:dent:PDF",

  /**
   * DENT CDA
   */
  "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013":
    "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",

  /**
   * PALM APSR
   */
  "urn:ihe.palm:apsr:2016": "urn:ihe.palm:apsr:2016",

  /**
   * Pharmacy PRE
   */
  "urn:ihe:pharm:pre:2010": "urn:ihe:pharm:pre:2010",

  /**
   * Pharmacy PADV
   */
  "urn:ihe:pharm:padv:2010": "urn:ihe:pharm:padv:2010",

  /**
   * Pharmacy DIS
   */
  "urn:ihe:pharm:dis:2010": "urn:ihe:pharm:dis:2010",

  /**
   * Pharmacy PML
   */
  "urn:ihe:pharm:pml:2013": "urn:ihe:pharm:pml:2013",

  /**
   * Pharmacy MTP
   */
  "urn:ihe:pharm:mtp:2015": "urn:ihe:pharm:mtp:2015",

  /**
   * Pharmacy CMA
   */
  "urn:ihe:pharm:cma:2017": "urn:ihe:pharm:cma:2017",

  /**
   * QRPH CRD
   */
  "urn:ihe:qrph:crd:2008": "urn:ihe:qrph:crd:2008",

  /**
   * QRPH DSC
   */
  "urn:ihe:qrph:dsc:2008": "urn:ihe:qrph:dsc:2008",

  /**
   * QRPH MCH
   */
  "urn:ihe:qrph:mch:2009": "urn:ihe:qrph:mch:2009",

  /**
   * QRPH HBS
   */
  "urn:ihe:qrph:hbs:2009": "urn:ihe:qrph:hbs:2009",

  /**
   * QRPH PRPH-Ca
   */
  "urn:ihe:qrph:prph:2009": "urn:ihe:qrph:prph:2009",

  /**
   * QRPH EHCP
   */
  "urn:ihe:qrph:ehcp:2010": "urn:ihe:qrph:ehcp:2010",

  /**
   * QRPH QMD-EH
   */
  "urn:ihe:qrph:qmd-eh:2010": "urn:ihe:qrph:qmd-eh:2010",

  /**
   * QRPH QME-EH
   */
  "urn:ihe:qrph:qme-eh:2010": "urn:ihe:qrph:qme-eh:2010",

  /**
   * QRPH BFDR
   */
  "urn:ihe:qrph:bfdr:2011": "urn:ihe:qrph:bfdr:2011",

  /**
   * QRPH LDS-VR
   */
  "urn:ihe:qrph:LDS-VR:2013": "urn:ihe:qrph:LDS-VR:2013",

  /**
   * QRPH BFDR Birth CDA document
   */
  "urn:ihe:qrph:BFDR-Birth:2014": "urn:ihe:qrph:BFDR-Birth:2014",

  /**
   * QRPH BFDR Death CDA document
   */
  "urn:ihe:qrph:BFDR-FDeath:2014": "urn:ihe:qrph:BFDR-FDeath:2014",

  /**
   * QRPH CRPC
   */
  "urn:ihe:qrph:crpc:2012": "urn:ihe:qrph:crpc:2012",

  /**
   * QRPH VRDR
   */
  "urn:ihe:qrph:vrdr:2013": "urn:ihe:qrph:vrdr:2013",

  /**
   * QRPH MS-VRDR
   */
  "urn:ihe:qrph:ms-vrdr:2013": "urn:ihe:qrph:ms-vrdr:2013",

  /**
   * QRPH HW
   */
  "urn:ihe:qrph:hw:2013": "urn:ihe:qrph:hw:2013",

  /**
   * QRPH EHDI
   */
  "urn:ihe:qrph:ehdi:2014": "urn:ihe:qrph:ehdi:2014",

  /**
   * QRPH EHDI NHS Cat I
   */
  "urn:ihe:qrph:NHS-Catl-UV:2015": "urn:ihe:qrph:NHS-Catl-UV:2015",

  /**
   * QRPH EHDI NHS Cat III
   */
  "urn:ihe:qrph:NHS-CatIII-UV:2015": "urn:ihe:qrph:NHS-CatIII-UV:2015",

  /**
   * QRPH HPoC US
   */
  "urn:ihe:qrph:HPoCUS:2014": "urn:ihe:qrph:HPoCUS:2014",

  /**
   * QRPH HPoC UV
   */
  "urn:ihe:qrph:HPoCUV:2014": "urn:ihe:qrph:HPoCUV:2014",

  /**
   * QRPH FP
   */
  "urn:ihe:qrph:fp:2014": "urn:ihe:qrph:fp:2014",

  /**
   * QRPH FP V2
   */
  "urn:ihe:qrph:fp:2017": "urn:ihe:qrph:fp:2017",

  /**
   * QRPH EHDI-WD
   */
  "urn:ihe:qrph:ehdiwd:2013": "urn:ihe:qrph:ehdiwd:2013",

  /**
   * QRPH PRQ
   */
  "urn:ihe:qrph:prq:2019": "urn:ihe:qrph:prq:2019",

  /**
   * For documents following C-CDA 1.1 constraints using a structured body.
   */
  "urn:hl7-org:sdwg:ccda-structuredBody:1.1":
    "urn:hl7-org:sdwg:ccda-structuredBody:1.1",

  /**
   * For documents following C-CDA 1.1 constraints using a non structured body.
   */
  "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1":
    "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",

  /**
   * For documents following C-CDA 2.1 constraints using a structured body.
   */
  "urn:hl7-org:sdwg:ccda-structuredBody:2.1":
    "urn:hl7-org:sdwg:ccda-structuredBody:2.1",

  /**
   * For documents following C-CDA 2.1 constraints using a non structured body.
   */
  "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1":
    "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",

  /**
   * ccda-structuredBody:1.1
   */
  "urn:hl7-org:sdwg:ccda-structuredBody:1.1":
    "urn:hl7-org:sdwg:ccda-structuredBody:1.1",

  /**
   * ccda-nonXMLBody:1.1
   */
  "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1":
    "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",

  /**
   * ccda-structuredBody:2.1
   */
  "urn:hl7-org:sdwg:ccda-structuredBody:2.1":
    "urn:hl7-org:sdwg:ccda-structuredBody:2.1",

  /**
   * ccda-nonXMLBody:2.1
   */
  "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1":
    "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",

  /**
   * pacp-structuredBody:1.0
   */
  "urn:hl7-org:sdwg:pacp-structuredBody:1.0":
    "urn:hl7-org:sdwg:pacp-structuredBody:1.0",

  /**
   * pacp-nonXMLBody:1.0
   */
  "urn:hl7-org:sdwg:pacp-nonXMLBody:1.0":
    "urn:hl7-org:sdwg:pacp-nonXMLBody:1.0",

  /**
   * pacp-structuredBody:1.1
   */
  "urn:hl7-org:sdwg:pacp-structuredBody:1.1":
    "urn:hl7-org:sdwg:pacp-structuredBody:1.1",

  /**
   * pacp-nonXMLBody:1.1
   */
  "urn:hl7-org:sdwg:pacp-nonXMLBody:1.1":
    "urn:hl7-org:sdwg:pacp-nonXMLBody:1.1",

  /**
   * pacp-structuredBody:1.2
   */
  "urn:hl7-org:sdwg:pacp-structuredBody:1.2":
    "urn:hl7-org:sdwg:pacp-structuredBody:1.2",

  /**
   * pacp-nonXMLBody:1.2
   */
  "urn:hl7-org:sdwg:pacp-nonXMLBody:1.2":
    "urn:hl7-org:sdwg:pacp-nonXMLBody:1.2",

  /**
   * pacp-structuredBody:1.3
   */
  "urn:hl7-org:sdwg:pacp-structuredBody:1.3":
    "urn:hl7-org:sdwg:pacp-structuredBody:1.3",

  /**
   * pacp-nonXMLBody:1.3
   */
  "urn:hl7-org:sdwg:pacp-nonXMLBody:1.3":
    "urn:hl7-org:sdwg:pacp-nonXMLBody:1.3",

  /**
   * ccda-structuredBody:2.2
   */
  "urn:hl7-org:sdwg:ccda-structuredBody:2.2":
    "urn:hl7-org:sdwg:ccda-structuredBody:2.2",

  /**
   * ccda-nonXMLBody:2.2
   */
  "urn:hl7-org:sdwg:ccda-nonXMLBody:2.2":
    "urn:hl7-org:sdwg:ccda-nonXMLBody:2.2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7FormatCodesCode =
  typeof HL7FormatCodesCode[keyof typeof HL7FormatCodesCode];
