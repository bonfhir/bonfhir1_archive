export const Diet = {
  resourceType: "CodeSystem",
  id: "encounter-diet",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/diet defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">vegetarian<a name="encounter-diet-vegetarian"> </a></td><td>Vegetarian</td><td>Food without meat, poultry or seafood.</td></tr><tr><td style="white-space:nowrap">dairy-free<a name="encounter-diet-dairy-free"> </a></td><td>Dairy Free</td><td>Excludes dairy products.</td></tr><tr><td style="white-space:nowrap">nut-free<a name="encounter-diet-nut-free"> </a></td><td>Nut Free</td><td>Excludes ingredients containing nuts.</td></tr><tr><td style="white-space:nowrap">gluten-free<a name="encounter-diet-gluten-free"> </a></td><td>Gluten Free</td><td>Excludes ingredients containing gluten.</td></tr><tr><td style="white-space:nowrap">vegan<a name="encounter-diet-vegan"> </a></td><td>Vegan</td><td>Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.</td></tr><tr><td style="white-space:nowrap">halal<a name="encounter-diet-halal"> </a></td><td>Halal</td><td>Foods that conform to Islamic law.</td></tr><tr><td style="white-space:nowrap">kosher<a name="encounter-diet-kosher"> </a></td><td>Kosher</td><td>Foods that conform to Jewish dietary law.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/diet",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1091",
    },
  ],
  version: "4.3.0",
  name: "Diet",
  status: "draft",
  experimental: false,
  description:
    "This codesystem defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "vegetarian",
      display: "Vegetarian",
      definition: "Food without meat, poultry or seafood.",
    },
    {
      code: "dairy-free",
      display: "Dairy Free",
      definition: "Excludes dairy products.",
    },
    {
      code: "nut-free",
      display: "Nut Free",
      definition: "Excludes ingredients containing nuts.",
    },
    {
      code: "gluten-free",
      display: "Gluten Free",
      definition: "Excludes ingredients containing gluten.",
    },
    {
      code: "vegan",
      display: "Vegan",
      definition:
        "Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.",
    },
    {
      code: "halal",
      display: "Halal",
      definition: "Foods that conform to Islamic law.",
    },
    {
      code: "kosher",
      display: "Kosher",
      definition: "Foods that conform to Jewish dietary law.",
    },
  ],
};
