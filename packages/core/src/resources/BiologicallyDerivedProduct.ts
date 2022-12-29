import { BiologicallyDerivedProduct } from "fhir/r4";

export const buildBiologicallyDerivedProduct = (
  resource: Omit<BiologicallyDerivedProduct, "resourceType">
) => ({
  ...resource,
  resourceType: "BiologicallyDerivedProduct",
});
