/**
 * This value sets refers to a specific supply item.
 * http://terminology.hl7.org/CodeSystem/supply-item-type
 */
export const SupplyItemTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "supplydelivery-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/supply-item-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">medication<a name="supplydelivery-type-medication"> </a></td><td>Medication</td><td>Supply is a kind of medication.</td></tr><tr><td style="white-space:nowrap">device<a name="supplydelivery-type-device"> </a></td><td>Device</td><td>What is supplied (or requested) is a device.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/supply-item-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1194",
    },
  ],
  version: "4.3.0",
  name: "SupplyItemType",
  title: "Supply Item Type",
  status: "draft",
  experimental: false,
  description: "This value sets refers to a specific supply item.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "medication",
      display: "Medication",
      definition: "Supply is a kind of medication.",
    },
    {
      code: "device",
      display: "Device",
      definition: "What is supplied (or requested) is a device.",
    },
  ],
};
