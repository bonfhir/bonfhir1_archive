export interface DrugInteractionListResponse {
  nlmDisclaimer?: string;
  fullInteractionTypeGroup?: FullInteractionTypeGroup[];
}

export interface FullInteractionTypeGroup {
  sourceDisclaimer?: string;
  sourceName?: string;
  fullInteractionType?: FullInteractionType[];
}

export interface FullInteractionType {
  comment?: string;
  minConcept?: MinConcept[];
  interactionPair?: InteractionPair[];
}

export interface InteractionPair {
  interactionConcept?: InteractionConcept[];
  severity?: string;
  description?: string;
}

export interface InteractionConcept {
  minConceptItem?: MinConcept;
  sourceConceptItem?: SourceConceptItem;
}

export interface MinConcept {
  rxcui?: string;
  name?: string;
  tty?: TTY;
}

export type TTY = "IN" | "PIN" | "SBD" | "SCD";

export interface SourceConceptItem {
  id?: string;
  name?: string;
  url?: string;
}
