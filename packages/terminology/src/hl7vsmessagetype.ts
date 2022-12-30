/**
 * Concepts which specify message types for HL7 Version 2.x messaging.
 * http://terminology.hl7.org/ValueSet/v2-0076
 */
export const Hl7VSMessageTypeCode = {
  /**
   * General acknowledgment message
   */
  ACK: "ACK",

  /**
   * ADT response
   */
  ADR: "ADR",

  /**
   * Ancillary RPT (display) (for backward compatibility only)
   */
  ARD: "ARD",

  /**
   * ADT message
   */
  ADT: "ADT",

  /**
   * Add/change billing account
   */
  BAR: "BAR",

  /**
   * Blood product dispense status message
   */
  BPS: "BPS",

  /**
   * Cancel query
   */
  CNQ: "CNQ",

  /**
   * Blood product dispense status acknowledgement message
   */
  BRP: "BRP",

  /**
   * Blood product transfusion/disposition acknowledgement message
   */
  BRT: "BRT",

  /**
   * Blood product transfusion/disposition message
   */
  BTS: "BTS",

  /**
   * Collaborative Care Fetch
   */
  CCF: "CCF",

  /**
   * Collaborative Care Information
   */
  CCI: "CCI",

  /**
   * Collaborative Care Message
   */
  CCM: "CCM",

  /**
   * Collaborative Care Referral
   */
  CCQ: "CCQ",

  /**
   * Event replay query
   */
  ERQ: "ERQ",

  /**
   * Collaborative Care Referral
   */
  CCU: "CCU",

  /**
   * Collaborative Care Referral
   */
  CQU: "CQU",

  /**
   * Clinical study registration message
   */
  CRM: "CRM",

  /**
   * Unsolicited study data message
   */
  CSU: "CSU",

  /**
   * Enhanced display response
   */
  EDR: "EDR",

  /**
   * Create Donor Record
   */
  DBC: "DBC",

  /**
   * Embedded query language query
   */
  EQQ: "EQQ",

  /**
   * Update Donor Record
   */
  DBU: "DBU",

  /**
   * Event replay response
   */
  ERP: "ERP",

  /**
   * Donor Eligibility
   */
  DEL: "DEL",

  /**
   * Donor Eligibility Observation
   */
  DEO: "DEO",

  /**
   * Donor Eligibility Request
   */
  DER: "DER",

  /**
   * Detail financial transactions
   */
  DFT: "DFT",

  /**
   * Document response
   */
  DOC: "DOC",

  /**
   * Donation Procedure
   */
  DPR: "DPR",

  /**
   * Donor Request to Collect
   */
  DRC: "DRC",

  /**
   * Display response
   */
  DSR: "DSR",

  /**
   * Delayed Acknowledgment (Retained for backward compatibility only)
   */
  MCF: "MCF",

  /**
   * Automated equipment command message
   */
  EAC: "EAC",

  /**
   * Automated equipment notification message
   */
  EAN: "EAN",

  /**
   * Automated equipment response message
   */
  EAR: "EAR",

  /**
   * Health Care Invoice
   */
  EHC: "EHC",

  /**
   * Automated equipment status update acknowledgment message
   */
  ESR: "ESR",

  /**
   * Automated equipment status update message
   */
  ESU: "ESU",

  /**
   * Automated equipment inventory request message
   */
  INR: "INR",

  /**
   * Automated equipment inventory update message
   */
  INU: "INU",

  /**
   * Automated equipment log/service request message
   */
  LSR: "LSR",

  /**
   * Automated equipment log/service update message
   */
  LSU: "LSU",

  /**
   * Medical document management
   */
  MDM: "MDM",

  /**
   * Master files delayed application acknowledgment
   */
  MFD: "MFD",

  /**
   * Master files application acknowledgment
   */
  MFK: "MFK",

  /**
   * Master files notification
   */
  MFN: "MFN",

  /**
   * Master files query
   */
  MFQ: "MFQ",

  /**
   * Master files response
   */
  MFR: "MFR",

  /**
   * Application management data message
   */
  NMD: "NMD",

  /**
   * Application management query message
   */
  NMQ: "NMQ",

  /**
   * Application management response message
   */
  NMR: "NMR",

  /**
   * Blood product order message
   */
  OMB: "OMB",

  /**
   * Dietary order
   */
  OMD: "OMD",

  /**
   * General clinical order message
   */
  OMG: "OMG",

  /**
   * Imaging order
   */
  OMI: "OMI",

  /**
   * Request clinical information
   */
  ROC: "ROC",

  /**
   * Request pateint demographics
   */
  ROD: "ROD",

  /**
   * Laboratory order message
   */
  OML: "OML",

  /**
   * Non-stock requisition order message
   */
  OMN: "OMN",

  /**
   * Pharmacy/treatment order message
   */
  OMP: "OMP",

  /**
   * General order message with document payload
   */
  OMQ: "OMQ",

  /**
   * Stock requisition order message
   */
  OMS: "OMS",

  /**
   * Population/Location-Based Laboratory Order Message
   */
  OPL: "OPL",

  /**
   * Population/Location-Based Laboratory Order Acknowledgment Message
   */
  OPR: "OPR",

  /**
   * Unsolicited Population/Location-Based Laboratory Observation Message
   */
  OPU: "OPU",

  /**
   * Observation Report Acknowledgment
   */
  ORA: "ORA",

  /**
   * Blood product order acknowledgement message
   */
  ORB: "ORB",

  /**
   * Dietary order acknowledgment message
   */
  ORD: "ORD",

  /**
   * Query for results of observation
   */
  ORF: "ORF",

  /**
   * General clinical order acknowledgment message
   */
  ORG: "ORG",

  /**
   * Imaging order acknowledgement message
   */
  ORI: "ORI",

  /**
   * Laboratory acknowledgment message (unsolicited)
   */
  ORL: "ORL",

  /**
   * Pharmacy/treatment order message
   */
  ORM: "ORM",

  /**
   * Non-stock requisition - General order acknowledgment message
   */
  ORN: "ORN",

  /**
   * Pharmacy/treatment order acknowledgment message
   */
  ORP: "ORP",

  /**
   * General order response message response to any ORM
   */
  ORR: "ORR",

  /**
   * Stock requisition - Order acknowledgment message
   */
  ORS: "ORS",

  /**
   * Unsolicited transmission of an observation message
   */
  ORU: "ORU",

  /**
   * General Order Message with Document Payload Acknowledgement
   */
  ORX: "ORX",

  /**
   * Specimen Shipment Message
   */
  OSM: "OSM",

  /**
   * Query response for order status
   */
  OSQ: "OSQ",

  /**
   * Query response for order status
   */
  OSR: "OSR",

  /**
   * Order status update
   */
  OSU: "OSU",

  /**
   * Unsolicited laboratory observation message
   */
  OUL: "OUL",

  /**
   * Product experience message
   */
  PEX: "PEX",

  /**
   * Patient goal message
   */
  PGL: "PGL",

  /**
   * Patient insurance information
   */
  PIN: "PIN",

  /**
   * Add personnel record
   */
  PMU: "PMU",

  /**
   * Patient pathway message (goal-oriented)
   */
  PPG: "PPG",

  /**
   * Patient pathway message (problem-oriented)
   */
  PPP: "PPP",

  /**
   * Patient problem message
   */
  PPR: "PPR",

  /**
   * Patient pathway goal-oriented response
   */
  PPT: "PPT",

  /**
   * Patient goal response
   */
  PPV: "PPV",

  /**
   * Patient problem response
   */
  PRR: "PRR",

  /**
   * Patient pathway problem-oriented response
   */
  PTR: "PTR",

  /**
   * Query by parameter
   */
  QBP: "QBP",

  /**
   * Query general acknowledgment
   */
  QCK: "QCK",

  /**
   * Cancel query
   */
  QCN: "QCN",

  /**
   * Query, original mode
   */
  QRY: "QRY",

  /**
   * Create subscription
   */
  QSB: "QSB",

  /**
   * Cancel subscription/acknowledge message
   */
  QSX: "QSX",

  /**
   * Query for previous events
   */
  QVR: "QVR",

  /**
   * Pharmacy/treatment administration information
   */
  RAR: "RAR",

  /**
   * Pharmacy/treatment administration message
   */
  RAS: "RAS",

  /**
   * Return clinical information
   */
  RCI: "RCI",

  /**
   * Return clinical list
   */
  RCL: "RCL",

  /**
   * Event replay query
   */
  RQQ: "RQQ",

  /**
   * Pharmacy/treatment encoded order message
   */
  RDE: "RDE",

  /**
   * Pharmacy/treatment dispense information
   */
  RDR: "RDR",

  /**
   * Pharmacy/treatment dispense message
   */
  RDS: "RDS",

  /**
   * Display based response
   */
  RDY: "RDY",

  /**
   * Patient referral
   */
  REF: "REF",

  /**
   * Pharmacy/treatment encoded order information
   */
  RER: "RER",

  /**
   * Pharmacy/treatment dose information
   */
  RGR: "RGR",

  /**
   * Pharmacy/treatment give message
   */
  RGV: "RGV",

  /**
   * Pharmacy/treatment order response
   */
  ROR: "ROR",

  /**
   * Stored procedure request
   */
  SPQ: "SPQ",

  /**
   * Return patient authorization
   */
  RPA: "RPA",

  /**
   * Return patient information
   */
  RPI: "RPI",

  /**
   * Return patient display list
   */
  RPL: "RPL",

  /**
   * Return patient list
   */
  RPR: "RPR",

  /**
   * Request patient authorization
   */
  RQA: "RQA",

  /**
   * Request clinical information
   */
  RQC: "RQC",

  /**
   * Request patient information
   */
  RQI: "RQI",

  /**
   * Request patient demographics
   */
  RQP: "RQP",

  /**
   * Pharmacy/treatment administration acknowledgment message
   */
  RRA: "RRA",

  /**
   * Pharmacy/treatment dispense acknowledgment message
   */
  RRD: "RRD",

  /**
   * Pharmacy/treatment encoded order acknowledgment message
   */
  RRE: "RRE",

  /**
   * Pharmacy/treatment give acknowledgment message
   */
  RRG: "RRG",

  /**
   * Virtual table query
   */
  VQQ: "VQQ",

  /**
   * Return referral information
   */
  RRI: "RRI",

  /**
   * Segment pattern response
   */
  RSP: "RSP",

  /**
   * Tabular response
   */
  RTB: "RTB",

  /**
   * Notification of Anti-Microbial Device Cycle Data
   */
  SCN: "SCN",

  /**
   * Notification of Anti-Microbial Device Data
   */
  SDN: "SDN",

  /**
   * Sterilization anti-microbial device data request
   */
  SDR: "SDR",

  /**
   * Specimen Event Tracking
   */
  SET: "SET",

  /**
   * Schedule information unsolicited
   */
  SIU: "SIU",

  /**
   * Notification of New Sterilization Lot
   */
  SLN: "SLN",

  /**
   * Sterilization lot request
   */
  SLR: "SLR",

  /**
   * Sterilization anti-microbial device cycle data request
   */
  SMD: "SMD",

  /**
   * Schedule query message
   */
  SQM: "SQM",

  /**
   * Schedule query response
   */
  SQR: "SQR",

  /**
   * Schedule request message
   */
  SRM: "SRM",

  /**
   * Scheduled request response
   */
  SRR: "SRR",

  /**
   * Specimen status request message
   */
  SSR: "SSR",

  /**
   * Specimen status update message
   */
  SSU: "SSU",

  /**
   * Notification of Sterilization Configuration
   */
  STC: "STC",

  /**
   * Sterilization item request
   */
  STI: "STI",

  /**
   * Summary product experience report
   */
  SUR: "SUR",

  /**
   * Tabular data response
   */
  TBR: "TBR",

  /**
   * Automated equipment test code settings request message
   */
  TCR: "TCR",

  /**
   * Automated equipment test code settings update message
   */
  TCU: "TCU",

  /**
   * Unsolicited display update message
   */
  UDM: "UDM",

  /**
   * Query for vaccination record
   */
  VXQ: "VXQ",

  /**
   * Vaccination record response
   */
  VXR: "VXR",

  /**
   * Unsolicited vaccination record update
   */
  VXU: "VXU",

  /**
   * Response for vaccination query with multiple PID matches
   */
  VXX: "VXX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMessageTypeCode =
  typeof Hl7VSMessageTypeCode[keyof typeof Hl7VSMessageTypeCode];
