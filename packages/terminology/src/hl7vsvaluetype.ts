/**
 * Concepts which specify the data type of OBX-5, Observation Value, and are a subset of the datatypes defined in HL7 Version 2.x.
 * http://terminology.hl7.org/ValueSet/v2-0125
 */
export const Hl7VSValueTypeCode = {
  /**
   * Address
   */
  Address: "AD",

  /**
   * Authorization information
   */
  Authorizationinformation: "AUI",

  /**
   * Charge code and date
   */
  Chargecodeanddate: "CCD",

  /**
   * Channel calibration parameters
   */
  Channelcalibrationparameters: "CCP",

  /**
   * Channel definition
   */
  Channeldefinition: "CD",

  /**
   * Coded element
   */
  Codedelement: "CE",

  /**
   * Coded element with formatted values
   */
  Codedelementwithformattedvalues: "CF",

  /**
   * Composite ID with check digit
   */
  CompositeIDwithcheckdigit: "CK",

  /**
   * Composite
   */
  Composite: "CM",

  /**
   * Composite ID number and name
   */
  CompositeIDnumberandname: "CN",

  /**
   * Coded with no exceptions
   */
  Codedwithnoexceptions: "CNE",

  /**
   * Composite ID number and name simplified
   */
  CompositeIDnumberandnamesimplified: "CNS",

  /**
   * Composite ID number and name simplified
   */
  CompositeIDnumberandnamesimplified: "CNN",

  /**
   * Composite price
   */
  Compositeprice: "CP",

  /**
   * Composite quantity with units
   */
  Compositequantitywithunits: "CQ",

  /**
   * Channel sensitivity and units
   */
  Channelsensitivityandunits: "CSU",

  /**
   * Coded with exceptions
   */
  Codedwithexceptions: "CWE",

  /**
   * Extended composite ID with check digit
   */
  ExtendedcompositeIDwithcheckdigit: "CX",

  /**
   * Daily deductible information
   */
  Dailydeductibleinformation: "DDI",

  /**
   * Date and institution name
   */
  Dateandinstitutionname: "DIN",

  /**
   * Discharge to location and date
   */
  Dischargetolocationanddate: "DLD",

  /**
   * Driver's license number
   */
  Driverslicensenumber: "DLN",

  /**
   * Delta
   */
  Delta: "DLT",

  /**
   * Date/time range
   */
  Datetimerange: "DR",

  /**
   * Date
   */
  Date: "DT",

  /**
   * Date/time
   */
  Datetime: "DTM",

  /**
   * Day type and number
   */
  Daytypeandnumber: "DTN",

  /**
   * Encapsulated data
   */
  Encapsulateddata: "ED",

  /**
   * Entity identifier
   */
  Entityidentifier: "EI",

  /**
   * Entity identifier pair
   */
  Entityidentifierpair: "EIP",

  /**
   * Error location and description
   */
  Errorlocationanddescription: "ELD",

  /**
   * Error location
   */
  Errorlocation: "ERL",

  /**
   * Financial class
   */
  Financialclass: "FC",

  /**
   * Family name
   */
  Familyname: "FN",

  /**
   * Formatted text
   */
  Formattedtext: "FT",

  /**
   * General timing specification
   */
  Generaltimingspecification: "GTS",

  /**
   * Hierarchic designator
   */
  Hierarchicdesignator: "HD",

  /**
   * Insurance certification definition
   */
  Insurancecertificationdefinition: "ICD",

  /**
   * Coded values for HL7 tables
   */
  CodedvaluesforHL7tables: "ID",

  /**
   * Coded value for user-defined tables
   */
  Codedvalueforuserdefinedtables: "IS",

  /**
   * Job code/class
   */
  Jobcodeclass: "JCC",

  /**
   * Location with address variation 1
   */
  Locationwithaddressvariation1: "LA1",

  /**
   * Location with address variation 2
   */
  Locationwithaddressvariation2: "LA2",

  /**
   * Multiplexed array
   */
  Multiplexedarray: "MA",

  /**
   * Money
   */
  Money: "MO",

  /**
   * Money and charge code
   */
  Moneyandchargecode: "MOC",

  /**
   * Money or percentage
   */
  Moneyorpercentage: "MOP",

  /**
   * Message type
   */
  Messagetype: "MSG",

  /**
   * Numeric array
   */
  Numericarray: "NA",

  /**
   * Name with date and location
   */
  Namewithdateandlocation: "NDL",

  /**
   * Numeric
   */
  Numeric: "NM",

  /**
   * Numeric range
   */
  Numericrange: "NR",

  /**
   * Occurrence code and date
   */
  Occurrencecodeanddate: "OCD",

  /**
   * Order sequence definition
   */
  Ordersequencedefinition: "OSD",

  /**
   * Occurrence span code and date
   */
  Occurrencespancodeanddate: "OSP",

  /**
   * Practitioner institutional privileges
   */
  Practitionerinstitutionalprivileges: "PIP",

  /**
   * Person location
   */
  Personlocation: "PL",

  /**
   * Practitioner license or other ID number
   */
  PractitionerlicenseorotherIDnumber: "PLN",

  /**
   * Person name
   */
  Personname: "PN",

  /**
   * Performing person time stamp
   */
  Performingpersontimestamp: "PPN",

  /**
   * Parent result link
   */
  Parentresultlink: "PRL",

  /**
   * Processing type
   */
  Processingtype: "PT",

  /**
   * Policy type and amount
   */
  Policytypeandamount: "PTA",

  /**
   * Query input parameter list
   */
  Queryinputparameterlist: "QIP",

  /**
   * Query selection criteria
   */
  Queryselectioncriteria: "QSC",

  /**
   * Row column definition
   */
  Rowcolumndefinition: "RCD",

  /**
   * Reference range
   */
  Referencerange: "RFR",

  /**
   * Repeat interval
   */
  Repeatinterval: "RI",

  /**
   * Room coverage
   */
  Roomcoverage: "RMC",

  /**
   * Reference pointer
   */
  Referencepointer: "RP",

  /**
   * Repeat pattern
   */
  Repeatpattern: "RPT",

  /**
   * Street Address
   */
  StreetAddress: "SAD",

  /**
   * Scheduling class value pair
   */
  Schedulingclassvaluepair: "SCV",

  /**
   * Sequence ID
   */
  SequenceID: "SI",

  /**
   * Structured numeric
   */
  Structurednumeric: "SN",

  /**
   * String of telephone number digits
   */
  Stringoftelephonenumberdigits: "SNM",

  /**
   * Specialty description
   */
  Specialtydescription: "SPD",

  /**
   * Specimen source
   */
  Specimensource: "SPS",

  /**
   * Sort order
   */
  Sortorder: "SRT",

  /**
   * String data
   */
  Stringdata: "ST",

  /**
   * Time
   */
  Time: "TM",

  /**
   * Telephone number
   */
  Telephonenumber: "TN",

  /**
   * Timing/quantity
   */
  Timingquantity: "TQ",

  /**
   * Time stamp
   */
  Timestamp: "TS",

  /**
   * Text data
   */
  Textdata: "TX",

  /**
   * UB value code and amount
   */
  UBvaluecodeandamount: "UVC",

  /**
   * Visiting hours
   */
  Visitinghours: "VH",

  /**
   * Version identifier
   */
  Versionidentifier: "VID",

  /**
   * Value range
   */
  Valuerange: "VR",

  /**
   * Channel Identifier
   */
  ChannelIdentifier: "WVI",

  /**
   * Waveform source
   */
  Waveformsource: "WVS",

  /**
   * Extended address
   */
  Extendedaddress: "XAD",

  /**
   * Extended composite ID number and name for persons
   */
  ExtendedcompositeIDnumberandnameforpersons: "XCN",

  /**
   * Extended composite name and ID number for organizations
   */
  ExtendedcompositenameandIDnumberfororganizations: "XON",

  /**
   * Extended person name
   */
  Extendedpersonname: "XPN",

  /**
   * Extended telecommunications number
   */
  Extendedtelecommunicationsnumber: "XTN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSValueTypeCode =
  typeof Hl7VSValueTypeCode[keyof typeof Hl7VSValueTypeCode];
