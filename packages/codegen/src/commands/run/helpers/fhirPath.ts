import { evaluate as evaluateFhirPath } from "fhirpath";
import hb from "handlebars";

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

export const fhirPath = (
  fnCtx: unknown,
  path: string,
  options: hb.HelperOptions
) => {
  const evaluated = evaluateFhirPath(fnCtx, FHIRPathShortcuts[path] || path);
  return evaluated.map((x) => options.fn(x)).join("");
};
