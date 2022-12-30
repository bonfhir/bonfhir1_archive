/**
 * Value Set of codes that specify the type of adverse reaction that the recipient of the blood product experienced.
 * http://terminology.hl7.org/ValueSet/v2-0514
 */
export const Hl7VSTransfusionAdverseReactionCode = {
  /**
   * ABO Incompatible Transfusion Reaction
   */
  ABOINC: "ABOINC",

  /**
   * Acute Hemolytic Transfusion Reaction
   */
  ACUTHEHTR: "ACUTHEHTR",

  /**
   * Allergic Reaction - First
   */
  ALLERGIC1: "ALLERGIC1",

  /**
   * Allergic Reaction - Recurrent
   */
  ALLERGIC2: "ALLERGIC2",

  /**
   * Allergic Reaction - Repeating
   */
  ALLERGICR: "ALLERGICR",

  /**
   * Anaphylactic Reaction
   */
  ANAPHYLAC: "ANAPHYLAC",

  /**
   * Reaction to Bacterial Contamination
   */
  BACTCONTAM: "BACTCONTAM",

  /**
   * Delayed Hemolytic Transfusion Reaction
   */
  DELAYEDHTR: "DELAYEDHTR",

  /**
   * Delayed Serological Transfusion Reaction
   */
  DELAYEDSTR: "DELAYEDSTR",

  /**
   * Graft vs Host Disease - Transfusion - Associated
   */
  GVHD: "GVHD",

  /**
   * Non-hemolytic Hypotensive Reaction
   */
  HYPOTENS: "HYPOTENS",

  /**
   * Non-Hemolytic Fever Chill Transfusion Reaction - First
   */
  NONHTR1: "NONHTR1",

  /**
   * Non-Hemolytic Fever Chill Transfusion Reaction - Recurrent
   */
  NONHTR2: "NONHTR2",

  /**
   * Non-Hemolytic Fever Chill Transfusion Reaction - Repeating
   */
  NONHTRREC: "NONHTRREC",

  /**
   * Non-Immune Hemolysis
   */
  NONIMMUNE: "NONIMMUNE",

  /**
   * Non-Specific, Non-Hemolytic Transfusion Reaction
   */
  NONSPEC: "NONSPEC",

  /**
   * No Evidence of Transfusion Reaction
   */
  NORXN: "NORXN",

  /**
   * Posttransfusion Purpura
   */
  PTP: "PTP",

  /**
   * Symptoms most likely due to volume overload
   */
  VOLOVER: "VOLOVER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTransfusionAdverseReactionCode =
  typeof Hl7VSTransfusionAdverseReactionCode[keyof typeof Hl7VSTransfusionAdverseReactionCode];
