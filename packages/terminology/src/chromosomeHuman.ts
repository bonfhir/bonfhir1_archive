/**
 * Chromosome number for human.
 * http://terminology.hl7.org/ValueSet/chromosome-human
 */
export const Chromosome_humanCode = {
  /**
   * chromosome 1
   */
  "1": "1",

  /**
   * chromosome 2
   */
  "2": "2",

  /**
   * chromosome 3
   */
  "3": "3",

  /**
   * chromosome 4
   */
  "4": "4",

  /**
   * chromosome 5
   */
  "5": "5",

  /**
   * chromosome 6
   */
  "6": "6",

  /**
   * chromosome 7
   */
  "7": "7",

  /**
   * chromosome 8
   */
  "8": "8",

  /**
   * chromosome 9
   */
  "9": "9",

  /**
   * chromosome 10
   */
  "10": "10",

  /**
   * chromosome 11
   */
  "11": "11",

  /**
   * chromosome 12
   */
  "12": "12",

  /**
   * chromosome 13
   */
  "13": "13",

  /**
   * chromosome 14
   */
  "14": "14",

  /**
   * chromosome 15
   */
  "15": "15",

  /**
   * chromosome 16
   */
  "16": "16",

  /**
   * chromosome 17
   */
  "17": "17",

  /**
   * chromosome 18
   */
  "18": "18",

  /**
   * chromosome 19
   */
  "19": "19",

  /**
   * chromosome 20
   */
  "20": "20",

  /**
   * chromosome 21
   */
  "21": "21",

  /**
   * chromosome 22
   */
  "22": "22",

  /**
   * chromosome X
   */
  X: "X",

  /**
   * chromosome Y
   */
  Y: "Y",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Chromosome_humanCode =
  typeof Chromosome_humanCode[keyof typeof Chromosome_humanCode];
