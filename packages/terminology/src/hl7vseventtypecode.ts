/**
 * Concepts specifying the trigger event for Version 2.x interface messages.
 * http://terminology.hl7.org/ValueSet/v2-0003
 */
export const Hl7VSEventTypeCodeCode = {
  /**
   * PEX - Product experience
   */
  PEXProductexperience: "X01",

  /**
   * ADT/ACK - Admit/visit notification
   */
  ADTACKAdmitvisitnotification: "A01",

  /**
   * ADT/ACK - Transfer a patient
   */
  ADTACKTransferapatient: "A02",

  /**
   * ADT/ACK -  Discharge/end visit
   */
  ADTACKDischargeendvisit: "A03",

  /**
   * ADT/ACK -  Register a patient
   */
  ADTACKRegisterapatient: "A04",

  /**
   * ADT/ACK -  Pre-admit a patient
   */
  ADTACKPreadmitapatient: "A05",

  /**
   * ADT/ACK -  Change an outpatient to an inpatient
   */
  ADTACKChangeanoutpatienttoaninpatient: "A06",

  /**
   * ADT/ACK -  Change an inpatient to an outpatient
   */
  ADTACKChangeaninpatienttoanoutpatient: "A07",

  /**
   * ADT/ACK -  Update patient information
   */
  ADTACKUpdatepatientinformation: "A08",

  /**
   * ADT/ACK -  Patient departing - tracking
   */
  ADTACKPatientdepartingtracking: "A09",

  /**
   * ADT/ACK -  Patient arriving - tracking
   */
  ADTACKPatientarrivingtracking: "A10",

  /**
   * ADT/ACK -  Cancel admit/visit notification
   */
  ADTACKCanceladmitvisitnotification: "A11",

  /**
   * ADT/ACK -  Cancel transfer
   */
  ADTACKCanceltransfer: "A12",

  /**
   * ADT/ACK -  Cancel discharge/end visit
   */
  ADTACKCanceldischargeendvisit: "A13",

  /**
   * ADT/ACK -  Pending admit
   */
  ADTACKPendingadmit: "A14",

  /**
   * ADT/ACK -  Pending transfer
   */
  ADTACKPendingtransfer: "A15",

  /**
   * ADT/ACK -  Pending discharge
   */
  ADTACKPendingdischarge: "A16",

  /**
   * ADT/ACK -  Swap patients
   */
  ADTACKSwappatients: "A17",

  /**
   * ADT/ACK -  Merge patient information
   */
  ADTACKMergepatientinformation: "A18",

  /**
   * QRY/ADR -  Patient query
   */
  QRYADRPatientquery: "A19",

  /**
   * ADT/ACK -  Bed status update
   */
  ADTACKBedstatusupdate: "A20",

  /**
   * ADT/ACK -  Patient goes on a "leave of absence"
   */
  ADTACKPatientgoesonaleaveofabsence: "A21",

  /**
   * ADT/ACK -  Patient returns from a "leave of absence"
   */
  ADTACKPatientreturnsfromaleaveofabsence: "A22",

  /**
   * ADT/ACK -  Delete a patient record
   */
  ADTACKDeleteapatientrecord: "A23",

  /**
   * ADT/ACK -  Link patient information
   */
  ADTACKLinkpatientinformation: "A24",

  /**
   * ADT/ACK -  Cancel pending discharge
   */
  ADTACKCancelpendingdischarge: "A25",

  /**
   * ADT/ACK -  Cancel pending transfer
   */
  ADTACKCancelpendingtransfer: "A26",

  /**
   * ADT/ACK -  Cancel pending admit
   */
  ADTACKCancelpendingadmit: "A27",

  /**
   * ADT/ACK -  Add person information
   */
  ADTACKAddpersoninformation: "A28",

  /**
   * ADT/ACK -  Delete person information
   */
  ADTACKDeletepersoninformation: "A29",

  /**
   * ADT/ACK -  Merge person information
   */
  ADTACKMergepersoninformation: "A30",

  /**
   * ADT/ACK -  Update person information
   */
  ADTACKUpdatepersoninformation: "A31",

  /**
   * ADT/ACK -  Cancel patient arriving - tracking
   */
  ADTACKCancelpatientarrivingtracking: "A32",

  /**
   * ADT/ACK -  Cancel patient departing - tracking
   */
  ADTACKCancelpatientdepartingtracking: "A33",

  /**
   * ADT/ACK -  Merge patient information - patient ID only
   */
  ADTACKMergepatientinformationpatientIDonly: "A34",

  /**
   * ADT/ACK -  Merge patient information - account number only
   */
  ADTACKMergepatientinformationaccountnumberonly: "A35",

  /**
   * ADT/ACK -  Merge patient information - patient ID and account number
   */
  ADTACKMergepatientinformationpatientIDandaccountnumber: "A36",

  /**
   * ADT/ACK -  Unlink patient information
   */
  ADTACKUnlinkpatientinformation: "A37",

  /**
   * ADT/ACK - Cancel pre-admit
   */
  ADTACKCancelpreadmit: "A38",

  /**
   * ADT/ACK - Merge person - patient ID
   */
  ADTACKMergepersonpatientID: "A39",

  /**
   * ADT/ACK - Merge patient - patient identifier list
   */
  ADTACKMergepatientpatientidentifierlist: "A40",

  /**
   * ADT/ACK - Merge account - patient account number
   */
  ADTACKMergeaccountpatientaccountnumber: "A41",

  /**
   * ADT/ACK - Merge visit - visit number
   */
  ADTACKMergevisitvisitnumber: "A42",

  /**
   * ADT/ACK - Move patient information - patient identifier list
   */
  ADTACKMovepatientinformationpatientidentifierlist: "A43",

  /**
   * ADT/ACK - Move account information - patient account number
   */
  ADTACKMoveaccountinformationpatientaccountnumber: "A44",

  /**
   * ADT/ACK - Move visit information - visit number
   */
  ADTACKMovevisitinformationvisitnumber: "A45",

  /**
   * ADT/ACK - Change patient ID
   */
  ADTACKChangepatientID: "A46",

  /**
   * ADT/ACK - Change patient identifier list
   */
  ADTACKChangepatientidentifierlist: "A47",

  /**
   * ADT/ACK - Change alternate patient ID
   */
  ADTACKChangealternatepatientID: "A48",

  /**
   * ADT/ACK - Change patient account number
   */
  ADTACKChangepatientaccountnumber: "A49",

  /**
   * ADT/ACK - Change visit number
   */
  ADTACKChangevisitnumber: "A50",

  /**
   * ADT/ACK - Change alternate visit ID
   */
  ADTACKChangealternatevisitID: "A51",

  /**
   * ADT/ACK - Cancel leave of absence for a patient
   */
  ADTACKCancelleaveofabsenceforapatient: "A52",

  /**
   * ADT/ACK - Cancel patient returns from a leave of absence
   */
  ADTACKCancelpatientreturnsfromaleaveofabsence: "A53",

  /**
   * ADT/ACK - Change attending doctor
   */
  ADTACKChangeattendingdoctor: "A54",

  /**
   * ADT/ACK - Cancel change attending doctor
   */
  ADTACKCancelchangeattendingdoctor: "A55",

  /**
   * ADT/ACK - Update allergy information
   */
  ADTACKUpdateallergyinformation: "A60",

  /**
   * ADT/ACK - Change consulting doctor
   */
  ADTACKChangeconsultingdoctor: "A61",

  /**
   * ADT/ACK - Cancel change consulting doctor
   */
  ADTACKCancelchangeconsultingdoctor: "A62",

  /**
   * PMU/ACK - Add personnel record
   */
  PMUACKAddpersonnelrecord: "B01",

  /**
   * PMU/ACK - Update personnel record
   */
  PMUACKUpdatepersonnelrecord: "B02",

  /**
   * PMU/ACK - Delete personnel re cord
   */
  PMUACKDeletepersonnelrecord: "B03",

  /**
   * PMU/ACK - Active practicing person
   */
  PMUACKActivepracticingperson: "B04",

  /**
   * PMU/ACK - Deactivate practicing person
   */
  PMUACKDeactivatepracticingperson: "B05",

  /**
   * PMU/ACK - Terminate practicing person
   */
  PMUACKTerminatepracticingperson: "B06",

  /**
   * PMU/ACK - Grant Certificate/Permission
   */
  PMUACKGrantCertificatePermission: "B07",

  /**
   * PMU/ACK - Revoke Certificate/Permission
   */
  PMUACKRevokeCertificatePermission: "B08",

  /**
   * CRM - Register a patient on a clinical trial
   */
  CRMRegisterapatientonaclinicaltrial: "C01",

  /**
   * CRM - Cancel a patient registration on clinical trial (for clerical mistakes only)
   */
  CRMCancelapatientregistrationonclinicaltrialforclericalmistakesonly: "C02",

  /**
   * CRM - Correct/update registration information
   */
  CRMCorrectupdateregistrationinformation: "C03",

  /**
   * CRM - Patient has gone off a clinical trial
   */
  CRMPatienthasgoneoffaclinicaltrial: "C04",

  /**
   * CRM - Patient enters phase of clinical trial
   */
  CRMPatiententersphaseofclinicaltrial: "C05",

  /**
   * CRM - Cancel patient entering a phase (clerical mistake)
   */
  CRMCancelpatiententeringaphaseclericalmistake: "C06",

  /**
   * CRM - Correct/update phase information
   */
  CRMCorrectupdatephaseinformation: "C07",

  /**
   * CRM - Patient has gone off phase of clinical trial
   */
  CRMPatienthasgoneoffphaseofclinicaltrial: "C08",

  /**
   * CSU - Automated time intervals for reporting, like monthly
   */
  CSUAutomatedtimeintervalsforreportinglikemonthly: "C09",

  /**
   * CSU - Patient completes the clinical trial
   */
  CSUPatientcompletestheclinicaltrial: "C10",

  /**
   * CSU - Patient completes a phase of the clinical trial
   */
  CSUPatientcompletesaphaseoftheclinicaltrial: "C11",

  /**
   * CSU - Update/correction of patient order/result information
   */
  CSUUpdatecorrectionofpatientorderresultinformation: "C12",

  /**
   * Cancel Query
   */
  CancelQuery: "CNQ",

  /**
   * Submit HealthCare Services Invoice
   */
  SubmitHealthCareServicesInvoice: "E01",

  /**
   * Cancel HealthCare Services Invoice
   */
  CancelHealthCareServicesInvoice: "E02",

  /**
   * HealthCare Services Invoice Status
   */
  HealthCareServicesInvoiceStatus: "E03",

  /**
   * MFQ/MFR - Master files query (use event same as asking for e.g., M05 - location)
   */
  MFQMFRMasterfilesqueryuseeventsameasaskingforegM05location: "varies",

  /**
   * Re-Assess HealthCare Services Invoice Request
   */
  ReAssessHealthCareServicesInvoiceRequest: "E04",

  /**
   * Edit/Adjudication Results
   */
  EditAdjudicationResults: "E10",

  /**
   * Request Additional Information
   */
  RequestAdditionalInformation: "E12",

  /**
   * Additional Information Response
   */
  AdditionalInformationResponse: "E13",

  /**
   * Payment/Remittance Advice
   */
  PaymentRemittanceAdvice: "E15",

  /**
   * Submit Authorization Request
   */
  SubmitAuthorizationRequest: "E20",

  /**
   * Cancel Authorization Request
   */
  CancelAuthorizationRequest: "E21",

  /**
   * Authorization Request Status
   */
  AuthorizationRequestStatus: "E22",

  /**
   * Authorization Response
   */
  AuthorizationResponse: "E24",

  /**
   * Submit Health Document related to Authorization Request
   */
  SubmitHealthDocumentrelatedtoAuthorizationRequest: "E30",

  /**
   * Cancel Health Document related to Authorization Request
   */
  CancelHealthDocumentrelatedtoAuthorizationRequest: "E31",

  /**
   * RQI/RPI - Request for insurance information
   */
  RQIRPIRequestforinsuranceinformation: "I01",

  /**
   * RQI/RPL - Request/receipt of patient selection display list
   */
  RQIRPLRequestreceiptofpatientselectiondisplaylist: "I02",

  /**
   * RQI/RPR - Request/receipt of patient selection list
   */
  RQIRPRRequestreceiptofpatientselectionlist: "I03",

  /**
   * RQD/RPI - Request for patient demographic data
   */
  RQDRPIRequestforpatientdemographicdata: "I04",

  /**
   * RQC/RCI - Request for patient clinical information
   */
  RQCRCIRequestforpatientclinicalinformation: "I05",

  /**
   * RQC/RCL - Request/receipt of clinical data listing
   */
  RQCRCLRequestreceiptofclinicaldatalisting: "I06",

  /**
   * PIN/ACK - Unsolicited insurance information
   */
  PINACKUnsolicitedinsuranceinformation: "I07",

  /**
   * RQA/RPA - Request for treatment authorization information
   */
  RQARPARequestfortreatmentauthorizationinformation: "I08",

  /**
   * RQA/RPA - Request for modification to an authorization
   */
  RQARPARequestformodificationtoanauthorization: "I09",

  /**
   * RQA/RPA - Request for resubmission of an authorization
   */
  RQARPARequestforresubmissionofanauthorization: "I10",

  /**
   * RQA/RPA - Request for cancellation of an authorization
   */
  RQARPARequestforcancellationofanauthorization: "I11",

  /**
   * REF/RRI - Patient referral
   */
  REFRRIPatientreferral: "I12",

  /**
   * REF/RRI - Modify patient referral
   */
  REFRRIModifypatientreferral: "I13",

  /**
   * REF/RRI - Cancel patient referral
   */
  REFRRICancelpatientreferral: "I14",

  /**
   * REF/RRI - Request patient referral status
   */
  REFRRIRequestpatientreferralstatus: "I15",

  /**
   * Collaborative Care Referral
   */
  CollaborativeCareReferral: "I16",

  /**
   * Modify Collaborative Care Referral
   */
  ModifyCollaborativeCareReferral: "I17",

  /**
   * Cancel Collaborative Care Referral
   */
  CancelCollaborativeCareReferral: "I18",

  /**
   * Collaborative Care Query/Collaborative Care Query Update
   */
  CollaborativeCareQueryCollaborativeCareQueryUpdate: "I19",

  /**
   * Asynchronous Collaborative Care Update
   */
  AsynchronousCollaborativeCareUpdate: "I20",

  /**
   * Collaborative Care Message
   */
  CollaborativeCareMessage: "I21",

  /**
   * Collaborative Care Fetch / Collaborative Care Information
   */
  CollaborativeCareFetchCollaborativeCareInformation: "I22",

  /**
   * QCN/ACK - Cancel query/acknowledge message
   */
  QCNACKCancelqueryacknowledgemessage: "J01",

  /**
   * QSX/ACK - Cancel subscription/acknowledge message
   */
  QSXACKCancelsubscriptionacknowledgemessage: "J02",

  /**
   * RSP - Segment pattern response in response to QBP^Q11
   */
  RSPSegmentpatternresponseinresponsetoQBPQ11: "K11",

  /**
   * RTB - Tabular response in response to QBP^Q13
   */
  RTBTabularresponseinresponsetoQBPQ13: "K13",

  /**
   * RDY - Display response in response to QBP^Q15
   */
  RDYDisplayresponseinresponsetoQBPQ15: "K15",

  /**
   * RSP - Get person demographics response
   */
  RSPGetpersondemographicsresponse: "K21",

  /**
   * RSP - Find candidates response
   */
  RSPFindcandidatesresponse: "K22",

  /**
   * RSP - Get corresponding identifiers response
   */
  RSPGetcorrespondingidentifiersresponse: "K23",

  /**
   * RSP - Allocate identifiers response
   */
  RSPAllocateidentifiersresponse: "K24",

  /**
   * RSP - Personnel Information by Segment Response
   */
  RSPPersonnelInformationbySegmentResponse: "K25",

  /**
   * RSP -Dispense History Response
   */
  RSPDispenseHistoryResponse: "K31",

  /**
   * Find Candidates including Visit Information Response
   */
  FindCandidatesincludingVisitInformationResponse: "K32",

  /**
   * Get Donor Record Candidates Response Message
   */
  GetDonorRecordCandidatesResponseMessage: "K33",

  /**
   * Segment Pattern Response Message
   */
  SegmentPatternResponseMessage: "K34",

  /**
   * MFN/MFK - Master file not otherwise specified
   */
  MFNMFKMasterfilenototherwisespecified: "M01",

  /**
   * MFN/MFK - Master file - staff practitioner
   */
  MFNMFKMasterfilestaffpractitioner: "M02",

  /**
   * MFN/MFK - Master file - test/observation
   */
  MFNMFKMasterfiletestobservation: "M03",

  /**
   * MFN/MFK - Master files charge description
   */
  MFNMFKMasterfileschargedescription: "M04",

  /**
   * MFN/MFK - Patient location master file
   */
  MFNMFKPatientlocationmasterfile: "M05",

  /**
   * MFN/MFK - Clinical study with phases and schedules master file
   */
  MFNMFKClinicalstudywithphasesandschedulesmasterfile: "M06",

  /**
   * MFN/MFK - Clinical study without phases but with schedules master file
   */
  MFNMFKClinicalstudywithoutphasesbutwithschedulesmasterfile: "M07",

  /**
   * MFN/MFK - Test/observation (numeric) master file
   */
  MFNMFKTestobservationnumericmasterfile: "M08",

  /**
   * MFN/MFK - Test/observation (categorical) master file
   */
  MFNMFKTestobservationcategoricalmasterfile: "M09",

  /**
   * MFN/MFK - Test /observation batteries master file
   */
  MFNMFKTestobservationbatteriesmasterfile: "M10",

  /**
   * MFN/MFK - Test/calculated observations master file
   */
  MFNMFKTestcalculatedobservationsmasterfile: "M11",

  /**
   * MFN/MFK - Master file notification message
   */
  MFNMFKMasterfilenotificationmessage: "M12",

  /**
   * MFN/MFK - Master file notification - general
   */
  MFNMFKMasterfilenotificationgeneral: "M13",

  /**
   * MFN/MFK - Master file notification - site defined
   */
  MFNMFKMasterfilenotificationsitedefined: "M14",

  /**
   * MFN/MFK - Inventory item master file notification
   */
  MFNMFKInventoryitemmasterfilenotification: "M15",

  /**
   * R0R - Pharmacy prescription order query response
   */
  R0RPharmacyprescriptionorderqueryresponse: "R0R",

  /**
   * MFN/MFK - Master File Notification Inventory Item Enhanced
   */
  MFNMFKMasterFileNotificationInventoryItemEnhanced: "M16",

  /**
   * DRG Master File Message
   */
  DRGMasterFileMessage: "M17",

  /**
   * MFN/MFK - Master file notification - Test/Observation (Payer)
   */
  MFNMFKMasterfilenotificationTestObservationPayer: "M18",

  /**
   * NMQ/NMR - Application management query message
   */
  NMQNMRApplicationmanagementquerymessage: "N01",

  /**
   * NMD/ACK - Application management data message (unsolicited)
   */
  NMDACKApplicationmanagementdatamessageunsolicited: "N02",

  /**
   * ORM - Order message (also RDE, RDS, RGV, RAS)
   */
  ORMOrdermessagealsoRDERDSRGVRAS: "O01",

  /**
   * ORR - Order response (also RRE, RRD, RRG, RRA)
   */
  ORROrderresponsealsoRRERRDRRGRRA: "O02",

  /**
   * OMD - Diet order
   */
  OMDDietorder: "O03",

  /**
   * ORD - Diet order acknowledgment
   */
  ORDDietorderacknowledgment: "O04",

  /**
   * OMS - Stock requisition order
   */
  OMSStockrequisitionorder: "O05",

  /**
   * ORS - Stock requisition acknowledgment
   */
  ORSStockrequisitionacknowledgment: "O06",

  /**
   * OMN - Non-stock requisition order
   */
  OMNNonstockrequisitionorder: "O07",

  /**
   * ORN - Non-stock requisition acknowledgment
   */
  ORNNonstockrequisitionacknowledgment: "O08",

  /**
   * OMP - Pharmacy/treatment order
   */
  OMPPharmacytreatmentorder: "O09",

  /**
   * ORP - Pharmacy/treatment order acknowledgment
   */
  ORPPharmacytreatmentorderacknowledgment: "O10",

  /**
   * RDE - Pharmacy/treatment encoded order
   */
  RDEPharmacytreatmentencodedorder: "O11",

  /**
   * RRE - Pharmacy/treatment encoded order acknowledgment
   */
  RREPharmacytreatmentencodedorderacknowledgment: "O12",

  /**
   * RDS - Pharmacy/treatment dispense
   */
  RDSPharmacytreatmentdispense: "O13",

  /**
   * RRD - Pharmacy/treatment dispense acknowledgment
   */
  RRDPharmacytreatmentdispenseacknowledgment: "O14",

  /**
   * RGV - Pharmacy/treatment give
   */
  RGVPharmacytreatmentgive: "O15",

  /**
   * RRG - Pharmacy/treatment give acknowledgment
   */
  RRGPharmacytreatmentgiveacknowledgment: "O16",

  /**
   * RAS - Pharmacy/treatment administration
   */
  RASPharmacytreatmentadministration: "O17",

  /**
   * RRA - Pharmacy/treatment administration acknowledgment
   */
  RRAPharmacytreatmentadministrationacknowledgment: "O18",

  /**
   * OMG - General clinical order
   */
  OMGGeneralclinicalorder: "O19",

  /**
   * ORG/ORL - General clinical order response
   */
  ORGORLGeneralclinicalorderresponse: "O20",

  /**
   * OML - Laboratory order
   */
  OMLLaboratoryorder: "O21",

  /**
   * ORL - General laboratory order response message to any OML
   */
  ORLGenerallaboratoryorderresponsemessagetoanyOML: "O22",

  /**
   * OMI - Imaging order
   */
  OMIImagingorder: "O23",

  /**
   * ORI - Imaging order response message to any OMI
   */
  ORIImagingorderresponsemessagetoanyOMI: "O24",

  /**
   * RDE - Pharmacy/treatment refill authorization request
   */
  RDEPharmacytreatmentrefillauthorizationrequest: "O25",

  /**
   * RRE - Pharmacy/Treatment Refill Authorization Acknowledgement
   */
  RREPharmacyTreatmentRefillAuthorizationAcknowledgement: "O26",

  /**
   * OMB - Blood product order
   */
  OMBBloodproductorder: "O27",

  /**
   * ORB - Blood product order acknowledgment
   */
  ORBBloodproductorderacknowledgment: "O28",

  /**
   * BPS - Blood product dispense status
   */
  BPSBloodproductdispensestatus: "O29",

  /**
   * BRP - Blood product dispense status acknowledgment
   */
  BRPBloodproductdispensestatusacknowledgment: "O30",

  /**
   * BTS - Blood product transfusion/disposition
   */
  BTSBloodproducttransfusiondisposition: "O31",

  /**
   * BRT - Blood product transfusion/disposition acknowledgment
   */
  BRTBloodproducttransfusiondispositionacknowledgment: "O32",

  /**
   * OML - Laboratory order for multiple orders related to a single specimen
   */
  OMLLaboratoryorderformultipleordersrelatedtoasinglespecimen: "O33",

  /**
   * ORL - Laboratory order response message to a multiple order related to single specimen OML
   */
  ORLLaboratoryorderresponsemessagetoamultipleorderrelatedtosinglespecimenOML:
    "O34",

  /**
   * OML - Laboratory order for multiple orders related to a single container of a specimen
   */
  OMLLaboratoryorderformultipleordersrelatedtoasinglecontainerofaspecimen:
    "O35",

  /**
   * QRY/DSR - query for display results (See Q01)
   */
  QRYDSRqueryfordisplayresultsSeeQ01: "R05",

  /**
   * ORL - Laboratory order response message to a single container of a specimen OML
   */
  ORLLaboratoryorderresponsemessagetoasinglecontainerofaspecimenOML: "O36",

  /**
   * UDM - unsolicited update/display results (See Q05)
   */
  UDMunsolicitedupdatedisplayresultsSeeQ05: "R06",

  /**
   * OPL - Population/Location-Based Laboratory Order Message
   */
  OPLPopulationLocationBasedLaboratoryOrderMessage: "O37",

  /**
   * OPR - Population/Location-Based Laboratory Order Acknowledgment Message
   */
  OPRPopulationLocationBasedLaboratoryOrderAcknowledgmentMessage: "O38",

  /**
   * Specimen shipment centric laboratory order
   */
  Specimenshipmentcentriclaboratoryorder: "O39",

  /**
   * Specimen Shipment Centric Laboratory Order Acknowledgment Message
   */
  SpecimenShipmentCentricLaboratoryOrderAcknowledgmentMessage: "O40",

  /**
   * DBC - Create Donor Record Message
   */
  DBCCreateDonorRecordMessage: "O41",

  /**
   * DBU - Update Donor Record Message
   */
  DBUUpdateDonorRecordMessage: "O42",

  /**
   * RAR - Pharmacy administration information query response
   */
  RARPharmacyadministrationinformationqueryresponse: "RAR",

  /**
   * General Order Message with Document Payload Acknowledgement Message
   */
  GeneralOrderMessagewithDocumentPayloadAcknowledgementMessage: "O43",

  /**
   * RDR - Pharmacy dispense information query response
   */
  RDRPharmacydispenseinformationqueryresponse: "RDR",

  /**
   * EQQ - Embedded query language query
   */
  EQQEmbeddedquerylanguagequery: "Q04",

  /**
   * Donor Registration - Minimal Message
   */
  DonorRegistrationMinimalMessage: "O44",

  /**
   * RER - Pharmacy encoded order information query response
   */
  RERPharmacyencodedorderinformationqueryresponse: "RER",

  /**
   * Donor Eligibility Observations Message
   */
  DonorEligibilityObservationsMessage: "O45",

  /**
   * RGR - Pharmacy dose information query response
   */
  RGRPharmacydoseinformationqueryresponse: "RGR",

  /**
   * Donor Eligiblity Message
   */
  DonorEligiblityMessage: "O46",

  /**
   * VQQ - Virtual table query
   */
  VQQVirtualtablequery: "Q07",

  /**
   * Donor Request to Collect Message
   */
  DonorRequesttoCollectMessage: "O47",

  /**
   * SPQ - Stored procedure request
   */
  SPQStoredprocedurerequest: "Q08",

  /**
   * Donation Procedure Message
   */
  DonationProcedureMessage: "O48",

  /**
   * RQQ - event replay query
   */
  RQQeventreplayquery: "Q09",

  /**
   * Pharmacy/Treatment Dispense Request Message
   */
  PharmacyTreatmentDispenseRequestMessage: "O49",

  /**
   * Pharmacy/Treatment Encoded Order Acknowledgment
   */
  PharmacyTreatmentEncodedOrderAcknowledgment: "O50",

  /**
   * OSU – Order Status Update
   */
  OSUOrderStatusUpdate: "O51",

  /**
   * OSU – Order Status Update Acknowledgement
   */
  OSUOrderStatusUpdateAcknowledgement: "O52",

  /**
   * ORL - General Laboratory Order Acknowledgment Message (Patient Optional)
   */
  ORLGeneralLaboratoryOrderAcknowledgmentMessagePatientOptional: "O53",

  /**
   * ORL - Laboratory Order Acknowledgment Message  – Multiple Order Per Specimen (Patient Optional)
   */
  ORLLaboratoryOrderAcknowledgmentMessageMultipleOrderPerSpecimenPatientOptional:
    "O54",

  /**
   * ORL - Laboratory Order Acknowledgment Message  – Multiple Order Per Container of Specimen (Patient Optional)
   */
  ORLLaboratoryOrderAcknowledgmentMessageMultipleOrderPerContainerofSpecimenPatientOptional:
    "O55",

  /**
   * ORL - Specimen Shipment Centric Laboratory Order Acknowledgment Message (Patient Optional)
   */
  ORLSpecimenShipmentCentricLaboratoryOrderAcknowledgmentMessagePatientOptional:
    "O56",

  /**
   * OMQ- General Order Message with Document Payload
   */
  OMQGeneralOrderMessagewithDocumentPayload: "O57",

  /**
   * ORX - General Order Message with Document Payload Acknowledgement Message
   */
  ORXGeneralOrderMessagewithDocumentPayloadAcknowledgementMessage: "O58",

  /**
   * OML - Laboratory order for additional work up
   */
  OMLLaboratoryorderforadditionalworkup: "O59",

  /**
   * BAR/ACK - Add patient accounts
   */
  BARACKAddpatientaccounts: "P01",

  /**
   * BAR/ACK - Purge patient accounts
   */
  BARACKPurgepatientaccounts: "P02",

  /**
   * DFT/ACK - Post detail financial transaction
   */
  DFTACKPostdetailfinancialtransaction: "P03",

  /**
   * QRY/DSP - Generate bill and A/R statements
   */
  QRYDSPGeneratebillandARstatements: "P04",

  /**
   * BAR/ACK - Update account
   */
  BARACKUpdateaccount: "P05",

  /**
   * BAR/ACK - End account
   */
  BARACKEndaccount: "P06",

  /**
   * PEX - Unsolicited initial individual product experience report
   */
  PEXUnsolicitedinitialindividualproductexperiencereport: "P07",

  /**
   * QRY/DSR Display-oriented results, query/unsol. update (for backward compatibility only) (Replaced by Q05)
   */
  QRYDSRDisplayorientedresultsqueryunsolupdateforbackwardcompatibilityonlyReplacedbyQ05:
    "R03",

  /**
   * PEX - Unsolicited update individual product experience report
   */
  PEXUnsolicitedupdateindividualproductexperiencereport: "P08",

  /**
   * SUR - Summary product experience report
   */
  SURSummaryproductexperiencereport: "P09",

  /**
   * BAR/ACK -Transmit Ambulatory Payment  Classification(APC)
   */
  BARACKTransmitAmbulatoryPaymentClassificationAPC: "P10",

  /**
   * EDR - Enhanced Display Response
   */
  EDREnhancedDisplayResponse: "R07",

  /**
   * DFT/ACK - Post Detail Financial Transactions - New
   */
  DFTACKPostDetailFinancialTransactionsNew: "P11",

  /**
   * TBR - Tabular Data Response
   */
  TBRTabularDataResponse: "R08",

  /**
   * BAR/ACK - Update Diagnosis/Procedure
   */
  BARACKUpdateDiagnosisProcedure: "P12",

  /**
   * PPR - PC/ problem add
   */
  PPRPCproblemadd: "PC1",

  /**
   * ERP - Event Replay Response
   */
  ERPEventReplayResponse: "R09",

  /**
   * PPR - PC/ problem update
   */
  PPRPCproblemupdate: "PC2",

  /**
   * PPR - PC/ problem delete
   */
  PPRPCproblemdelete: "PC3",

  /**
   * QRY - PC/ problem query
   */
  QRYPCproblemquery: "PC4",

  /**
   * PRR - PC/ problem response
   */
  PRRPCproblemresponse: "PC5",

  /**
   * PGL - PC/ goal add
   */
  PGLPCgoaladd: "PC6",

  /**
   * PGL - PC/ goal update
   */
  PGLPCgoalupdate: "PC7",

  /**
   * PGL - PC/ goal delete
   */
  PGLPCgoaldelete: "PC8",

  /**
   * QRY - PC/ goal query
   */
  QRYPCgoalquery: "PC9",

  /**
   * PPV - PC/ goal response
   */
  PPVPCgoalresponse: "PCA",

  /**
   * PPP - PC/ pathway (problem-oriented) add
   */
  PPPPCpathwayproblemorientedadd: "PCB",

  /**
   * PPP - PC/ pathway (problem-oriented) update
   */
  PPPPCpathwayproblemorientedupdate: "PCC",

  /**
   * PPP - PC/ pathway (problem-oriented) delete
   */
  PPPPCpathwayproblemorienteddelete: "PCD",

  /**
   * QRY - PC/ pathway (problem-oriented) query
   */
  QRYPCpathwayproblemorientedquery: "PCE",

  /**
   * PTR - PC/ pathway (problem-oriented) query response
   */
  PTRPCpathwayproblemorientedqueryresponse: "PCF",

  /**
   * PPG - PC/ pathway (goal-oriented) add
   */
  PPGPCpathwaygoalorientedadd: "PCG",

  /**
   * PPG - PC/ pathway (goal-oriented) update
   */
  PPGPCpathwaygoalorientedupdate: "PCH",

  /**
   * PPG - PC/ pathway (goal-oriented) delete
   */
  PPGPCpathwaygoalorienteddelete: "PCJ",

  /**
   * QRY - PC/ pathway (goal-oriented) query
   */
  QRYPCpathwaygoalorientedquery: "PCK",

  /**
   * PPT - PC/ pathway (goal-oriented) query response
   */
  PPTPCpathwaygoalorientedqueryresponse: "PCL",

  /**
   * QRY/DSR - Query sent for immediate response
   */
  QRYDSRQuerysentforimmediateresponse: "Q01",

  /**
   * QRY/QCK - Query sent for deferred response
   */
  QRYQCKQuerysentfordeferredresponse: "Q02",

  /**
   * DSR/ACK - Deferred response to a query
   */
  DSRACKDeferredresponsetoaquery: "Q03",

  /**
   * UDM/ACK - Unsolicited display update message
   */
  UDMACKUnsoliciteddisplayupdatemessage: "Q05",

  /**
   * OSQ/OSR - Query for order status
   */
  OSQOSRQueryfororderstatus: "Q06",

  /**
   * QBP - Query by parameter requesting an RSP segment pattern response
   */
  QBPQuerybyparameterrequestinganRSPsegmentpatternresponse: "Q11",

  /**
   * QBP - Query by parameter requesting an  RTB - tabular response
   */
  QBPQuerybyparameterrequestinganRTBtabularresponse: "Q13",

  /**
   * QBP - Query by parameter requesting an RDY display response
   */
  QBPQuerybyparameterrequestinganRDYdisplayresponse: "Q15",

  /**
   * QSB - Create subscription
   */
  QSBCreatesubscription: "Q16",

  /**
   * QVR - Query for previous events
   */
  QVRQueryforpreviousevents: "Q17",

  /**
   * QBP - Get person demographics
   */
  QBPGetpersondemographics: "Q21",

  /**
   * QBP - Find candidates
   */
  QBPFindcandidates: "Q22",

  /**
   * QBP - Get corresponding identifiers
   */
  QBPGetcorrespondingidentifiers: "Q23",

  /**
   * QBP - Allocate identifiers
   */
  QBPAllocateidentifiers: "Q24",

  /**
   * QBP - Personnel Information by Segment Query
   */
  QBPPersonnelInformationbySegmentQuery: "Q25",

  /**
   * ROR - Pharmacy/treatment order response
   */
  RORPharmacytreatmentorderresponse: "Q26",

  /**
   * RAR - Pharmacy/treatment administration information
   */
  RARPharmacytreatmentadministrationinformation: "Q27",

  /**
   * RDR - Pharmacy/treatment dispense information
   */
  RDRPharmacytreatmentdispenseinformation: "Q28",

  /**
   * RER - Pharmacy/treatment encoded order information
   */
  RERPharmacytreatmentencodedorderinformation: "Q29",

  /**
   * RGR - Pharmacy/treatment dose information
   */
  RGRPharmacytreatmentdoseinformation: "Q30",

  /**
   * QBP Query Dispense history
   */
  QBPQueryDispensehistory: "Q31",

  /**
   * Find Candidates including Visit Information
   */
  FindCandidatesincludingVisitInformation: "Q32",

  /**
   * QBP - Get Donor Record Candidates
   */
  QBPGetDonorRecordCandidates: "Q33",

  /**
   * QBP - Get Donor Record
   */
  QBPGetDonorRecord: "Q34",

  /**
   * ORU/ACK - Unsolicited transmission of an observation message
   */
  ORUACKUnsolicitedtransmissionofanobservationmessage: "R01",

  /**
   * QRY - Query for results of observation
   */
  QRYQueryforresultsofobservation: "R02",

  /**
   * ORF - Response to query; transmission of requested observation
   */
  ORFResponsetoquerytransmissionofrequestedobservation: "R04",

  /**
   * OUL - Unsolicited laboratory observation
   */
  OULUnsolicitedlaboratoryobservation: "R21",

  /**
   * OUL - Unsolicited Specimen Oriented Observation Message
   */
  OULUnsolicitedSpecimenOrientedObservationMessage: "R22",

  /**
   * OUL - Unsolicited Specimen Container Oriented Observation Message
   */
  OULUnsolicitedSpecimenContainerOrientedObservationMessage: "R23",

  /**
   * OUL - Unsolicited Order Oriented Observation Message
   */
  OULUnsolicitedOrderOrientedObservationMessage: "R24",

  /**
   * OPU - Unsolicited Population/Location-Based Laboratory Observation Message
   */
  OPUUnsolicitedPopulationLocationBasedLaboratoryObservationMessage: "R25",

  /**
   * OSM - Unsolicited Specimen Shipment Manifest Message
   */
  OSMUnsolicitedSpecimenShipmentManifestMessage: "R26",

  /**
   * ORU - Unsolicited Point-Of-Care Observation Message Without Existing Order - Place An Order
   */
  ORUUnsolicitedPointOfCareObservationMessageWithoutExistingOrderPlaceAnOrder:
    "R30",

  /**
   * ORU - Unsolicited New Point-Of-Care Observation Message - Search For An Order
   */
  ORUUnsolicitedNewPointOfCareObservationMessageSearchForAnOrder: "R31",

  /**
   * ORU - Unsolicited Pre-Ordered Point-Of-Care Observation
   */
  ORUUnsolicitedPreOrderedPointOfCareObservation: "R32",

  /**
   * ORA - Observation Report Acknowledgement
   */
  ORAObservationReportAcknowledgement: "R33",

  /**
   * ORU - Unsolicited Report Alarm
   */
  ORUUnsolicitedReportAlarm: "R40",

  /**
   * Observation Report Alert Acknowledgement
   */
  ObservationReportAlertAcknowledgement: "R41",

  /**
   * ORU – Unsolicited Device Event Observation Message
   */
  ORUUnsolicitedDeviceEventObservationMessage: "R42",

  /**
   * ORU – Unsolicited Patient-Device Association Observation Message
   */
  ORUUnsolicitedPatientDeviceAssociationObservationMessage: "R43",

  /**
   * ROR - Pharmacy prescription order query response
   */
  RORPharmacyprescriptionorderqueryresponse: "ROR",

  /**
   * SRM/SRR - Request new appointment booking
   */
  SRMSRRRequestnewappointmentbooking: "S01",

  /**
   * SRM/SRR - Request appointment rescheduling
   */
  SRMSRRRequestappointmentrescheduling: "S02",

  /**
   * SRM/SRR - Request appointment modification
   */
  SRMSRRRequestappointmentmodification: "S03",

  /**
   * SRM/SRR - Request appointment cancellation
   */
  SRMSRRRequestappointmentcancellation: "S04",

  /**
   * SRM/SRR - Request appointment discontinuation
   */
  SRMSRRRequestappointmentdiscontinuation: "S05",

  /**
   * SRM/SRR - Request appointment deletion
   */
  SRMSRRRequestappointmentdeletion: "S06",

  /**
   * SRM/SRR - Request addition of service/resource on appointment
   */
  SRMSRRRequestadditionofserviceresourceonappointment: "S07",

  /**
   * SRM/SRR - Request modification of service/resource on appointment
   */
  SRMSRRRequestmodificationofserviceresourceonappointment: "S08",

  /**
   * SRM/SRR - Request cancellation of service/resource on appointment
   */
  SRMSRRRequestcancellationofserviceresourceonappointment: "S09",

  /**
   * SRM/SRR - Request discontinuation of service/resource on appointment
   */
  SRMSRRRequestdiscontinuationofserviceresourceonappointment: "S10",

  /**
   * SRM/SRR - Request deletion of service/resource on appointment
   */
  SRMSRRRequestdeletionofserviceresourceonappointment: "S11",

  /**
   * SIU/ACK - Notification of new appointment booking
   */
  SIUACKNotificationofnewappointmentbooking: "S12",

  /**
   * SIU/ACK - Notification of appointment rescheduling
   */
  SIUACKNotificationofappointmentrescheduling: "S13",

  /**
   * SIU/ACK - Notification of appointment modification
   */
  SIUACKNotificationofappointmentmodification: "S14",

  /**
   * SIU/ACK - Notification of appointment cancellation
   */
  SIUACKNotificationofappointmentcancellation: "S15",

  /**
   * SIU/ACK - Notification of appointment discontinuation
   */
  SIUACKNotificationofappointmentdiscontinuation: "S16",

  /**
   * SIU/ACK - Notification of appointment deletion
   */
  SIUACKNotificationofappointmentdeletion: "S17",

  /**
   * SIU/ACK - Notification of addition of service/resource on appointment
   */
  SIUACKNotificationofadditionofserviceresourceonappointment: "S18",

  /**
   * SIU/ACK - Notification of modification of service/resource on appointment
   */
  SIUACKNotificationofmodificationofserviceresourceonappointment: "S19",

  /**
   * SIU/ACK - Notification of cancellation of service/resource on appointment
   */
  SIUACKNotificationofcancellationofserviceresourceonappointment: "S20",

  /**
   * SIU/ACK - Notification of discontinuation of service/resource on appointment
   */
  SIUACKNotificationofdiscontinuationofserviceresourceonappointment: "S21",

  /**
   * SIU/ACK - Notification of deletion of service/resource on appointment
   */
  SIUACKNotificationofdeletionofserviceresourceonappointment: "S22",

  /**
   * SIU/ACK - Notification of blocked schedule time slot(s)
   */
  SIUACKNotificationofblockedscheduletimeslots: "S23",

  /**
   * SIU/ACK - Notification of opened ("unblocked") schedule time slot(s)
   */
  SIUACKNotificationofopenedunblockedscheduletimeslots: "S24",

  /**
   * SQM/SQR - Schedule query message and response
   */
  SQMSQRSchedulequerymessageandresponse: "S25",

  /**
   * SIU/ACK Notification that patient did not show up for schedule appointment
   */
  SIUACKNotificationthatpatientdidnotshowupforscheduleappointment: "S26",

  /**
   * SIU/ACK - Broadcast Notification of Scheduled Appointments
   */
  SIUACKBroadcastNotificationofScheduledAppointments: "S27",

  /**
   * SLR/SLS - Request new sterilization lot
   */
  SLRSLSRequestnewsterilizationlot: "S28",

  /**
   * SLR/SLS - Request Sterilization lot deletion
   */
  SLRSLSRequestSterilizationlotdeletion: "S29",

  /**
   * STI/STS - Request item
   */
  STISTSRequestitem: "S30",

  /**
   * SDR/SDS - Request anti-microbial device data
   */
  SDRSDSRequestantimicrobialdevicedata: "S31",

  /**
   * SMD/SMS - Request anti-microbial device cycle data
   */
  SMDSMSRequestantimicrobialdevicecycledata: "S32",

  /**
   * STC/ACK - Notification of sterilization configuration
   */
  STCACKNotificationofsterilizationconfiguration: "S33",

  /**
   * SLN/ACK - Notification of sterilization lot
   */
  SLNACKNotificationofsterilizationlot: "S34",

  /**
   * SLN/ACK - Notification of sterilization lot deletion
   */
  SLNACKNotificationofsterilizationlotdeletion: "S35",

  /**
   * SDN/ACK - Notification of anti-microbial device data
   */
  SDNACKNotificationofantimicrobialdevicedata: "S36",

  /**
   * SCN/ACK - Notification of anti-microbial device cycle data
   */
  SCNACKNotificationofantimicrobialdevicecycledata: "S37",

  /**
   * Containers Prepared for Specimen Collection
   */
  ContainersPreparedforSpecimenCollection: "S38",

  /**
   * Specimen Collection Successful
   */
  SpecimenCollectionSuccessful: "S39",

  /**
   * Specimen Collection Unsuccessful
   */
  SpecimenCollectionUnsuccessful: "S40",

  /**
   * Specimen Departed
   */
  SpecimenDeparted: "S41",

  /**
   * Specimen Arrived
   */
  SpecimenArrived: "S42",

  /**
   * Specimen Accepted
   */
  SpecimenAccepted: "S43",

  /**
   * Specimen Rejected
   */
  SpecimenRejected: "S44",

  /**
   * Specimen Re-identified
   */
  SpecimenReidentified: "S45",

  /**
   * Specimen De-identified
   */
  SpecimenDeidentified: "S46",

  /**
   * Specimen Sent to Archive
   */
  SpecimenSenttoArchive: "S47",

  /**
   * Specimen Retrieved from Archive
   */
  SpecimenRetrievedfromArchive: "S48",

  /**
   * Specimen Disposed of
   */
  SpecimenDisposedof: "S49",

  /**
   * Specimen Procedure Step Successful , with Derived Specimen(s)
   */
  SpecimenProcedureStepSuccessfulwithDerivedSpecimens: "S50",

  /**
   * Specimen Procedure Step Successful, no Derived Specimen(s)
   */
  SpecimenProcedureStepSuccessfulnoDerivedSpecimens: "S51",

  /**
   * Specimen Procedure Step Unsuccessful
   */
  SpecimenProcedureStepUnsuccessful: "S52",

  /**
   * MDM/ACK - Original document notification
   */
  MDMACKOriginaldocumentnotification: "T01",

  /**
   * MDM/ACK - Original document notification and content
   */
  MDMACKOriginaldocumentnotificationandcontent: "T02",

  /**
   * MDM/ACK - Document status change notification
   */
  MDMACKDocumentstatuschangenotification: "T03",

  /**
   * MDM/ACK - Document status change notification and content
   */
  MDMACKDocumentstatuschangenotificationandcontent: "T04",

  /**
   * MDM/ACK - Document addendum notification
   */
  MDMACKDocumentaddendumnotification: "T05",

  /**
   * MDM/ACK - Document addendum notification and content
   */
  MDMACKDocumentaddendumnotificationandcontent: "T06",

  /**
   * MDM/ACK - Document edit notification
   */
  MDMACKDocumenteditnotification: "T07",

  /**
   * MDM/ACK - Document edit notification and content
   */
  MDMACKDocumenteditnotificationandcontent: "T08",

  /**
   * MDM/ACK - Document replacement notification
   */
  MDMACKDocumentreplacementnotification: "T09",

  /**
   * MDM/ACK - Document replacement notification and content
   */
  MDMACKDocumentreplacementnotificationandcontent: "T10",

  /**
   * MDM/ACK - Document cancel notification
   */
  MDMACKDocumentcancelnotification: "T11",

  /**
   * QRY/DOC - Document query
   */
  QRYDOCDocumentquery: "T12",

  /**
   * ESU/ACK - Automated equipment status update
   */
  ESUACKAutomatedequipmentstatusupdate: "U01",

  /**
   * ESR/ACK - Automated equipment status request
   */
  ESRACKAutomatedequipmentstatusrequest: "U02",

  /**
   * SSU/ACK - Specimen status update
   */
  SSUACKSpecimenstatusupdate: "U03",

  /**
   * SSR/ACK - specimen status request
   */
  SSRACKspecimenstatusrequest: "U04",

  /**
   * INU/ACK  - Automated equipment inventory update
   */
  INUACKAutomatedequipmentinventoryupdate: "U05",

  /**
   * INR/ACK - Automated equipment inventory request
   */
  INRACKAutomatedequipmentinventoryrequest: "U06",

  /**
   * EAC/ACK - Automated equipment command
   */
  EACACKAutomatedequipmentcommand: "U07",

  /**
   * EAR/ACK - Automated equipment response
   */
  EARACKAutomatedequipmentresponse: "U08",

  /**
   * EAN/ACK - Automated equipment notification
   */
  EANACKAutomatedequipmentnotification: "U09",

  /**
   * TCU/ACK - Automated equipment test code settings update
   */
  TCUACKAutomatedequipmenttestcodesettingsupdate: "U10",

  /**
   * TCR/ACK - Automated equipment test code settings request
   */
  TCRACKAutomatedequipmenttestcodesettingsrequest: "U11",

  /**
   * LSU/ACK - Automated equipment log/service update
   */
  LSUACKAutomatedequipmentlogserviceupdate: "U12",

  /**
   * LSR/ACK - Automated equipment log/service request
   */
  LSRACKAutomatedequipmentlogservicerequest: "U13",

  /**
   * INR/ACK – Automated Equipment Inventory Request
   */
  INRACKAutomatedEquipmentInventoryRequest: "U14",

  /**
   * VXQ - Query for vaccination record
   */
  VXQQueryforvaccinationrecord: "V01",

  /**
   * VXX - Response to vaccination query returning multiple PID matches
   */
  VXXResponsetovaccinationqueryreturningmultiplePIDmatches: "V02",

  /**
   * VXR - Vaccination record response
   */
  VXRVaccinationrecordresponse: "V03",

  /**
   * VXU - Unsolicited vaccination record update
   */
  VXUUnsolicitedvaccinationrecordupdate: "V04",

  /**
   * MFQ/MFR - Master files query (use event same as asking for e.g., M05 - location)
   */
  MFQMFRMasterfilesqueryuseeventsameasaskingforegM05location: "Varies",

  /**
   * ORU - Waveform result, unsolicited transmission of requested information
   */
  ORUWaveformresultunsolicitedtransmissionofrequestedinformation: "W01",

  /**
   * QRF - Waveform result, response to query
   */
  QRFWaveformresultresponsetoquery: "W02",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventTypeCodeCode =
  typeof Hl7VSEventTypeCodeCode[keyof typeof Hl7VSEventTypeCodeCode];
