import { evaluate as evaluateFhirPath } from "fhirpath";

export const FHIRPathShortcuts: Record<string, string> = {
  "Bundle/DomainResources":
    "Bundle.entry.select(resource).ofType(StructureDefinition).where(baseDefinition='http://hl7.org/fhir/StructureDefinition/DomainResource' and abstract=false)",
  "Bundle/Elements":
    "Bundle.entry.select(resource).ofType(StructureDefinition).where(baseDefinition='http://hl7.org/fhir/StructureDefinition/Element' and abstract=false)",
  "Bundle/ComplexElements":
    "Bundle.entry.select(resource).ofType(StructureDefinition).where(baseDefinition='http://hl7.org/fhir/StructureDefinition/Element' and kind='complex-type' and abstract=false)",
  "Bundle/PrimitiveElements":
    "Bundle.entry.select(resource).ofType(StructureDefinition).where(baseDefinition='http://hl7.org/fhir/StructureDefinition/Element' and kind='primitive-type' and abstract=false)",
  "StructureDefinition/SummaryElements":
    "StructureDefinition.snapshot.element.where(isSummary=true)",
};

/**
 * Evaluate a [FHIRPath](http://hl7.org/fhirpath/N1/) against some data.
 *
 * A number of shortcut expressions has been defined for ease of use. See `FHIRPathShortcuts`.
 */
export const fhirPath = (fnCtx: unknown, fhirPath: string) => {
  return evaluateFhirPath(fnCtx, FHIRPathShortcuts[fhirPath] || fhirPath);
};
