/**
 * Value Set of codes that specify the type of adverse reaction that the recipient of the blood product experienced.
 * http://terminology.hl7.org/ValueSet/v2-0514
 */
export const Hl7VSTransfusionAdverseReactionCode = {
  /**
   * ABO Incompatible Transfusion Reaction
   */
  ABOIncompatibleTransfusionReaction: "ABOINC",

  /**
   * Acute Hemolytic Transfusion Reaction
   */
  AcuteHemolyticTransfusionReaction: "ACUTHEHTR",

  /**
   * Allergic Reaction - First
   */
  AllergicReactionFirst: "ALLERGIC1",

  /**
   * Allergic Reaction - Recurrent
   */
  AllergicReactionRecurrent: "ALLERGIC2",

  /**
   * Allergic Reaction - Repeating
   */
  AllergicReactionRepeating: "ALLERGICR",

  /**
   * Anaphylactic Reaction
   */
  AnaphylacticReaction: "ANAPHYLAC",

  /**
   * Reaction to Bacterial Contamination
   */
  ReactiontoBacterialContamination: "BACTCONTAM",

  /**
   * Delayed Hemolytic Transfusion Reaction
   */
  DelayedHemolyticTransfusionReaction: "DELAYEDHTR",

  /**
   * Delayed Serological Transfusion Reaction
   */
  DelayedSerologicalTransfusionReaction: "DELAYEDSTR",

  /**
   * Graft vs Host Disease - Transfusion - Associated
   */
  GraftvsHostDiseaseTransfusionAssociated: "GVHD",

  /**
   * Non-hemolytic Hypotensive Reaction
   */
  NonhemolyticHypotensiveReaction: "HYPOTENS",

  /**
   * Non-Hemolytic Fever Chill Transfusion Reaction - First
   */
  NonHemolyticFeverChillTransfusionReactionFirst: "NONHTR1",

  /**
   * Non-Hemolytic Fever Chill Transfusion Reaction - Recurrent
   */
  NonHemolyticFeverChillTransfusionReactionRecurrent: "NONHTR2",

  /**
   * Non-Hemolytic Fever Chill Transfusion Reaction - Repeating
   */
  NonHemolyticFeverChillTransfusionReactionRepeating: "NONHTRREC",

  /**
   * Non-Immune Hemolysis
   */
  NonImmuneHemolysis: "NONIMMUNE",

  /**
   * Non-Specific, Non-Hemolytic Transfusion Reaction
   */
  NonSpecificNonHemolyticTransfusionReaction: "NONSPEC",

  /**
   * No Evidence of Transfusion Reaction
   */
  NoEvidenceofTransfusionReaction: "NORXN",

  /**
   * Posttransfusion Purpura
   */
  PosttransfusionPurpura: "PTP",

  /**
   * Symptoms most likely due to volume overload
   */
  Symptomsmostlikelyduetovolumeoverload: "VOLOVER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTransfusionAdverseReactionCode =
  typeof Hl7VSTransfusionAdverseReactionCode[keyof typeof Hl7VSTransfusionAdverseReactionCode];
