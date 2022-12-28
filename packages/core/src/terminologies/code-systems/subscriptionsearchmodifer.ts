/**
 * This codesystem defines a set of codes that can be used to filter Subscription triggers.
 * http://terminology.hl7.org/CodeSystem/subscription-search-modifier
 */
export const SubscriptionSearchModiferCodeSystem = {
  resourceType: "CodeSystem",
  id: "subscription-search-modifier",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/subscription-search-modifier defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">=<a name="subscription-search-modifier-.61"> </a></td><td>=</td><td>Used to match a value according to FHIR Search rules (e.g., Patient/123, Encounter/2002).</td></tr><tr><td style="white-space:nowrap">eq<a name="subscription-search-modifier-eq"> </a></td><td>Equal</td><td>The value for the parameter in the resource is equal to the provided value.</td></tr><tr><td style="white-space:nowrap">ne<a name="subscription-search-modifier-ne"> </a></td><td>Not Equal</td><td>The value for the parameter in the resource is not equal to the provided value.</td></tr><tr><td style="white-space:nowrap">gt<a name="subscription-search-modifier-gt"> </a></td><td>Greater Than</td><td>The value for the parameter in the resource is greater than the provided value.</td></tr><tr><td style="white-space:nowrap">lt<a name="subscription-search-modifier-lt"> </a></td><td>Less Than</td><td>The value for the parameter in the resource is less than the provided value.</td></tr><tr><td style="white-space:nowrap">ge<a name="subscription-search-modifier-ge"> </a></td><td>Greater Than or Equal</td><td>The value for the parameter in the resource is greater or equal to the provided value.</td></tr><tr><td style="white-space:nowrap">le<a name="subscription-search-modifier-le"> </a></td><td>Less Than or Equal</td><td>The value for the parameter in the resource is less or equal to the provided value.</td></tr><tr><td style="white-space:nowrap">sa<a name="subscription-search-modifier-sa"> </a></td><td>Starts After</td><td>The value for the parameter in the resource starts after the provided value.</td></tr><tr><td style="white-space:nowrap">eb<a name="subscription-search-modifier-eb"> </a></td><td>Ends Before</td><td>The value for the parameter in the resource ends before the provided value.</td></tr><tr><td style="white-space:nowrap">ap<a name="subscription-search-modifier-ap"> </a></td><td>Approximately</td><td>The value for the parameter in the resource is approximately the same to the provided value. Note that the recommended value for the approximation is 10% of the stated value (or for a date, 10% of the gap between now and the date), but systems may choose other values where appropriate.</td></tr><tr><td style="white-space:nowrap">above<a name="subscription-search-modifier-above"> </a></td><td>Above</td><td>The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code.</td></tr><tr><td style="white-space:nowrap">below<a name="subscription-search-modifier-below"> </a></td><td>Below</td><td>The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code.</td></tr><tr><td style="white-space:nowrap">in<a name="subscription-search-modifier-in"> </a></td><td>In</td><td>The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is present in the specified Group, List, or Value Set.</td></tr><tr><td style="white-space:nowrap">not-in<a name="subscription-search-modifier-not-in"> </a></td><td>Not In</td><td>The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is NOT present in the specified Group, List, or Value Set.</td></tr><tr><td style="white-space:nowrap">of-type<a name="subscription-search-modifier-of-type"> </a></td><td>Of Type</td><td>The search parameter has the format system|code|value, where the system and code refer to a Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1526",
    },
  ],
  version: "4.3.0",
  name: "SubscriptionSearchModifer",
  status: "draft",
  experimental: false,
  description:
    "This codesystem defines a set of codes that can be used to filter Subscription triggers.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "=",
      display: "=",
      definition:
        "Used to match a value according to FHIR Search rules (e.g., Patient/123, Encounter/2002).",
    },
    {
      code: "eq",
      display: "Equal",
      definition:
        "The value for the parameter in the resource is equal to the provided value.",
    },
    {
      code: "ne",
      display: "Not Equal",
      definition:
        "The value for the parameter in the resource is not equal to the provided value.",
    },
    {
      code: "gt",
      display: "Greater Than",
      definition:
        "The value for the parameter in the resource is greater than the provided value.",
    },
    {
      code: "lt",
      display: "Less Than",
      definition:
        "The value for the parameter in the resource is less than the provided value.",
    },
    {
      code: "ge",
      display: "Greater Than or Equal",
      definition:
        "The value for the parameter in the resource is greater or equal to the provided value.",
    },
    {
      code: "le",
      display: "Less Than or Equal",
      definition:
        "The value for the parameter in the resource is less or equal to the provided value.",
    },
    {
      code: "sa",
      display: "Starts After",
      definition:
        "The value for the parameter in the resource starts after the provided value.",
    },
    {
      code: "eb",
      display: "Ends Before",
      definition:
        "The value for the parameter in the resource ends before the provided value.",
    },
    {
      code: "ap",
      display: "Approximately",
      definition:
        "The value for the parameter in the resource is approximately the same to the provided value. Note that the recommended value for the approximation is 10% of the stated value (or for a date, 10% of the gap between now and the date), but systems may choose other values where appropriate.",
    },
    {
      code: "above",
      display: "Above",
      definition:
        "The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code.",
    },
    {
      code: "below",
      display: "Below",
      definition:
        "The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code.",
    },
    {
      code: "in",
      display: "In",
      definition:
        "The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is present in the specified Group, List, or Value Set.",
    },
    {
      code: "not-in",
      display: "Not In",
      definition:
        "The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is NOT present in the specified Group, List, or Value Set.",
    },
    {
      code: "of-type",
      display: "Of Type",
      definition:
        "The search parameter has the format system|code|value, where the system and code refer to a Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.",
    },
  ],
};
