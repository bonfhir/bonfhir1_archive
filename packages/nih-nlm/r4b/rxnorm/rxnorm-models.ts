export interface NDCProperties {
  ndcPropertyList?: NdcPropertyList;
}

export interface NdcPropertyList {
  ndcProperty?: NdcProperty[];
}

export interface NdcProperty {
  ndcItem: string;
  ndc9: string;
  ndc10: string;
  rxcui: string;
  splSetIdItem: string;
  packagingList: PackagingList;
  propertyConceptList: PropertyConceptList;
  source: string;
}

export interface PackagingList {
  packaging: string[];
}

export interface PropertyConceptList {
  propertyConcept: PropertyConcept[];
}

export interface PropertyConcept {
  propName: string;
  propValue: string;
}

export interface AllProperties {
  propConceptGroup?: PropConceptGroup;
}

export interface PropConceptGroup {
  propConcept?: PropConcept[];
}

export interface PropConcept {
  propCategory: "ATTRIBUTES" | "CODES" | "NAMES";
  propName: string;
  propValue: string;
}
