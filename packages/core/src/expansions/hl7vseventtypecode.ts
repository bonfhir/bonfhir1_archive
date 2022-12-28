/**
 * Concepts specifying the trigger event for Version 2.x interface messages.
 * http://terminology.hl7.org/ValueSet/v2-0003
 */
export const Hl7VSEventTypeCodeCode = {
  /**
   * PEX - Product experience
   */
  X01: "X01",

  /**
   * ADT/ACK - Admit/visit notification
   */
  A01: "A01",

  /**
   * ADT/ACK - Transfer a patient
   */
  A02: "A02",

  /**
   * ADT/ACK -  Discharge/end visit
   */
  A03: "A03",

  /**
   * ADT/ACK -  Register a patient
   */
  A04: "A04",

  /**
   * ADT/ACK -  Pre-admit a patient
   */
  A05: "A05",

  /**
   * ADT/ACK -  Change an outpatient to an inpatient
   */
  A06: "A06",

  /**
   * ADT/ACK -  Change an inpatient to an outpatient
   */
  A07: "A07",

  /**
   * ADT/ACK -  Update patient information
   */
  A08: "A08",

  /**
   * ADT/ACK -  Patient departing - tracking
   */
  A09: "A09",

  /**
   * ADT/ACK -  Patient arriving - tracking
   */
  A10: "A10",

  /**
   * ADT/ACK -  Cancel admit/visit notification
   */
  A11: "A11",

  /**
   * ADT/ACK -  Cancel transfer
   */
  A12: "A12",

  /**
   * ADT/ACK -  Cancel discharge/end visit
   */
  A13: "A13",

  /**
   * ADT/ACK -  Pending admit
   */
  A14: "A14",

  /**
   * ADT/ACK -  Pending transfer
   */
  A15: "A15",

  /**
   * ADT/ACK -  Pending discharge
   */
  A16: "A16",

  /**
   * ADT/ACK -  Swap patients
   */
  A17: "A17",

  /**
   * ADT/ACK -  Merge patient information
   */
  A18: "A18",

  /**
   * QRY/ADR -  Patient query
   */
  A19: "A19",

  /**
   * ADT/ACK -  Bed status update
   */
  A20: "A20",

  /**
   * ADT/ACK -  Patient goes on a "leave of absence"
   */
  A21: "A21",

  /**
   * ADT/ACK -  Patient returns from a "leave of absence"
   */
  A22: "A22",

  /**
   * ADT/ACK -  Delete a patient record
   */
  A23: "A23",

  /**
   * ADT/ACK -  Link patient information
   */
  A24: "A24",

  /**
   * ADT/ACK -  Cancel pending discharge
   */
  A25: "A25",

  /**
   * ADT/ACK -  Cancel pending transfer
   */
  A26: "A26",

  /**
   * ADT/ACK -  Cancel pending admit
   */
  A27: "A27",

  /**
   * ADT/ACK -  Add person information
   */
  A28: "A28",

  /**
   * ADT/ACK -  Delete person information
   */
  A29: "A29",

  /**
   * ADT/ACK -  Merge person information
   */
  A30: "A30",

  /**
   * ADT/ACK -  Update person information
   */
  A31: "A31",

  /**
   * ADT/ACK -  Cancel patient arriving - tracking
   */
  A32: "A32",

  /**
   * ADT/ACK -  Cancel patient departing - tracking
   */
  A33: "A33",

  /**
   * ADT/ACK -  Merge patient information - patient ID only
   */
  A34: "A34",

  /**
   * ADT/ACK -  Merge patient information - account number only
   */
  A35: "A35",

  /**
   * ADT/ACK -  Merge patient information - patient ID and account number
   */
  A36: "A36",

  /**
   * ADT/ACK -  Unlink patient information
   */
  A37: "A37",

  /**
   * ADT/ACK - Cancel pre-admit
   */
  A38: "A38",

  /**
   * ADT/ACK - Merge person - patient ID
   */
  A39: "A39",

  /**
   * ADT/ACK - Merge patient - patient identifier list
   */
  A40: "A40",

  /**
   * ADT/ACK - Merge account - patient account number
   */
  A41: "A41",

  /**
   * ADT/ACK - Merge visit - visit number
   */
  A42: "A42",

  /**
   * ADT/ACK - Move patient information - patient identifier list
   */
  A43: "A43",

  /**
   * ADT/ACK - Move account information - patient account number
   */
  A44: "A44",

  /**
   * ADT/ACK - Move visit information - visit number
   */
  A45: "A45",

  /**
   * ADT/ACK - Change patient ID
   */
  A46: "A46",

  /**
   * ADT/ACK - Change patient identifier list
   */
  A47: "A47",

  /**
   * ADT/ACK - Change alternate patient ID
   */
  A48: "A48",

  /**
   * ADT/ACK - Change patient account number
   */
  A49: "A49",

  /**
   * ADT/ACK - Change visit number
   */
  A50: "A50",

  /**
   * ADT/ACK - Change alternate visit ID
   */
  A51: "A51",

  /**
   * ADT/ACK - Cancel leave of absence for a patient
   */
  A52: "A52",

  /**
   * ADT/ACK - Cancel patient returns from a leave of absence
   */
  A53: "A53",

  /**
   * ADT/ACK - Change attending doctor
   */
  A54: "A54",

  /**
   * ADT/ACK - Cancel change attending doctor
   */
  A55: "A55",

  /**
   * ADT/ACK - Update allergy information
   */
  A60: "A60",

  /**
   * ADT/ACK - Change consulting doctor
   */
  A61: "A61",

  /**
   * ADT/ACK - Cancel change consulting doctor
   */
  A62: "A62",

  /**
   * PMU/ACK - Add personnel record
   */
  B01: "B01",

  /**
   * PMU/ACK - Update personnel record
   */
  B02: "B02",

  /**
   * PMU/ACK - Delete personnel re cord
   */
  B03: "B03",

  /**
   * PMU/ACK - Active practicing person
   */
  B04: "B04",

  /**
   * PMU/ACK - Deactivate practicing person
   */
  B05: "B05",

  /**
   * PMU/ACK - Terminate practicing person
   */
  B06: "B06",

  /**
   * PMU/ACK - Grant Certificate/Permission
   */
  B07: "B07",

  /**
   * PMU/ACK - Revoke Certificate/Permission
   */
  B08: "B08",

  /**
   * CRM - Register a patient on a clinical trial
   */
  C01: "C01",

  /**
   * CRM - Cancel a patient registration on clinical trial (for clerical mistakes only)
   */
  C02: "C02",

  /**
   * CRM - Correct/update registration information
   */
  C03: "C03",

  /**
   * CRM - Patient has gone off a clinical trial
   */
  C04: "C04",

  /**
   * CRM - Patient enters phase of clinical trial
   */
  C05: "C05",

  /**
   * CRM - Cancel patient entering a phase (clerical mistake)
   */
  C06: "C06",

  /**
   * CRM - Correct/update phase information
   */
  C07: "C07",

  /**
   * CRM - Patient has gone off phase of clinical trial
   */
  C08: "C08",

  /**
   * CSU - Automated time intervals for reporting, like monthly
   */
  C09: "C09",

  /**
   * CSU - Patient completes the clinical trial
   */
  C10: "C10",

  /**
   * CSU - Patient completes a phase of the clinical trial
   */
  C11: "C11",

  /**
   * CSU - Update/correction of patient order/result information
   */
  C12: "C12",

  /**
   * Cancel Query
   */
  CNQ: "CNQ",

  /**
   * Submit HealthCare Services Invoice
   */
  E01: "E01",

  /**
   * Cancel HealthCare Services Invoice
   */
  E02: "E02",

  /**
   * HealthCare Services Invoice Status
   */
  E03: "E03",

  /**
   * MFQ/MFR - Master files query (use event same as asking for e.g., M05 - location)
   */
  varies: "varies",

  /**
   * Re-Assess HealthCare Services Invoice Request
   */
  E04: "E04",

  /**
   * Edit/Adjudication Results
   */
  E10: "E10",

  /**
   * Request Additional Information
   */
  E12: "E12",

  /**
   * Additional Information Response
   */
  E13: "E13",

  /**
   * Payment/Remittance Advice
   */
  E15: "E15",

  /**
   * Submit Authorization Request
   */
  E20: "E20",

  /**
   * Cancel Authorization Request
   */
  E21: "E21",

  /**
   * Authorization Request Status
   */
  E22: "E22",

  /**
   * Authorization Response
   */
  E24: "E24",

  /**
   * Submit Health Document related to Authorization Request
   */
  E30: "E30",

  /**
   * Cancel Health Document related to Authorization Request
   */
  E31: "E31",

  /**
   * RQI/RPI - Request for insurance information
   */
  I01: "I01",

  /**
   * RQI/RPL - Request/receipt of patient selection display list
   */
  I02: "I02",

  /**
   * RQI/RPR - Request/receipt of patient selection list
   */
  I03: "I03",

  /**
   * RQD/RPI - Request for patient demographic data
   */
  I04: "I04",

  /**
   * RQC/RCI - Request for patient clinical information
   */
  I05: "I05",

  /**
   * RQC/RCL - Request/receipt of clinical data listing
   */
  I06: "I06",

  /**
   * PIN/ACK - Unsolicited insurance information
   */
  I07: "I07",

  /**
   * RQA/RPA - Request for treatment authorization information
   */
  I08: "I08",

  /**
   * RQA/RPA - Request for modification to an authorization
   */
  I09: "I09",

  /**
   * RQA/RPA - Request for resubmission of an authorization
   */
  I10: "I10",

  /**
   * RQA/RPA - Request for cancellation of an authorization
   */
  I11: "I11",

  /**
   * REF/RRI - Patient referral
   */
  I12: "I12",

  /**
   * REF/RRI - Modify patient referral
   */
  I13: "I13",

  /**
   * REF/RRI - Cancel patient referral
   */
  I14: "I14",

  /**
   * REF/RRI - Request patient referral status
   */
  I15: "I15",

  /**
   * Collaborative Care Referral
   */
  I16: "I16",

  /**
   * Modify Collaborative Care Referral
   */
  I17: "I17",

  /**
   * Cancel Collaborative Care Referral
   */
  I18: "I18",

  /**
   * Collaborative Care Query/Collaborative Care Query Update
   */
  I19: "I19",

  /**
   * Asynchronous Collaborative Care Update
   */
  I20: "I20",

  /**
   * Collaborative Care Message
   */
  I21: "I21",

  /**
   * Collaborative Care Fetch / Collaborative Care Information
   */
  I22: "I22",

  /**
   * QCN/ACK - Cancel query/acknowledge message
   */
  J01: "J01",

  /**
   * QSX/ACK - Cancel subscription/acknowledge message
   */
  J02: "J02",

  /**
   * RSP - Segment pattern response in response to QBP^Q11
   */
  K11: "K11",

  /**
   * RTB - Tabular response in response to QBP^Q13
   */
  K13: "K13",

  /**
   * RDY - Display response in response to QBP^Q15
   */
  K15: "K15",

  /**
   * RSP - Get person demographics response
   */
  K21: "K21",

  /**
   * RSP - Find candidates response
   */
  K22: "K22",

  /**
   * RSP - Get corresponding identifiers response
   */
  K23: "K23",

  /**
   * RSP - Allocate identifiers response
   */
  K24: "K24",

  /**
   * RSP - Personnel Information by Segment Response
   */
  K25: "K25",

  /**
   * RSP -Dispense History Response
   */
  K31: "K31",

  /**
   * Find Candidates including Visit Information Response
   */
  K32: "K32",

  /**
   * Get Donor Record Candidates Response Message
   */
  K33: "K33",

  /**
   * Segment Pattern Response Message
   */
  K34: "K34",

  /**
   * MFN/MFK - Master file not otherwise specified
   */
  M01: "M01",

  /**
   * MFN/MFK - Master file - staff practitioner
   */
  M02: "M02",

  /**
   * MFN/MFK - Master file - test/observation
   */
  M03: "M03",

  /**
   * MFN/MFK - Master files charge description
   */
  M04: "M04",

  /**
   * MFN/MFK - Patient location master file
   */
  M05: "M05",

  /**
   * MFN/MFK - Clinical study with phases and schedules master file
   */
  M06: "M06",

  /**
   * MFN/MFK - Clinical study without phases but with schedules master file
   */
  M07: "M07",

  /**
   * MFN/MFK - Test/observation (numeric) master file
   */
  M08: "M08",

  /**
   * MFN/MFK - Test/observation (categorical) master file
   */
  M09: "M09",

  /**
   * MFN/MFK - Test /observation batteries master file
   */
  M10: "M10",

  /**
   * MFN/MFK - Test/calculated observations master file
   */
  M11: "M11",

  /**
   * MFN/MFK - Master file notification message
   */
  M12: "M12",

  /**
   * MFN/MFK - Master file notification - general
   */
  M13: "M13",

  /**
   * MFN/MFK - Master file notification - site defined
   */
  M14: "M14",

  /**
   * MFN/MFK - Inventory item master file notification
   */
  M15: "M15",

  /**
   * R0R - Pharmacy prescription order query response
   */
  R0R: "R0R",

  /**
   * MFN/MFK - Master File Notification Inventory Item Enhanced
   */
  M16: "M16",

  /**
   * DRG Master File Message
   */
  M17: "M17",

  /**
   * MFN/MFK - Master file notification - Test/Observation (Payer)
   */
  M18: "M18",

  /**
   * NMQ/NMR - Application management query message
   */
  N01: "N01",

  /**
   * NMD/ACK - Application management data message (unsolicited)
   */
  N02: "N02",

  /**
   * ORM - Order message (also RDE, RDS, RGV, RAS)
   */
  O01: "O01",

  /**
   * ORR - Order response (also RRE, RRD, RRG, RRA)
   */
  O02: "O02",

  /**
   * OMD - Diet order
   */
  O03: "O03",

  /**
   * ORD - Diet order acknowledgment
   */
  O04: "O04",

  /**
   * OMS - Stock requisition order
   */
  O05: "O05",

  /**
   * ORS - Stock requisition acknowledgment
   */
  O06: "O06",

  /**
   * OMN - Non-stock requisition order
   */
  O07: "O07",

  /**
   * ORN - Non-stock requisition acknowledgment
   */
  O08: "O08",

  /**
   * OMP - Pharmacy/treatment order
   */
  O09: "O09",

  /**
   * ORP - Pharmacy/treatment order acknowledgment
   */
  O10: "O10",

  /**
   * RDE - Pharmacy/treatment encoded order
   */
  O11: "O11",

  /**
   * RRE - Pharmacy/treatment encoded order acknowledgment
   */
  O12: "O12",

  /**
   * RDS - Pharmacy/treatment dispense
   */
  O13: "O13",

  /**
   * RRD - Pharmacy/treatment dispense acknowledgment
   */
  O14: "O14",

  /**
   * RGV - Pharmacy/treatment give
   */
  O15: "O15",

  /**
   * RRG - Pharmacy/treatment give acknowledgment
   */
  O16: "O16",

  /**
   * RAS - Pharmacy/treatment administration
   */
  O17: "O17",

  /**
   * RRA - Pharmacy/treatment administration acknowledgment
   */
  O18: "O18",

  /**
   * OMG - General clinical order
   */
  O19: "O19",

  /**
   * ORG/ORL - General clinical order response
   */
  O20: "O20",

  /**
   * OML - Laboratory order
   */
  O21: "O21",

  /**
   * ORL - General laboratory order response message to any OML
   */
  O22: "O22",

  /**
   * OMI - Imaging order
   */
  O23: "O23",

  /**
   * ORI - Imaging order response message to any OMI
   */
  O24: "O24",

  /**
   * RDE - Pharmacy/treatment refill authorization request
   */
  O25: "O25",

  /**
   * RRE - Pharmacy/Treatment Refill Authorization Acknowledgement
   */
  O26: "O26",

  /**
   * OMB - Blood product order
   */
  O27: "O27",

  /**
   * ORB - Blood product order acknowledgment
   */
  O28: "O28",

  /**
   * BPS - Blood product dispense status
   */
  O29: "O29",

  /**
   * BRP - Blood product dispense status acknowledgment
   */
  O30: "O30",

  /**
   * BTS - Blood product transfusion/disposition
   */
  O31: "O31",

  /**
   * BRT - Blood product transfusion/disposition acknowledgment
   */
  O32: "O32",

  /**
   * OML - Laboratory order for multiple orders related to a single specimen
   */
  O33: "O33",

  /**
   * ORL - Laboratory order response message to a multiple order related to single specimen OML
   */
  O34: "O34",

  /**
   * OML - Laboratory order for multiple orders related to a single container of a specimen
   */
  O35: "O35",

  /**
   * QRY/DSR - query for display results (See Q01)
   */
  R05: "R05",

  /**
   * ORL - Laboratory order response message to a single container of a specimen OML
   */
  O36: "O36",

  /**
   * UDM - unsolicited update/display results (See Q05)
   */
  R06: "R06",

  /**
   * OPL - Population/Location-Based Laboratory Order Message
   */
  O37: "O37",

  /**
   * OPR - Population/Location-Based Laboratory Order Acknowledgment Message
   */
  O38: "O38",

  /**
   * Specimen shipment centric laboratory order
   */
  O39: "O39",

  /**
   * Specimen Shipment Centric Laboratory Order Acknowledgment Message
   */
  O40: "O40",

  /**
   * DBC - Create Donor Record Message
   */
  O41: "O41",

  /**
   * DBU - Update Donor Record Message
   */
  O42: "O42",

  /**
   * RAR - Pharmacy administration information query response
   */
  RAR: "RAR",

  /**
   * General Order Message with Document Payload Acknowledgement Message
   */
  O43: "O43",

  /**
   * RDR - Pharmacy dispense information query response
   */
  RDR: "RDR",

  /**
   * EQQ - Embedded query language query
   */
  Q04: "Q04",

  /**
   * Donor Registration - Minimal Message
   */
  O44: "O44",

  /**
   * RER - Pharmacy encoded order information query response
   */
  RER: "RER",

  /**
   * Donor Eligibility Observations Message
   */
  O45: "O45",

  /**
   * RGR - Pharmacy dose information query response
   */
  RGR: "RGR",

  /**
   * Donor Eligiblity Message
   */
  O46: "O46",

  /**
   * VQQ - Virtual table query
   */
  Q07: "Q07",

  /**
   * Donor Request to Collect Message
   */
  O47: "O47",

  /**
   * SPQ - Stored procedure request
   */
  Q08: "Q08",

  /**
   * Donation Procedure Message
   */
  O48: "O48",

  /**
   * RQQ - event replay query
   */
  Q09: "Q09",

  /**
   * Pharmacy/Treatment Dispense Request Message
   */
  O49: "O49",

  /**
   * Pharmacy/Treatment Encoded Order Acknowledgment
   */
  O50: "O50",

  /**
   * OSU – Order Status Update
   */
  O51: "O51",

  /**
   * OSU – Order Status Update Acknowledgement
   */
  O52: "O52",

  /**
   * ORL - General Laboratory Order Acknowledgment Message (Patient Optional)
   */
  O53: "O53",

  /**
   * ORL - Laboratory Order Acknowledgment Message  – Multiple Order Per Specimen (Patient Optional)
   */
  O54: "O54",

  /**
   * ORL - Laboratory Order Acknowledgment Message  – Multiple Order Per Container of Specimen (Patient Optional)
   */
  O55: "O55",

  /**
   * ORL - Specimen Shipment Centric Laboratory Order Acknowledgment Message (Patient Optional)
   */
  O56: "O56",

  /**
   * OMQ- General Order Message with Document Payload
   */
  O57: "O57",

  /**
   * ORX - General Order Message with Document Payload Acknowledgement Message
   */
  O58: "O58",

  /**
   * OML - Laboratory order for additional work up
   */
  O59: "O59",

  /**
   * BAR/ACK - Add patient accounts
   */
  P01: "P01",

  /**
   * BAR/ACK - Purge patient accounts
   */
  P02: "P02",

  /**
   * DFT/ACK - Post detail financial transaction
   */
  P03: "P03",

  /**
   * QRY/DSP - Generate bill and A/R statements
   */
  P04: "P04",

  /**
   * BAR/ACK - Update account
   */
  P05: "P05",

  /**
   * BAR/ACK - End account
   */
  P06: "P06",

  /**
   * PEX - Unsolicited initial individual product experience report
   */
  P07: "P07",

  /**
   * QRY/DSR Display-oriented results, query/unsol. update (for backward compatibility only) (Replaced by Q05)
   */
  R03: "R03",

  /**
   * PEX - Unsolicited update individual product experience report
   */
  P08: "P08",

  /**
   * SUR - Summary product experience report
   */
  P09: "P09",

  /**
   * BAR/ACK -Transmit Ambulatory Payment  Classification(APC)
   */
  P10: "P10",

  /**
   * EDR - Enhanced Display Response
   */
  R07: "R07",

  /**
   * DFT/ACK - Post Detail Financial Transactions - New
   */
  P11: "P11",

  /**
   * TBR - Tabular Data Response
   */
  R08: "R08",

  /**
   * BAR/ACK - Update Diagnosis/Procedure
   */
  P12: "P12",

  /**
   * PPR - PC/ problem add
   */
  PC1: "PC1",

  /**
   * ERP - Event Replay Response
   */
  R09: "R09",

  /**
   * PPR - PC/ problem update
   */
  PC2: "PC2",

  /**
   * PPR - PC/ problem delete
   */
  PC3: "PC3",

  /**
   * QRY - PC/ problem query
   */
  PC4: "PC4",

  /**
   * PRR - PC/ problem response
   */
  PC5: "PC5",

  /**
   * PGL - PC/ goal add
   */
  PC6: "PC6",

  /**
   * PGL - PC/ goal update
   */
  PC7: "PC7",

  /**
   * PGL - PC/ goal delete
   */
  PC8: "PC8",

  /**
   * QRY - PC/ goal query
   */
  PC9: "PC9",

  /**
   * PPV - PC/ goal response
   */
  PCA: "PCA",

  /**
   * PPP - PC/ pathway (problem-oriented) add
   */
  PCB: "PCB",

  /**
   * PPP - PC/ pathway (problem-oriented) update
   */
  PCC: "PCC",

  /**
   * PPP - PC/ pathway (problem-oriented) delete
   */
  PCD: "PCD",

  /**
   * QRY - PC/ pathway (problem-oriented) query
   */
  PCE: "PCE",

  /**
   * PTR - PC/ pathway (problem-oriented) query response
   */
  PCF: "PCF",

  /**
   * PPG - PC/ pathway (goal-oriented) add
   */
  PCG: "PCG",

  /**
   * PPG - PC/ pathway (goal-oriented) update
   */
  PCH: "PCH",

  /**
   * PPG - PC/ pathway (goal-oriented) delete
   */
  PCJ: "PCJ",

  /**
   * QRY - PC/ pathway (goal-oriented) query
   */
  PCK: "PCK",

  /**
   * PPT - PC/ pathway (goal-oriented) query response
   */
  PCL: "PCL",

  /**
   * QRY/DSR - Query sent for immediate response
   */
  Q01: "Q01",

  /**
   * QRY/QCK - Query sent for deferred response
   */
  Q02: "Q02",

  /**
   * DSR/ACK - Deferred response to a query
   */
  Q03: "Q03",

  /**
   * UDM/ACK - Unsolicited display update message
   */
  Q05: "Q05",

  /**
   * OSQ/OSR - Query for order status
   */
  Q06: "Q06",

  /**
   * QBP - Query by parameter requesting an RSP segment pattern response
   */
  Q11: "Q11",

  /**
   * QBP - Query by parameter requesting an  RTB - tabular response
   */
  Q13: "Q13",

  /**
   * QBP - Query by parameter requesting an RDY display response
   */
  Q15: "Q15",

  /**
   * QSB - Create subscription
   */
  Q16: "Q16",

  /**
   * QVR - Query for previous events
   */
  Q17: "Q17",

  /**
   * QBP - Get person demographics
   */
  Q21: "Q21",

  /**
   * QBP - Find candidates
   */
  Q22: "Q22",

  /**
   * QBP - Get corresponding identifiers
   */
  Q23: "Q23",

  /**
   * QBP - Allocate identifiers
   */
  Q24: "Q24",

  /**
   * QBP - Personnel Information by Segment Query
   */
  Q25: "Q25",

  /**
   * ROR - Pharmacy/treatment order response
   */
  Q26: "Q26",

  /**
   * RAR - Pharmacy/treatment administration information
   */
  Q27: "Q27",

  /**
   * RDR - Pharmacy/treatment dispense information
   */
  Q28: "Q28",

  /**
   * RER - Pharmacy/treatment encoded order information
   */
  Q29: "Q29",

  /**
   * RGR - Pharmacy/treatment dose information
   */
  Q30: "Q30",

  /**
   * QBP Query Dispense history
   */
  Q31: "Q31",

  /**
   * Find Candidates including Visit Information
   */
  Q32: "Q32",

  /**
   * QBP - Get Donor Record Candidates
   */
  Q33: "Q33",

  /**
   * QBP - Get Donor Record
   */
  Q34: "Q34",

  /**
   * ORU/ACK - Unsolicited transmission of an observation message
   */
  R01: "R01",

  /**
   * QRY - Query for results of observation
   */
  R02: "R02",

  /**
   * ORF - Response to query; transmission of requested observation
   */
  R04: "R04",

  /**
   * OUL - Unsolicited laboratory observation
   */
  R21: "R21",

  /**
   * OUL - Unsolicited Specimen Oriented Observation Message
   */
  R22: "R22",

  /**
   * OUL - Unsolicited Specimen Container Oriented Observation Message
   */
  R23: "R23",

  /**
   * OUL - Unsolicited Order Oriented Observation Message
   */
  R24: "R24",

  /**
   * OPU - Unsolicited Population/Location-Based Laboratory Observation Message
   */
  R25: "R25",

  /**
   * OSM - Unsolicited Specimen Shipment Manifest Message
   */
  R26: "R26",

  /**
   * ORU - Unsolicited Point-Of-Care Observation Message Without Existing Order - Place An Order
   */
  R30: "R30",

  /**
   * ORU - Unsolicited New Point-Of-Care Observation Message - Search For An Order
   */
  R31: "R31",

  /**
   * ORU - Unsolicited Pre-Ordered Point-Of-Care Observation
   */
  R32: "R32",

  /**
   * ORA - Observation Report Acknowledgement
   */
  R33: "R33",

  /**
   * ORU - Unsolicited Report Alarm
   */
  R40: "R40",

  /**
   * Observation Report Alert Acknowledgement
   */
  R41: "R41",

  /**
   * ORU – Unsolicited Device Event Observation Message
   */
  R42: "R42",

  /**
   * ORU – Unsolicited Patient-Device Association Observation Message
   */
  R43: "R43",

  /**
   * ROR - Pharmacy prescription order query response
   */
  ROR: "ROR",

  /**
   * SRM/SRR - Request new appointment booking
   */
  S01: "S01",

  /**
   * SRM/SRR - Request appointment rescheduling
   */
  S02: "S02",

  /**
   * SRM/SRR - Request appointment modification
   */
  S03: "S03",

  /**
   * SRM/SRR - Request appointment cancellation
   */
  S04: "S04",

  /**
   * SRM/SRR - Request appointment discontinuation
   */
  S05: "S05",

  /**
   * SRM/SRR - Request appointment deletion
   */
  S06: "S06",

  /**
   * SRM/SRR - Request addition of service/resource on appointment
   */
  S07: "S07",

  /**
   * SRM/SRR - Request modification of service/resource on appointment
   */
  S08: "S08",

  /**
   * SRM/SRR - Request cancellation of service/resource on appointment
   */
  S09: "S09",

  /**
   * SRM/SRR - Request discontinuation of service/resource on appointment
   */
  S10: "S10",

  /**
   * SRM/SRR - Request deletion of service/resource on appointment
   */
  S11: "S11",

  /**
   * SIU/ACK - Notification of new appointment booking
   */
  S12: "S12",

  /**
   * SIU/ACK - Notification of appointment rescheduling
   */
  S13: "S13",

  /**
   * SIU/ACK - Notification of appointment modification
   */
  S14: "S14",

  /**
   * SIU/ACK - Notification of appointment cancellation
   */
  S15: "S15",

  /**
   * SIU/ACK - Notification of appointment discontinuation
   */
  S16: "S16",

  /**
   * SIU/ACK - Notification of appointment deletion
   */
  S17: "S17",

  /**
   * SIU/ACK - Notification of addition of service/resource on appointment
   */
  S18: "S18",

  /**
   * SIU/ACK - Notification of modification of service/resource on appointment
   */
  S19: "S19",

  /**
   * SIU/ACK - Notification of cancellation of service/resource on appointment
   */
  S20: "S20",

  /**
   * SIU/ACK - Notification of discontinuation of service/resource on appointment
   */
  S21: "S21",

  /**
   * SIU/ACK - Notification of deletion of service/resource on appointment
   */
  S22: "S22",

  /**
   * SIU/ACK - Notification of blocked schedule time slot(s)
   */
  S23: "S23",

  /**
   * SIU/ACK - Notification of opened ("unblocked") schedule time slot(s)
   */
  S24: "S24",

  /**
   * SQM/SQR - Schedule query message and response
   */
  S25: "S25",

  /**
   * SIU/ACK Notification that patient did not show up for schedule appointment
   */
  S26: "S26",

  /**
   * SIU/ACK - Broadcast Notification of Scheduled Appointments
   */
  S27: "S27",

  /**
   * SLR/SLS - Request new sterilization lot
   */
  S28: "S28",

  /**
   * SLR/SLS - Request Sterilization lot deletion
   */
  S29: "S29",

  /**
   * STI/STS - Request item
   */
  S30: "S30",

  /**
   * SDR/SDS - Request anti-microbial device data
   */
  S31: "S31",

  /**
   * SMD/SMS - Request anti-microbial device cycle data
   */
  S32: "S32",

  /**
   * STC/ACK - Notification of sterilization configuration
   */
  S33: "S33",

  /**
   * SLN/ACK - Notification of sterilization lot
   */
  S34: "S34",

  /**
   * SLN/ACK - Notification of sterilization lot deletion
   */
  S35: "S35",

  /**
   * SDN/ACK - Notification of anti-microbial device data
   */
  S36: "S36",

  /**
   * SCN/ACK - Notification of anti-microbial device cycle data
   */
  S37: "S37",

  /**
   * Containers Prepared for Specimen Collection
   */
  S38: "S38",

  /**
   * Specimen Collection Successful
   */
  S39: "S39",

  /**
   * Specimen Collection Unsuccessful
   */
  S40: "S40",

  /**
   * Specimen Departed
   */
  S41: "S41",

  /**
   * Specimen Arrived
   */
  S42: "S42",

  /**
   * Specimen Accepted
   */
  S43: "S43",

  /**
   * Specimen Rejected
   */
  S44: "S44",

  /**
   * Specimen Re-identified
   */
  S45: "S45",

  /**
   * Specimen De-identified
   */
  S46: "S46",

  /**
   * Specimen Sent to Archive
   */
  S47: "S47",

  /**
   * Specimen Retrieved from Archive
   */
  S48: "S48",

  /**
   * Specimen Disposed of
   */
  S49: "S49",

  /**
   * Specimen Procedure Step Successful , with Derived Specimen(s)
   */
  S50: "S50",

  /**
   * Specimen Procedure Step Successful, no Derived Specimen(s)
   */
  S51: "S51",

  /**
   * Specimen Procedure Step Unsuccessful
   */
  S52: "S52",

  /**
   * MDM/ACK - Original document notification
   */
  T01: "T01",

  /**
   * MDM/ACK - Original document notification and content
   */
  T02: "T02",

  /**
   * MDM/ACK - Document status change notification
   */
  T03: "T03",

  /**
   * MDM/ACK - Document status change notification and content
   */
  T04: "T04",

  /**
   * MDM/ACK - Document addendum notification
   */
  T05: "T05",

  /**
   * MDM/ACK - Document addendum notification and content
   */
  T06: "T06",

  /**
   * MDM/ACK - Document edit notification
   */
  T07: "T07",

  /**
   * MDM/ACK - Document edit notification and content
   */
  T08: "T08",

  /**
   * MDM/ACK - Document replacement notification
   */
  T09: "T09",

  /**
   * MDM/ACK - Document replacement notification and content
   */
  T10: "T10",

  /**
   * MDM/ACK - Document cancel notification
   */
  T11: "T11",

  /**
   * QRY/DOC - Document query
   */
  T12: "T12",

  /**
   * ESU/ACK - Automated equipment status update
   */
  U01: "U01",

  /**
   * ESR/ACK - Automated equipment status request
   */
  U02: "U02",

  /**
   * SSU/ACK - Specimen status update
   */
  U03: "U03",

  /**
   * SSR/ACK - specimen status request
   */
  U04: "U04",

  /**
   * INU/ACK  - Automated equipment inventory update
   */
  U05: "U05",

  /**
   * INR/ACK - Automated equipment inventory request
   */
  U06: "U06",

  /**
   * EAC/ACK - Automated equipment command
   */
  U07: "U07",

  /**
   * EAR/ACK - Automated equipment response
   */
  U08: "U08",

  /**
   * EAN/ACK - Automated equipment notification
   */
  U09: "U09",

  /**
   * TCU/ACK - Automated equipment test code settings update
   */
  U10: "U10",

  /**
   * TCR/ACK - Automated equipment test code settings request
   */
  U11: "U11",

  /**
   * LSU/ACK - Automated equipment log/service update
   */
  U12: "U12",

  /**
   * LSR/ACK - Automated equipment log/service request
   */
  U13: "U13",

  /**
   * INR/ACK – Automated Equipment Inventory Request
   */
  U14: "U14",

  /**
   * VXQ - Query for vaccination record
   */
  V01: "V01",

  /**
   * VXX - Response to vaccination query returning multiple PID matches
   */
  V02: "V02",

  /**
   * VXR - Vaccination record response
   */
  V03: "V03",

  /**
   * VXU - Unsolicited vaccination record update
   */
  V04: "V04",

  /**
   * MFQ/MFR - Master files query (use event same as asking for e.g., M05 - location)
   */
  Varies: "Varies",

  /**
   * ORU - Waveform result, unsolicited transmission of requested information
   */
  W01: "W01",

  /**
   * QRF - Waveform result, response to query
   */
  W02: "W02",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventTypeCodeCode =
  typeof Hl7VSEventTypeCodeCode[keyof typeof Hl7VSEventTypeCodeCode];
