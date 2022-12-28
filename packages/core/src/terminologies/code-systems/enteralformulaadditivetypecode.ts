/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/CodeSystem/entformula-additive
 */
export const EnteralFormulaAdditiveTypeCodeCodeSystem = {
  resourceType: "CodeSystem",
  id: "entformula-additive",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/entformula-additive defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">lipid<a name="entformula-additive-lipid"> </a></td><td>Lipid</td><td>Modular lipid enteral formula component</td></tr><tr><td style="white-space:nowrap">protein<a name="entformula-additive-protein"> </a></td><td>Protein</td><td>Modular protein enteral formula component</td></tr><tr><td style="white-space:nowrap">carbohydrate<a name="entformula-additive-carbohydrate"> </a></td><td>Carbohydrate</td><td>Modular carbohydrate enteral formula component</td></tr><tr><td style="white-space:nowrap">fiber<a name="entformula-additive-fiber"> </a></td><td>Fiber</td><td>Modular fiber enteral formula component</td></tr><tr><td style="white-space:nowrap">water<a name="entformula-additive-water"> </a></td><td>Water</td><td>Added water</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/entformula-additive",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1123",
    },
  ],
  version: "4.3.0",
  name: "EnteralFormulaAdditiveTypeCode",
  title: "Enteral Formula Additive Type Code",
  status: "draft",
  experimental: false,
  description:
    "EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "lipid",
      display: "Lipid",
      definition: "Modular lipid enteral formula component",
    },
    {
      code: "protein",
      display: "Protein",
      definition: "Modular protein enteral formula component",
    },
    {
      code: "carbohydrate",
      display: "Carbohydrate",
      definition: "Modular carbohydrate enteral formula component",
    },
    {
      code: "fiber",
      display: "Fiber",
      definition: "Modular fiber enteral formula component",
    },
    { code: "water", display: "Water", definition: "Added water" },
  ],
};
