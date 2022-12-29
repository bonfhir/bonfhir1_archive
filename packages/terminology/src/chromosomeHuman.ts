/**
 * Chromosome number for human.
 * http://terminology.hl7.org/ValueSet/chromosome-human
 */
export const Chromosome_humanCode = {
  /**
   * chromosome 1
   */
  chromosome1: "1",

  /**
   * chromosome 2
   */
  chromosome2: "2",

  /**
   * chromosome 3
   */
  chromosome3: "3",

  /**
   * chromosome 4
   */
  chromosome4: "4",

  /**
   * chromosome 5
   */
  chromosome5: "5",

  /**
   * chromosome 6
   */
  chromosome6: "6",

  /**
   * chromosome 7
   */
  chromosome7: "7",

  /**
   * chromosome 8
   */
  chromosome8: "8",

  /**
   * chromosome 9
   */
  chromosome9: "9",

  /**
   * chromosome 10
   */
  chromosome10: "10",

  /**
   * chromosome 11
   */
  chromosome11: "11",

  /**
   * chromosome 12
   */
  chromosome12: "12",

  /**
   * chromosome 13
   */
  chromosome13: "13",

  /**
   * chromosome 14
   */
  chromosome14: "14",

  /**
   * chromosome 15
   */
  chromosome15: "15",

  /**
   * chromosome 16
   */
  chromosome16: "16",

  /**
   * chromosome 17
   */
  chromosome17: "17",

  /**
   * chromosome 18
   */
  chromosome18: "18",

  /**
   * chromosome 19
   */
  chromosome19: "19",

  /**
   * chromosome 20
   */
  chromosome20: "20",

  /**
   * chromosome 21
   */
  chromosome21: "21",

  /**
   * chromosome 22
   */
  chromosome22: "22",

  /**
   * chromosome X
   */
  chromosomeX: "X",

  /**
   * chromosome Y
   */
  chromosomeY: "Y",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Chromosome_humanCode =
  typeof Chromosome_humanCode[keyof typeof Chromosome_humanCode];
