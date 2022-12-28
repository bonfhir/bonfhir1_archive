/**
 * Type of part of a name for a Medicinal Product.
 * http://hl7.org/fhir/medicinal-product-name-part-type
 */
export const ProductNamePartTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "medicinal-product-name-part-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/medicinal-product-name-part-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">FullName<a name="medicinal-product-name-part-type-FullName"> </a></td><td>Full name</td></tr><tr><td style="white-space:nowrap">InventedNamePart<a name="medicinal-product-name-part-type-InventedNamePart"> </a></td><td>Invented name part</td></tr><tr><td style="white-space:nowrap">ScientificNamePart<a name="medicinal-product-name-part-type-ScientificNamePart"> </a></td><td>Scientific name part</td></tr><tr><td style="white-space:nowrap">StrengthPart<a name="medicinal-product-name-part-type-StrengthPart"> </a></td><td>Strength part</td></tr><tr><td style="white-space:nowrap">DoseFormPart<a name="medicinal-product-name-part-type-DoseFormPart"> </a></td><td>Pharmaceutical dose form part</td></tr><tr><td style="white-space:nowrap">FormulationPart<a name="medicinal-product-name-part-type-FormulationPart"> </a></td><td>Formulation part</td></tr><tr><td style="white-space:nowrap">IntendedUsePart<a name="medicinal-product-name-part-type-IntendedUsePart"> </a></td><td>Intended use part</td></tr><tr><td style="white-space:nowrap">PopulationPart<a name="medicinal-product-name-part-type-PopulationPart"> </a></td><td>Target population part</td></tr><tr><td style="white-space:nowrap">ContainerPart<a name="medicinal-product-name-part-type-ContainerPart"> </a></td><td>Container or pack part</td></tr><tr><td style="white-space:nowrap">DevicePart<a name="medicinal-product-name-part-type-DevicePart"> </a></td><td>Device part</td></tr><tr><td style="white-space:nowrap">TrademarkOrCompanyPart<a name="medicinal-product-name-part-type-TrademarkOrCompanyPart"> </a></td><td>Trademark or company name part</td></tr><tr><td style="white-space:nowrap">TimeOrPeriodPart<a name="medicinal-product-name-part-type-TimeOrPeriodPart"> </a></td><td>Time/Period part</td></tr><tr><td style="white-space:nowrap">FlavorPart<a name="medicinal-product-name-part-type-FlavorPart"> </a></td><td>Flavor part</td></tr><tr><td style="white-space:nowrap">DelimiterPart<a name="medicinal-product-name-part-type-DelimiterPart"> </a></td><td>Delimiter part</td></tr><tr><td style="white-space:nowrap">LegacyNamePart<a name="medicinal-product-name-part-type-LegacyNamePart"> </a></td><td>Legacy name</td></tr><tr><td style="white-space:nowrap">SpeciesNamePart<a name="medicinal-product-name-part-type-SpeciesNamePart"> </a></td><td>Target species name part</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "brr",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/medicinal-product-name-part-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1575",
    },
  ],
  version: "4.3.0",
  name: "ProductNamePartType",
  title: "ProductNamePartType",
  status: "draft",
  experimental: false,
  date: "2021-01-05T10:01:24+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Type of part of a name for a Medicinal Product.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medicinal-product-name-part-type",
  content: "complete",
  concept: [
    { code: "FullName", display: "Full name" },
    { code: "InventedNamePart", display: "Invented name part" },
    { code: "ScientificNamePart", display: "Scientific name part" },
    { code: "StrengthPart", display: "Strength part" },
    { code: "DoseFormPart", display: "Pharmaceutical dose form part" },
    { code: "FormulationPart", display: "Formulation part" },
    { code: "IntendedUsePart", display: "Intended use part" },
    { code: "PopulationPart", display: "Target population part" },
    { code: "ContainerPart", display: "Container or pack part" },
    { code: "DevicePart", display: "Device part" },
    {
      code: "TrademarkOrCompanyPart",
      display: "Trademark or company name part",
    },
    { code: "TimeOrPeriodPart", display: "Time/Period part" },
    { code: "FlavorPart", display: "Flavor part" },
    { code: "DelimiterPart", display: "Delimiter part" },
    { code: "LegacyNamePart", display: "Legacy name" },
    { code: "SpeciesNamePart", display: "Target species name part" },
  ],
};
