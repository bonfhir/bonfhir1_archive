/**
 * Concepts which specify message types for HL7 Version 2.x messaging.
 * http://terminology.hl7.org/ValueSet/v2-0076
 */
export const Hl7VSMessageTypeCode = {
  /**
   * General acknowledgment message
   */
  Generalacknowledgmentmessage: "ACK",

  /**
   * ADT response
   */
  ADTresponse: "ADR",

  /**
   * Ancillary RPT (display) (for backward compatibility only)
   */
  AncillaryRPTdisplayforbackwardcompatibilityonly: "ARD",

  /**
   * ADT message
   */
  ADTmessage: "ADT",

  /**
   * Add/change billing account
   */
  Addchangebillingaccount: "BAR",

  /**
   * Blood product dispense status message
   */
  Bloodproductdispensestatusmessage: "BPS",

  /**
   * Cancel query
   */
  Cancelquery: "CNQ",

  /**
   * Blood product dispense status acknowledgement message
   */
  Bloodproductdispensestatusacknowledgementmessage: "BRP",

  /**
   * Blood product transfusion/disposition acknowledgement message
   */
  Bloodproducttransfusiondispositionacknowledgementmessage: "BRT",

  /**
   * Blood product transfusion/disposition message
   */
  Bloodproducttransfusiondispositionmessage: "BTS",

  /**
   * Collaborative Care Fetch
   */
  CollaborativeCareFetch: "CCF",

  /**
   * Collaborative Care Information
   */
  CollaborativeCareInformation: "CCI",

  /**
   * Collaborative Care Message
   */
  CollaborativeCareMessage: "CCM",

  /**
   * Collaborative Care Referral
   */
  CollaborativeCareReferral: "CCQ",

  /**
   * Event replay query
   */
  Eventreplayquery: "ERQ",

  /**
   * Collaborative Care Referral
   */
  CollaborativeCareReferral: "CCU",

  /**
   * Collaborative Care Referral
   */
  CollaborativeCareReferral: "CQU",

  /**
   * Clinical study registration message
   */
  Clinicalstudyregistrationmessage: "CRM",

  /**
   * Unsolicited study data message
   */
  Unsolicitedstudydatamessage: "CSU",

  /**
   * Enhanced display response
   */
  Enhanceddisplayresponse: "EDR",

  /**
   * Create Donor Record
   */
  CreateDonorRecord: "DBC",

  /**
   * Embedded query language query
   */
  Embeddedquerylanguagequery: "EQQ",

  /**
   * Update Donor Record
   */
  UpdateDonorRecord: "DBU",

  /**
   * Event replay response
   */
  Eventreplayresponse: "ERP",

  /**
   * Donor Eligibility
   */
  DonorEligibility: "DEL",

  /**
   * Donor Eligibility Observation
   */
  DonorEligibilityObservation: "DEO",

  /**
   * Donor Eligibility Request
   */
  DonorEligibilityRequest: "DER",

  /**
   * Detail financial transactions
   */
  Detailfinancialtransactions: "DFT",

  /**
   * Document response
   */
  Documentresponse: "DOC",

  /**
   * Donation Procedure
   */
  DonationProcedure: "DPR",

  /**
   * Donor Request to Collect
   */
  DonorRequesttoCollect: "DRC",

  /**
   * Display response
   */
  Displayresponse: "DSR",

  /**
   * Delayed Acknowledgment (Retained for backward compatibility only)
   */
  DelayedAcknowledgmentRetainedforbackwardcompatibilityonly: "MCF",

  /**
   * Automated equipment command message
   */
  Automatedequipmentcommandmessage: "EAC",

  /**
   * Automated equipment notification message
   */
  Automatedequipmentnotificationmessage: "EAN",

  /**
   * Automated equipment response message
   */
  Automatedequipmentresponsemessage: "EAR",

  /**
   * Health Care Invoice
   */
  HealthCareInvoice: "EHC",

  /**
   * Automated equipment status update acknowledgment message
   */
  Automatedequipmentstatusupdateacknowledgmentmessage: "ESR",

  /**
   * Automated equipment status update message
   */
  Automatedequipmentstatusupdatemessage: "ESU",

  /**
   * Automated equipment inventory request message
   */
  Automatedequipmentinventoryrequestmessage: "INR",

  /**
   * Automated equipment inventory update message
   */
  Automatedequipmentinventoryupdatemessage: "INU",

  /**
   * Automated equipment log/service request message
   */
  Automatedequipmentlogservicerequestmessage: "LSR",

  /**
   * Automated equipment log/service update message
   */
  Automatedequipmentlogserviceupdatemessage: "LSU",

  /**
   * Medical document management
   */
  Medicaldocumentmanagement: "MDM",

  /**
   * Master files delayed application acknowledgment
   */
  Masterfilesdelayedapplicationacknowledgment: "MFD",

  /**
   * Master files application acknowledgment
   */
  Masterfilesapplicationacknowledgment: "MFK",

  /**
   * Master files notification
   */
  Masterfilesnotification: "MFN",

  /**
   * Master files query
   */
  Masterfilesquery: "MFQ",

  /**
   * Master files response
   */
  Masterfilesresponse: "MFR",

  /**
   * Application management data message
   */
  Applicationmanagementdatamessage: "NMD",

  /**
   * Application management query message
   */
  Applicationmanagementquerymessage: "NMQ",

  /**
   * Application management response message
   */
  Applicationmanagementresponsemessage: "NMR",

  /**
   * Blood product order message
   */
  Bloodproductordermessage: "OMB",

  /**
   * Dietary order
   */
  Dietaryorder: "OMD",

  /**
   * General clinical order message
   */
  Generalclinicalordermessage: "OMG",

  /**
   * Imaging order
   */
  Imagingorder: "OMI",

  /**
   * Request clinical information
   */
  Requestclinicalinformation: "ROC",

  /**
   * Request pateint demographics
   */
  Requestpateintdemographics: "ROD",

  /**
   * Laboratory order message
   */
  Laboratoryordermessage: "OML",

  /**
   * Non-stock requisition order message
   */
  Nonstockrequisitionordermessage: "OMN",

  /**
   * Pharmacy/treatment order message
   */
  Pharmacytreatmentordermessage: "OMP",

  /**
   * General order message with document payload
   */
  Generalordermessagewithdocumentpayload: "OMQ",

  /**
   * Stock requisition order message
   */
  Stockrequisitionordermessage: "OMS",

  /**
   * Population/Location-Based Laboratory Order Message
   */
  PopulationLocationBasedLaboratoryOrderMessage: "OPL",

  /**
   * Population/Location-Based Laboratory Order Acknowledgment Message
   */
  PopulationLocationBasedLaboratoryOrderAcknowledgmentMessage: "OPR",

  /**
   * Unsolicited Population/Location-Based Laboratory Observation Message
   */
  UnsolicitedPopulationLocationBasedLaboratoryObservationMessage: "OPU",

  /**
   * Observation Report Acknowledgment
   */
  ObservationReportAcknowledgment: "ORA",

  /**
   * Blood product order acknowledgement message
   */
  Bloodproductorderacknowledgementmessage: "ORB",

  /**
   * Dietary order acknowledgment message
   */
  Dietaryorderacknowledgmentmessage: "ORD",

  /**
   * Query for results of observation
   */
  Queryforresultsofobservation: "ORF",

  /**
   * General clinical order acknowledgment message
   */
  Generalclinicalorderacknowledgmentmessage: "ORG",

  /**
   * Imaging order acknowledgement message
   */
  Imagingorderacknowledgementmessage: "ORI",

  /**
   * Laboratory acknowledgment message (unsolicited)
   */
  Laboratoryacknowledgmentmessageunsolicited: "ORL",

  /**
   * Pharmacy/treatment order message
   */
  Pharmacytreatmentordermessage: "ORM",

  /**
   * Non-stock requisition - General order acknowledgment message
   */
  NonstockrequisitionGeneralorderacknowledgmentmessage: "ORN",

  /**
   * Pharmacy/treatment order acknowledgment message
   */
  Pharmacytreatmentorderacknowledgmentmessage: "ORP",

  /**
   * General order response message response to any ORM
   */
  GeneralorderresponsemessageresponsetoanyORM: "ORR",

  /**
   * Stock requisition - Order acknowledgment message
   */
  StockrequisitionOrderacknowledgmentmessage: "ORS",

  /**
   * Unsolicited transmission of an observation message
   */
  Unsolicitedtransmissionofanobservationmessage: "ORU",

  /**
   * General Order Message with Document Payload Acknowledgement
   */
  GeneralOrderMessagewithDocumentPayloadAcknowledgement: "ORX",

  /**
   * Specimen Shipment Message
   */
  SpecimenShipmentMessage: "OSM",

  /**
   * Query response for order status
   */
  Queryresponsefororderstatus: "OSQ",

  /**
   * Query response for order status
   */
  Queryresponsefororderstatus: "OSR",

  /**
   * Order status update
   */
  Orderstatusupdate: "OSU",

  /**
   * Unsolicited laboratory observation message
   */
  Unsolicitedlaboratoryobservationmessage: "OUL",

  /**
   * Product experience message
   */
  Productexperiencemessage: "PEX",

  /**
   * Patient goal message
   */
  Patientgoalmessage: "PGL",

  /**
   * Patient insurance information
   */
  Patientinsuranceinformation: "PIN",

  /**
   * Add personnel record
   */
  Addpersonnelrecord: "PMU",

  /**
   * Patient pathway message (goal-oriented)
   */
  Patientpathwaymessagegoaloriented: "PPG",

  /**
   * Patient pathway message (problem-oriented)
   */
  Patientpathwaymessageproblemoriented: "PPP",

  /**
   * Patient problem message
   */
  Patientproblemmessage: "PPR",

  /**
   * Patient pathway goal-oriented response
   */
  Patientpathwaygoalorientedresponse: "PPT",

  /**
   * Patient goal response
   */
  Patientgoalresponse: "PPV",

  /**
   * Patient problem response
   */
  Patientproblemresponse: "PRR",

  /**
   * Patient pathway problem-oriented response
   */
  Patientpathwayproblemorientedresponse: "PTR",

  /**
   * Query by parameter
   */
  Querybyparameter: "QBP",

  /**
   * Query general acknowledgment
   */
  Querygeneralacknowledgment: "QCK",

  /**
   * Cancel query
   */
  Cancelquery: "QCN",

  /**
   * Query, original mode
   */
  Queryoriginalmode: "QRY",

  /**
   * Create subscription
   */
  Createsubscription: "QSB",

  /**
   * Cancel subscription/acknowledge message
   */
  Cancelsubscriptionacknowledgemessage: "QSX",

  /**
   * Query for previous events
   */
  Queryforpreviousevents: "QVR",

  /**
   * Pharmacy/treatment administration information
   */
  Pharmacytreatmentadministrationinformation: "RAR",

  /**
   * Pharmacy/treatment administration message
   */
  Pharmacytreatmentadministrationmessage: "RAS",

  /**
   * Return clinical information
   */
  Returnclinicalinformation: "RCI",

  /**
   * Return clinical list
   */
  Returnclinicallist: "RCL",

  /**
   * Event replay query
   */
  Eventreplayquery: "RQQ",

  /**
   * Pharmacy/treatment encoded order message
   */
  Pharmacytreatmentencodedordermessage: "RDE",

  /**
   * Pharmacy/treatment dispense information
   */
  Pharmacytreatmentdispenseinformation: "RDR",

  /**
   * Pharmacy/treatment dispense message
   */
  Pharmacytreatmentdispensemessage: "RDS",

  /**
   * Display based response
   */
  Displaybasedresponse: "RDY",

  /**
   * Patient referral
   */
  Patientreferral: "REF",

  /**
   * Pharmacy/treatment encoded order information
   */
  Pharmacytreatmentencodedorderinformation: "RER",

  /**
   * Pharmacy/treatment dose information
   */
  Pharmacytreatmentdoseinformation: "RGR",

  /**
   * Pharmacy/treatment give message
   */
  Pharmacytreatmentgivemessage: "RGV",

  /**
   * Pharmacy/treatment order response
   */
  Pharmacytreatmentorderresponse: "ROR",

  /**
   * Stored procedure request
   */
  Storedprocedurerequest: "SPQ",

  /**
   * Return patient authorization
   */
  Returnpatientauthorization: "RPA",

  /**
   * Return patient information
   */
  Returnpatientinformation: "RPI",

  /**
   * Return patient display list
   */
  Returnpatientdisplaylist: "RPL",

  /**
   * Return patient list
   */
  Returnpatientlist: "RPR",

  /**
   * Request patient authorization
   */
  Requestpatientauthorization: "RQA",

  /**
   * Request clinical information
   */
  Requestclinicalinformation: "RQC",

  /**
   * Request patient information
   */
  Requestpatientinformation: "RQI",

  /**
   * Request patient demographics
   */
  Requestpatientdemographics: "RQP",

  /**
   * Pharmacy/treatment administration acknowledgment message
   */
  Pharmacytreatmentadministrationacknowledgmentmessage: "RRA",

  /**
   * Pharmacy/treatment dispense acknowledgment message
   */
  Pharmacytreatmentdispenseacknowledgmentmessage: "RRD",

  /**
   * Pharmacy/treatment encoded order acknowledgment message
   */
  Pharmacytreatmentencodedorderacknowledgmentmessage: "RRE",

  /**
   * Pharmacy/treatment give acknowledgment message
   */
  Pharmacytreatmentgiveacknowledgmentmessage: "RRG",

  /**
   * Virtual table query
   */
  Virtualtablequery: "VQQ",

  /**
   * Return referral information
   */
  Returnreferralinformation: "RRI",

  /**
   * Segment pattern response
   */
  Segmentpatternresponse: "RSP",

  /**
   * Tabular response
   */
  Tabularresponse: "RTB",

  /**
   * Notification of Anti-Microbial Device Cycle Data
   */
  NotificationofAntiMicrobialDeviceCycleData: "SCN",

  /**
   * Notification of Anti-Microbial Device Data
   */
  NotificationofAntiMicrobialDeviceData: "SDN",

  /**
   * Sterilization anti-microbial device data request
   */
  Sterilizationantimicrobialdevicedatarequest: "SDR",

  /**
   * Specimen Event Tracking
   */
  SpecimenEventTracking: "SET",

  /**
   * Schedule information unsolicited
   */
  Scheduleinformationunsolicited: "SIU",

  /**
   * Notification of New Sterilization Lot
   */
  NotificationofNewSterilizationLot: "SLN",

  /**
   * Sterilization lot request
   */
  Sterilizationlotrequest: "SLR",

  /**
   * Sterilization anti-microbial device cycle data request
   */
  Sterilizationantimicrobialdevicecycledatarequest: "SMD",

  /**
   * Schedule query message
   */
  Schedulequerymessage: "SQM",

  /**
   * Schedule query response
   */
  Schedulequeryresponse: "SQR",

  /**
   * Schedule request message
   */
  Schedulerequestmessage: "SRM",

  /**
   * Scheduled request response
   */
  Scheduledrequestresponse: "SRR",

  /**
   * Specimen status request message
   */
  Specimenstatusrequestmessage: "SSR",

  /**
   * Specimen status update message
   */
  Specimenstatusupdatemessage: "SSU",

  /**
   * Notification of Sterilization Configuration
   */
  NotificationofSterilizationConfiguration: "STC",

  /**
   * Sterilization item request
   */
  Sterilizationitemrequest: "STI",

  /**
   * Summary product experience report
   */
  Summaryproductexperiencereport: "SUR",

  /**
   * Tabular data response
   */
  Tabulardataresponse: "TBR",

  /**
   * Automated equipment test code settings request message
   */
  Automatedequipmenttestcodesettingsrequestmessage: "TCR",

  /**
   * Automated equipment test code settings update message
   */
  Automatedequipmenttestcodesettingsupdatemessage: "TCU",

  /**
   * Unsolicited display update message
   */
  Unsoliciteddisplayupdatemessage: "UDM",

  /**
   * Query for vaccination record
   */
  Queryforvaccinationrecord: "VXQ",

  /**
   * Vaccination record response
   */
  Vaccinationrecordresponse: "VXR",

  /**
   * Unsolicited vaccination record update
   */
  Unsolicitedvaccinationrecordupdate: "VXU",

  /**
   * Response for vaccination query with multiple PID matches
   */
  ResponseforvaccinationquerywithmultiplePIDmatches: "VXX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMessageTypeCode =
  typeof Hl7VSMessageTypeCode[keyof typeof Hl7VSMessageTypeCode];
