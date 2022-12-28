/**
 * This value set includes a smattering of Prescription Product codes.
 * http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct
 */
export const ExampleVisionPrescriptionProductCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "vision-product",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">lens<a name="vision-product-lens"> </a></td><td>Lens</td><td>A lens to be fitted to a frame to comprise a pair of glasses.</td></tr><tr><td style="white-space:nowrap">contact<a name="vision-product-contact"> </a></td><td>Contact Lens</td><td>A lens to be fitted for wearing directly on an eye.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1188",
    },
  ],
  version: "4.3.0",
  name: "ExampleVisionPrescriptionProductCodes",
  title: "Example Vision Prescription Product Codes",
  status: "draft",
  experimental: false,
  description:
    "This value set includes a smattering of Prescription Product codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "lens",
      display: "Lens",
      definition:
        "A lens to be fitted to a frame to comprise a pair of glasses.",
    },
    {
      code: "contact",
      display: "Contact Lens",
      definition: "A lens to be fitted for wearing directly on an eye.",
    },
  ],
};
