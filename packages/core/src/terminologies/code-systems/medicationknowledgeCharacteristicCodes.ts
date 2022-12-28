export const MedicationKnowledgeCharacteristicCodes = {
  resourceType: "CodeSystem",
  id: "medicationknowledge-characteristic",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">imprintcd<a name="medicationknowledge-characteristic-imprintcd"> </a></td><td>Imprint Code</td><td>Identyifying marks on product</td></tr><tr><td style="white-space:nowrap">size<a name="medicationknowledge-characteristic-size"> </a></td><td>Size</td><td>Description of size of the product</td></tr><tr><td style="white-space:nowrap">shape<a name="medicationknowledge-characteristic-shape"> </a></td><td>Shape</td><td>Description of the shape of the product</td></tr><tr><td style="white-space:nowrap">color<a name="medicationknowledge-characteristic-color"> </a></td><td>Color</td><td>Description of the color of the product</td></tr><tr><td style="white-space:nowrap">coating<a name="medicationknowledge-characteristic-coating"> </a></td><td>Coating</td><td>Description of the coating of the product</td></tr><tr><td style="white-space:nowrap">scoring<a name="medicationknowledge-characteristic-scoring"> </a></td><td>Scoring</td><td>Description of the scoring of the product</td></tr><tr><td style="white-space:nowrap">logo<a name="medicationknowledge-characteristic-logo"> </a></td><td>Logo</td><td>Description of the Logo of the product</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1338",
    },
  ],
  version: "4.3.0",
  name: "MedicationKnowledge Characteristic Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medicationknowledge-characteristic",
  content: "complete",
  concept: [
    {
      code: "imprintcd",
      display: "Imprint Code",
      definition: "Identyifying marks on product",
    },
    {
      code: "size",
      display: "Size",
      definition: "Description of size of the product",
    },
    {
      code: "shape",
      display: "Shape",
      definition: "Description of the shape of the product",
    },
    {
      code: "color",
      display: "Color",
      definition: "Description of the color of the product",
    },
    {
      code: "coating",
      display: "Coating",
      definition: "Description of the coating of the product",
    },
    {
      code: "scoring",
      display: "Scoring",
      definition: "Description of the scoring of the product",
    },
    {
      code: "logo",
      display: "Logo",
      definition: "Description of the Logo of the product",
    },
  ],
};
