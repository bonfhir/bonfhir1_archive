/**
 * This value set defines an example set of codes that could be can be used to classify groupings of service-types/specialties.
 * http://terminology.hl7.org/ValueSet/program
 */
export const ProgramCode = {
  /**
   * Acquired Brain Injury (ABI) Program
   */
  "1": "1",

  /**
   * ABI Slow To Recover (ABI STR) Program
   */
  "2": "2",

  /**
   * Access Programs
   */
  "3": "3",

  /**
   * Adult and Further Education (ACFE) Program
   */
  "4": "4",

  /**
   * Adult Day Activity and Support Services (ADASS) Program
   */
  "5": "5",

  /**
   * Adult Day Care Program
   */
  "6": "6",

  /**
   * ATSS (Adult Training Support Service)
   */
  "7": "7",

  /**
   * Community Aged Care Packages (CACP)
   */
  "8": "8",

  /**
   * Care Coordination & Supplementary Services (CCSS)
   */
  "9": "9",

  /**
   * Cognitive Dementia Memory Service (CDAMS)
   */
  "10": "10",

  /**
   * ChildFIRST
   */
  "11": "11",

  /**
   * Children's Contact Services
   */
  "12": "12",

  /**
   * Community Visitors Scheme
   */
  "13": "13",

  /**
   * CPP (Community Partners Program)
   */
  "14": "14",

  /**
   * Closing the Gap (CTG)
   */
  "15": "15",

  /**
   * Coordinated Veterans' Care (CVC) Program
   */
  "16": "16",

  /**
   * Day Program
   */
  "17": "17",

  /**
   * Drop In Program
   */
  "18": "18",

  /**
   * Early Years Program
   */
  "19": "19",

  /**
   * Employee Assistance Program
   */
  "20": "20",

  /**
   * Home And Community Care (HACC)
   */
  "21": "21",

  /**
   * Hospital Admission Risk Program (HARP)
   */
  "22": "22",

  /**
   * Hospital in the Home (HITH) Program
   */
  "23": "23",

  /**
   * ICTP (Intensive Community Treatment Program)
   */
  "24": "24",

  /**
   * IFSS (Intensive Family Support Program)
   */
  "25": "25",

  /**
   * JPET (Job Placement, Education and Training)
   */
  "26": "26",

  /**
   * Koori Juvenile Justice Program
   */
  "27": "27",

  /**
   * Language Literacy and Numeracy Program
   */
  "28": "28",

  /**
   * Life Skills Program
   */
  "29": "29",

  /**
   * LMP (Lifestyle Modification Program)
   */
  "30": "30",

  /**
   * MedsCheck Program
   */
  "31": "31",

  /**
   * Methadone/Buprenorphine Program
   */
  "32": "32",

  /**
   * National Disabilities Insurance Scheme (NDIS)
   */
  "33": "33",

  /**
   * National Diabetes Services Scheme (NDSS)
   */
  "34": "34",

  /**
   * Needle/Syringe Program
   */
  "35": "35",

  /**
   * nPEP Program
   */
  "36": "36",

  /**
   * Personal Support Program
   */
  "37": "37",

  /**
   * Partners in Recovery (PIR) Program
   */
  "38": "38",

  /**
   * Pre-employment Program
   */
  "39": "39",

  /**
   * Reconnect Program
   */
  "40": "40",

  /**
   * Sexual Abuse Counselling and Prevention Program (SACPP)
   */
  "41": "41",

  /**
   * Social Support Programs
   */
  "42": "42",

  /**
   * Supported Residential Service (SRS)
   */
  "43": "43",

  /**
   * Tasmanian Aboriginal Centre (TAC)
   */
  "44": "44",

  /**
   * Victim's Assistance Program
   */
  "45": "45",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProgramCode = typeof ProgramCode[keyof typeof ProgramCode];
